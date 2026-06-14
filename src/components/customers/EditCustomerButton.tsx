"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import CustomerForm from "./CustomerForm";
import { updateCustomer } from "@/app/actions/customerActions";

type Customer = {
    id: number;
    name: string;
    email: string;
    company: string;
    status: string;
};

export default function EditCustomerButton({
    customer,
}: {
    customer: Customer;
}) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
                    p-2
                    rounded-xl
                    text-[#9b8acb]
                    hover:bg-[#9b8acb]/20
                    transition
                "
            >
                <Pencil size={16} />
            </button>

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="
                        fixed inset-0
                        bg-black/40
                        flex items-center justify-center
                        z-50
                    "
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                            bg-white
                            rounded-2xl
                            p-8
                            w-full
                            max-w-xl
                            shadow-xl
                        "
                    >
                        <h2 className="text-2xl font-semibold mb-6">
                            Edit Customer
                        </h2>

                        <CustomerForm
                            customer={customer}
                            action={updateCustomer}
                        />
                    </div>
                </div>
            )}
        </>
    );
}