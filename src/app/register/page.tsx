"use client";

import { useState } from "react";
import { registerUser } from "../actions/authActions";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function RegisterPage() {

    const [showPassword, setShowPassword] =
        useState(false);

    const [
        showConfirmPassword,
        setShowConfirmPassword,
    ] = useState(false);

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const router = useRouter();

    const [error, setError] = useState("");

    async function handleRegister(
        formData: FormData
    ) {
        const result =
            await registerUser(formData);

        if (result?.error) {
            setError(result.error);
            return;
        }

        setError("");

        setShowSuccessModal(true);

        setTimeout(() => {
            router.push("/login");
        }, 5000);
    }

        
    return (
        
        <div className="min-h-screen bg-[#f8f8fa] flex items-center justify-center">

            <div className="
                bg-white
                rounded-3xl
                shadow-lg
                p-10
                w-full
                max-w-md
            ">
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="/logos/solinea-hub-3.svg"
                        alt="Solinea Hub"
                        width={85}
                        height={85}
                        className="mb-2"
                    />

                    <h1 className="
                        text-4xl
                        font-normal
                        text-[#1f1f1f]
                    ">
                        <span className="font-serif">Solinea</span> 
                        {" "}
                        <span className="text-[#9b8acb] font-medium">Hub</span>
                    </h1>

                    <p className="
                        text-center
                        text-gray-500
                        mb-6 mt-4
                    ">
                        Create your account
                    </p>
                </div>

                <form
                action={handleRegister}
                className="space-y-4"
                >
                    <input 
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="border p-3 w-full rounded-xl"
                    />

                    {error && (
                        <p className="
                            text-red-500
                            text-sm
                            mt-1
                        ">
                            ⚠️ {error}
                        </p>
                    )}

                    <div className="relative">

                        <input
                            name="password"
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Password"
                            className="
                                border p-3 w-full
                                rounded-xl
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="
                                absolute right-3 top-1/2
                                -translate-y-1/2
                                text-sm text-gray-500
                            "
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>

                    </div>

                    <div className="relative">

                        <input
                            name="confirmPassword"
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm Password"
                            className="
                                border p-3 w-full
                                rounded-xl mb-4
                            "
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="
                                absolute right-3 top-1/2
                                -translate-y-1/2
                                text-sm text-gray-500
                            "
                        >
                            {showConfirmPassword
                                ? "Hide"
                                : "Show"}
                        </button>

                    </div>

                    <button
                        type="submit"
                        className="mx-auto block bg-[#9b8acb] text-white px-8 py-2 rounded-xl hover:opacity-90 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="
                    text-center
                    text-sm
                    text-gray-500
                    mt-6
                ">
                    Already have an account?
                </p>

                <Link
                    href="/login"
                    className="
                        block
                        text-center
                        text-[#9b8acb]
                        mt-2
                    "
                >
                    Login
                </Link>
            </div>

            {showSuccessModal && (
                <div className="
                    fixed inset-0 bg-black/40 flex items-center
                    justify-center z-50
                ">
                    <div className="
                        bg-white rounded-3xl p-8 max-w-md 
                        w-full text-center shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            Account created
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Welcome to Solinea Hub.
                            <br />
                            Redirecting to login in 5 seconds...
                        </p>

                        <button 
                            onClick={() =>
                                router.push("/login")
                            }
                            className="bg-[#9b8acb] text-white px-6 py-2 rounded-xl"
                        >
                            Continue to Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}