"use client";

import { useState } from "react";

export default function CustomerForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    return (
        <form className="bg-white p-6 rounded-2xl shadow mb-6">
            <div className="grid gap-4">

                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <input 
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border rounded-xl p-3"
                />

                <button 
                    type="submit"
                    className="
                        bg-[#9b8acb]
                        text-white
                        px-4 py-3 rounded-xl"
                >
                    Save Customer
                </button>

            </div>
        </form>
    );
}