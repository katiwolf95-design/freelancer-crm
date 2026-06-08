import { prisma } from "@/lib/prisma";

export async function GET() {
    const customers = await prisma.customer.findMany();

    return Response.json(customers);
}

export async function POST(req: Request) {
    const body = await req.json();

    const newCustomer = await prisma.customer.create({
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return Response.json(newCustomer);
}