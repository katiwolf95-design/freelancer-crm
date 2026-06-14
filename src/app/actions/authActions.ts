"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function registerUser(
    formData: FormData
) {
    const firstName = String(
        formData.get("firstName")
    );

    const lastName = String(
        formData.get("lastName")
    );
    
    const email = String(
        formData.get("email")
    );

    const password = String(
        formData.get("password")
    );

    const confirmPassword = String(
        formData.get("confirmPassword")
    );

    if (password !== confirmPassword) {
        return {
            error: "Passwords do not match",
        };
    }

    const existingUser =
        await prisma.user.findUnique({
            where: {
                email,
            },
        });

    if (existingUser) {
        return {
            error:
                "Email already exists",
        };
    }

    const hashedPassword =
        await bcrypt.hash(password, 10);

    console.log("CREATING USER:", email);    

    await prisma.user.create({
        data: {
            // firstName,
            // lastName,
            email,
            password: hashedPassword,
        },
    });

    console.log("USER SAVED");

    return {
        success: true,
    };
}

export async function loginUser(
    formData: FormData
) {
    const email = String(
        formData.get("email")
    );

    const password = String(
        formData.get("password")
    );

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return;
    }

    const passwordMatch =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!passwordMatch) {
        return;
    }

    const cookieStore = await cookies();

    cookieStore.set(
        "session",
        String(user.id),
        {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        }
    );

    redirect("/dashboard");
}

export async function logoutUser() {

    const cookieStore =
        await cookies();

    cookieStore.delete("session");

    redirect("/");
}