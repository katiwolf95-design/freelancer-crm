"use client";

import { useState, useEffect } from "react";
import { updateInquiry } from "@/app/actions/inquiryActions";
import { useRouter } from "next/navigation";

type EditInquiryModalProps = {
    isOpen: boolean;
    onClose: () => void;

    inquiry?: {
        id: number;
        name: string;
        email: string;
        service: string;
        message: string;
        budget: number;
        status: string;
    } | null;
};

export default function EditInquiryModal({
    isOpen,
    onClose,
    inquiry,
}: EditInquiryModalProps) {

    
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [budget, setBudget] = useState(0);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (inquiry) {
            setName(inquiry.name);
            setEmail(inquiry.email);
            setService(inquiry.service);
            setMessage(inquiry.message);
            setBudget(inquiry.budget);
            setStatus(inquiry.status);
        }
    }, [inquiry]);

     async function handleSubmit() {
            if (!inquiry) return;
    
            const formData = new FormData();
    
            formData.append("name", name);
            formData.append("email", email);
            formData.append("service", service);
            formData.append("message", message);
            formData.append("budget", String(budget));
            formData.append("status", status);
    
            await updateInquiry(inquiry.id, formData);
    
            onClose();
            router.refresh();
        }
    
        if (!isOpen) return null;
    
        return (
            <div
                onClick={onClose}
                className="
                    fixed inset-0 bg-black/40
                    flex items-center justify-center z-50"
            >
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className="
                        bg-white rounded-2xl p-8
                        w-full max-w-lg shadow-xl"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Edit Inquiry
                    </h2>
    
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="
                            w-full border border-gray-300
                            rounded-xl p-3 mb-4
                        "
                    />
    
                    <input
                        type="text"
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
                        onChange={(e) => setBudget(Number(e.target.value))}
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
    
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="
                            w-full border border-gray-300
                            rounded-xl p-3 mb-4"
                    >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Converted">Converted</option>
                    </select>
    
                    <div className="flex justify-end gap-3 pt-4">
    
                        <button
                            onClick={handleSubmit}
                            className="
                                bg-[#9b8acb]
                                text-white
                                px-4 py-2
                                rounded-xl
                            "
                        >
                            Save
                        </button>
    
                        <button
                            onClick={onClose}
                            className="
                                px-4 py-2
                                rounded-xl
                                border
                            "
                        >
                            Close
                        </button>
    
                    </div>
                </div>
            </div>
        );
}