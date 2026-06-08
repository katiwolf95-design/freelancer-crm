"use client";

import { useState } from "react";

export default function AddCustomerButton() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("Lead");

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
                    bg-[#9b8acb] text-white px-5 py-2
                    rounded-xl hover:opacity-90 transition
                "
            >
                + Add Customer
            </button>

            {showModal && (
                <div 
                    onClick={() => setShowModal(false)}
                    className="
                        fixed inset-0 bg-black/40 flex items-center
                        justify-center z-50
                ">
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
                            Add Customer
                        </h2>

                        <form className="space-y-4">

                            <input 
                                type="text"
                                placeholder="Customer Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="
                                    w-full border border-gray-300 rounded-xl p-2"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-xl
                                    p-2
                                "
                            />

                            <input
                                type="text"
                                placeholder="Company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="
                                    w-full
                                    border border-gray-300
                                    rounded-xl
                                    p-2
                                "
                            />

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Status
                                </label>

                                <select
                                    className="
                                        w-full
                                        border
                                        rounded-xl
                                        p-3
                                    "
                                >
                                    <option value="Lead">
                                        Lead
                                    </option>

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Active">
                                        Active
                                    </option>
                                </select>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="
                                        px-4 py-2
                                        rounded-xl
                                        border
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
                                    Save Customer
                                </button>

                            </div>
                        </form>
                    </div>
                    
                </div>
            )}
        </>
    );
}