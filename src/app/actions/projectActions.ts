"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const status = formData.get("status") as string;
    const customerId = Number(formData.get("customerId"));
    const dueDate = formData.get("dueDate") as string;
    const progress = Number(
        formData.get("progress")
    );

    await prisma.project.create({
        data: {
            title,
            price,
            status,
            customerId,
            dueDate,
            progress,
        },
    });

    revalidatePath("/projects");
}