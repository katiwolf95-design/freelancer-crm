"use client";

import { useState } from "react";
import { createInquiry } from "@/app/actions/inquiryActions";
import { useRouter } from "next/navigation";

export default function AddInquiryButton() {

    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        await createInquiry(formData);

        setShowModal(false);

        setName("");
        setEmail("");
        setService("");
        setBudget("");
        setMessage("");

        router.refresh();
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
                    bg-[#9b8acb]
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    hover:opacity-90
                    transition
                "
            >
                + New Inquiry
            </button>

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="
                        fixed inset-0 bg-black/40
                        flex items-center justify-center z-50
                    "
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                            bg-white
                            rounded-2xl
                            p-8
                            w-full
                            max-w-lg
                            shadow-xl
                        "
                    >
                        <h2 className="text-2xl font-semibold mb-6">
                            Add Inquiry
                        </h2>

                        <form
                            action={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                name="name"
                                type="text"
                                placeholder="Customer Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3 mb-4
                                "
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3 mb-4
                                "
                            />

                            <input
                                name="service"
                                type="text"
                                placeholder="Service"
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3 mb-4
                                "
                            />

                            <input
                                name="budget"
                                type="number"
                                placeholder="Budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3 mb-4
                                "
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3 mb-4
                                "
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="
                                        px-4 py-2 rounded-xl border
                                    "
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="
                                        bg-[#9b8acb]
                                        text-white
                                        px-5 py-2
                                        rounded-xl
                                    "
                                >
                                    Save Inquiry
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
}