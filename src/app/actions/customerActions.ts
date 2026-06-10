"use server";

import  { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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