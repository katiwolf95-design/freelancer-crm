import { prisma } from "@/lib/prisma";

export default async function RecentInquiries() {

    const inquiries = await prisma.inquiry.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 2,
    });

    return (
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
                Recent Inquiries
            </h2>

            <div className="space-y-4">
                {inquiries.map((inquiry) => (
                    <div
                        key={inquiry.name}
                        className="
                            flex items-center justify-between
                            p-4 rounded-xl border border-gray-100
                            hover:shadow-md shadow-sm transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="
                                w-12 h-12 rounded-full bg-[#9b8acb]/10
                                flex items-center justify-center text-[#9b8acb] font-semibold">
                                {inquiry.name.charAt(0)}
                            </div>

                            <div>
                                <h3 className="font-medium">
                                    {inquiry.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {inquiry.service}
                                </p>
                            </div>

                        </div>

                        <div className="flex items-center gap-8 min-w-45">

                            <span className="w-16 text-right font-medium">
                                €{inquiry.budget.toLocaleString("de-DE")}
                            </span>

                            <span className={`
                                px-3 py-1 rounded-full text-sm 
                                
                                ${
                                    inquiry.status === "New"
                                        ? "bg-green-100 text-green-700"
                                    : inquiry.status === "Contacted"
                                        ? "bg-orange-100 text-orange-700"
                                    : inquiry.status === "Qualified"
                                        ? "bg-cyan-100 text-cyan-700"
                                        : "bg-indigo-100 text-indigo-700"
                                    }
                                `}
                            >
                                {inquiry.status}
                            </span>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}