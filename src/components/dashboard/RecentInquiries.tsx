const inquiries = [
    {
        name: "Anna Müller",
        service: "Web Design",
        budget: "€1.5k",
        status: "New",
     },
     {
        name: "Max Weber",
        service: "CRM Setup",
        budget: "€2.5k",
        status: "Pending",
    },
];

export default function RecentInquiries() {
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

                        <div className="flex items-canter gap-4">

                            <div className="
                                w-12 h-12 roundend-full bg-[#9b8acb]/10
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
                                {inquiry.budget}
                            </span>

                            <span className={`
                                px-3 py-1 rounded-full text-sm 
                                
                                ${
                                    inquiry.status === "New"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
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