"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createInquiry(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;
    const budget = Number(formData.get("budget"));

    await prisma.inquiry.create({
        data: {
            name,
            email,
            service,
            message,
            budget,
            status: "New",
        },
    });

    revalidatePath("/inquiries");
}

export async function updateInquiry(
    id: number,
    formData: FormData
) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;
    const budget = Number(formData.get("budget"));
    const status = formData.get("status") as string;

    await prisma.inquiry.update({
        where: {
            id,
        },
        data: {
            name,
            email,
            service,
            message,
            budget,
            status,
        },
    });

    revalidatePath("/inquiries");
}

export async function deleteInquiry(id: number) {

    await prisma.inquiry.delete({
        where: {
            id,
        },
    });

    revalidatePath("/inquiries");
}

export async function convertInquiry(id: number) {

    const inquiry = await prisma.inquiry.findUnique({
        where: {
            id,
        },
    });

    if (!inquiry) return;

    await prisma.customer.create({
        data: {
            name: inquiry.name,
            email: inquiry.email,
        },
    });

    await prisma.inquiry.update({
        where: {
            id,
        },
        data: {
            status: "Converted",
        },
    });

    revalidatePath("/customers");
    revalidatePath("/inquiries");
}