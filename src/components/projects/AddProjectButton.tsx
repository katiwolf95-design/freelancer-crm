"use client";

import { useState } from "react";
import { createProject } from "@/app/actions/projectActions";

type Customer = {
    id: number;
    name: string;
};

export default function AddProjectButton({
    customers,
}: {
    customers: Customer[];
}) {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("Lead");

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="
                    bg-[#9b8acb] text-white px-5 py-2
                    rounded-xl hover:opacity-90 transition"
            >
                + New Project
            </button>

            {showModal && (
                <div
                    onClick={() => setShowModal(false)}
                    className="
                        fixed inset-0 bg-black/40
                        flex items-center justify-center z-50"
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
                            Add Project
                        </h2>

                        <form 
                            action={createProject}
                            className="space-y-4"
                        >

                            <input
                                name="title"
                                type="text"
                                placeholder="Project Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3"
                            />

                            <input
                                name="price"
                                type="text"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3"
                            />

                            <select 
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="
                                    w-full border border-gray-300
                                    rounded-xl p-3"
                            >
                                <option value="Planning">Planning</option>

                                <option value="In Progress">In Progress</option>

                                <option value="Review">Review</option>
                            </select>

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Due Date
                                </label>

                                <input
                                    name="dueDate"
                                    type="date"
                                    className="
                                        w-full
                                        border border-gray-300
                                        rounded-xl
                                        p-3
                                    "
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Progress
                                </label>

                                <input
                                    name="progress"
                                    type="number"
                                    min="0"
                                    max="100"
                                    defaultValue={0}
                                    className="
                                        w-full
                                        border border-gray-300
                                        rounded-xl
                                        p-3
                                    "
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Customer
                                </label>

                                <select 
                                    name="customerId"
                                    className="
                                        w-full border border-gray-300
                                        rounded-xl p-3"
                                >
                                    {customers.map((customer) => (
                                        <option
                                            key={customer.id}
                                            value={customer.id}
                                        >
                                            {customer.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">

                                <button 
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="
                                        px-4 py-2 rounded-xl border"
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
                                    Save Project
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}