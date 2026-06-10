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

export async function deleteProject(id: number) {
    await prisma.project.delete({
        where: {
            id,
        },
    });

    revalidatePath("/projects");
}

export async function updateProject(
    id: number,
    formData: FormData
) {
    await prisma.project.update({
        where: {
            id,
        },
        data: {
            title: formData.get("title") as string,
            price: formData.get("price") as string,
            status: formData.get("status") as string,
            dueDate: formData.get("dueDate") as string,
            progress: Number(
                formData.get("progress")
            ),
        },
    });

    revalidatePath("/projects");
}