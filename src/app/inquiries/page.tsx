"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import InquiryGrid from "@/components/inquiries/InquiryGrid";
import { Search } from "lucide-react";

export default function InquiriesPage() {
    return (
        <div className="flex min-h-screen bg-[#f8f8fa]">

            <Sidebar />

            <main className="flex-1 p-8">
                <div className="flex justify-between items-start mb-8">

                    <div>
                        <h1 className="text-4xl font-bold">
                            Inquiries
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage incoming customer inquiries.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">

                        <button className="
                            bg-[#9b8acb] text-white px-5 py-2 rounded-xl
                            nover:opacity-90 transition
                        ">
                            + New Inquiry
                        </button>

                        <div className="relative">

                            <input
                                type="text"
                                placeholder="Search inquiry..."
                                className="
                                    w-72
                                    pl-4
                                    pr-12
                                    py-2
                                    rounded-xl
                                    border
                                    bg-white
                                "
                            />

                            <button
                                className="
                                    absolute
                                    right-2
                                    top-1/2
                                    -translate-y-1/2
                                    p-2
                                    rounded-lg
                                    hover:bg-gray-100
                                "
                            >
                                <Search size={18} />
                            </button>

                        </div>
                    </div>
                </div>

                <InquiryGrid />

            </main>
        </div>
    );
}