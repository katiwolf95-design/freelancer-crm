import Sidebar from "@/components/dashboard/Sidebar";
import InquiryGrid from "@/components/inquiries/InquiryGrid";
import AddInquiryButton from "@/components/inquiries/AddInquiryButton";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function InquiriesPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string }>;
}) {

    const params = await searchParams;
    const search = params.search ?? "";

    const inquiries = await prisma.inquiry.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    email: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    service: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
            ],
        },
        orderBy: {
            createdAt: "desc",
        },
    });

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

                        <AddInquiryButton />

                        <form className="relative">

                            <input
                                type="text"
                                name="search"
                                defaultValue={search}
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
                                type="submit"
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

                        </form>
                    </div>

                </div>

                {search && (
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">
                            Showing results for:
                            <span className="font-medium"> "{search}"</span>
                        </p>

                        <Link
                            href="/inquiries"
                            className="
                                text-sm
                                text-[#9b8acb]
                                hover:underline
                            "
                        >
                            ← Show all inquiries
                        </Link>
                    </div>
                )}

                <InquiryGrid inquiries={inquiries} />

            </main>
        </div>
    );
}