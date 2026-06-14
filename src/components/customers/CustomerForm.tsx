"use client";

type CustomerFormProps = {
    customer?: {
        id: number;
        name: string;
        email: string;
        company: string;
        status: string;
    };
    action: (formData: FormData) => Promise<void>;
};

import { useState } from "react";


export default function CustomerForm({
    customer,
    action,
}: CustomerFormProps) {

    const [name, setName] = useState(
        customer?.name || ""
    );

    const [email, setEmail] = useState(
        customer?.email || ""
    );

    const [company, setCompany] = useState(
        customer?.company || ""
    );

    const [status, setStatus] = useState(
        customer?.status || "Lead"
    );

    

    return (
        <form 
            action={action}
            className="bg-white p-6 rounded-2xl shadow mb-6">
            
            {customer && (
                <input
                    type="hidden"
                    name="id"
                    value={customer.id}
                />
            )}
            
            <div className="grid gap-4">

                <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <input 
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border rounded-xl p-3"
                >
                    <option value="Lead">
                        Lead
                    </option>

                    <option value="Prospect">
                        Prospect
                    </option>

                    <option value="Active">
                        Active
                    </option>

                    <option value="Inactive">
                        Inactive
                    </option>
                </select>

                <button 
                    type="submit"
                    className="
                        bg-[#9b8acb]
                        text-white
                        px-4 py-3 rounded-xl"
                >
                    {customer
                        ? "Update Customer"
                        : "Save Customer"}
                </button>

            </div>
        </form>

        
    );
}