"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import CustomerTable from "@/components/customers/CustomerTable";
import { useEffect, useState } from "react";

type CustomerType = {
    id: number;
    name: string;
    email: string;
};

export default function Customers() {
    const [customers, setCustomers] = useState<CustomerType[]>([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("/api/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data));
        }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await fetch("/api/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            }),
        });

        const res = await fetch("/api/customers");
        const data = await res.json();

        setCustomers(data);

        setName("");
        setEmail("");
    };

    return (
    <div>
        <h1 className="text-xl font-bold">Kunden</h1>

        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 mb-6 max-w-sm"
        >
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded"
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
            />

            <button
                type="submit"
                className="bg-black text-white p-2 rounded"
            >
                Add Customer
            </button>
        </form>

        <ul className="space-y-2">
            {customers.map((customer: CustomerType) => (
                <li
                    key={customer.id}
                    className="bg-white p-4 shadow rounded"
                >
                    <p>{customer.name}</p>
                    <p className="text-sm text-gray-500">
                        {customer.email}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  );
}