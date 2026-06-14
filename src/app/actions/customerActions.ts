"use server";

import  { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createCustomer(formData: FormData) {
    
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const status = formData.get("status") as string;

    await prisma.customer.create({
        data: {
            name,
            email,
            company,
            status,
        },
    });

    revalidatePath("/customers");
}

export async function updateCustomer(
    formData: FormData
) {
    const id = Number(formData.get("id"));

    await prisma.customer.update({
        where: {
            id,
        },
        data: {
            name: String(formData.get("name")),
            email: String(formData.get("email")),
            company: String(formData.get("company")),
            status: String(formData.get("status")),
        },
    });

    revalidatePath("/customers");
    revalidatePath(`/customers/${id}`);
    redirect(`/customers/${id}`);
}

export async function deleteCustomer(
    id: number
) {
    "use server";

    await prisma.customer.delete({
        where: {
            id,
        },
    });

    revalidatePath("/customers");
    redirect("/customers");
}