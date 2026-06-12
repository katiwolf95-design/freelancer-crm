"use client";

import { useState, useEffect } from "react";
import { updateProject } from "@/app/actions/projectActions";
import { useRouter } from "next/navigation";

type EditProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project?: {
        id: number;
        title: string;
        price: string;
        status: string;
        progress: number;
        dueDate: string | null;
    } | null;
};

export default function EditProjectModal({
    isOpen,
    onClose,
    project,
}: EditProjectModalProps) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [progress, setProgress] = useState(0);
    const [dueDate, setDueDate] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setPrice(project.price);
            setStatus(project.status);
            setProgress(project.progress);
            setDueDate(project.dueDate ?? "");
        }
    }, [project]);

    async function handleSubmit() {
        if (!project) return;

        const formData = new FormData();

        formData.append("title", title);
        formData.append("status", status);
        formData.append("progress", String(progress));
        formData.append("dueDate", dueDate);
        formData.append("price", price);

        await updateProject(project.id, formData);

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
                    Edit Project
                </h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="
                        w-full border border-gray-300
                        rounded-xl p-3 mb-4
                    "
                />

                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                    <option value="Planning">Planning</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    
                </select>

                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Progress
                    </label>

                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={(e) =>
                            setProgress(Number(e.target.value))
                        }
                        className="
                            w-full
                            border border-gray-300
                            rounded-xl
                            p-3
                            mb-4
                        "
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Due Date
                    </label>

                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="
                            w-full
                            border border-gray-300
                            rounded-xl
                            p-3
                            mb-4
                        "
                    />
                </div>

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