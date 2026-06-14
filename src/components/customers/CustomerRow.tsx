"use client";

import { useRouter } from "next/navigation";
import { customerStatusStyles } from "@/lib/statusStyles";

type Customer = {
    id: number;
    name: string;
    company: string;
    email: string;
    status: string;
};

export default function CustomerRow({
    customer,
}: {
    customer: Customer;
}) {
    const router = useRouter();

    return (
        <tr 
            onClick={() => router.push(`/customers/${customer.id}`)}
            className="border-b border-gray-200 last:border-0 hover:bg-[#faf9fd] transition cursor-pointer"
        >
            <td className="py-6">
                <div className="flex items-center gap-3">

                    <div className="
                        w-10 h-10 rounded-full bg-[#9b8acb]/10
                        text-[#9b8acb] flex items-center justify-center
                        font-semibold"
                    >
                            {customer.name.charAt(0)}
                    </div>

                    <div>
                        <p className="font-medium">
                            {customer.name}
                        </p>

                        <p className="text-sm text-gray-500">
                            {customer.email}
                        </p>
                    </div>
                    
                </div>
            </td>

            <td className="py-4">
                {customer.company}
            </td>

            <td className="py-4">
                <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${customerStatusStyles[customer.status]}
                `}>
                    {customer.status}
                </span>
            </td>
        </tr>
    );
}