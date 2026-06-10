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
    const router = useRouter();

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setPrice(project.price);
        }
    }, [project]);

    async function handleSubmit() {
        if (!project) return;

        const formData = new FormData();

        formData.append("title", title);
        formData.append("status", project.status);
        formData.append("progress", String(project.progress));
        formData.append("dueDate", project.dueDate ?? "");
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
                />

                <button 
                    onClick={handleSubmit}
                    className="
                        bg-[#9b8acb] text-white px-4 py-2
                        rounded-xl ml-3"
                >
                    Save
                </button>

                <button
                    onClick={onClose}
                    className="
                        px-4 py-2
                        rounded-xl border"
                >
                    Close
                </button>
            </div>
        </div>
    );

}