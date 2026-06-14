"use client";

import { Trash2 } from "lucide-react";
import { deleteCustomer } from "@/app/actions/customerActions";
import { useRouter } from "next/navigation";


export default function DeleteCustomerButton({
    customerId,
}: {
    customerId: number;
}) {

    async function handleDelete() {

        const confirmed = window.confirm(
            "Delete this customer?"
        );

        if (!confirmed) return;

        try {
            await deleteCustomer(customerId);

            router.push("/customers");
        } catch {
            alert(
                "This customer still has projects assigned."
            );
        }
    }

    const router = useRouter();

    return (
        <button
            onClick={handleDelete}
            className="
                p-2
                rounded-xl
                text-red-500
                hover:bg-red-100
                transition
            "
        >
            <Trash2 size={16} />
        </button>
    );
}