import { prisma } from "@/lib/prisma";

export default async function ServicesOverview() {
    const inquiries = await prisma.inquiry.findMany();

    const services = inquiries.reduce(
        (acc: Record<string, number>, inquiry) => {
            acc[inquiry.service] =
                (acc[inquiry.service] || 0) + 1;

            return acc;
        },
        {}
    );

    const sortedServices = Object.entries(services)
        .sort((a, b) => b[1] - a[1]);

    return (
        <div className="bg-white roundd-2xl shadow p-6">
            
            <h2 className="text-xl font-semibold mb-6">
                Most Requested Services
            </h2>

            <div className="space-y-4">

                {sortedServices.map(([service, count]) => (
                    <div
                        key={service}
                        className="
                            flex justify-between
                            items-center border-b pb-3"
                    >
                        <span className="text-gray-700">
                            {service}
                        </span>

                        <span className="
                            bg-[#9b8acb]/10 text-[#9b8acb] px-3 py-1
                            rounded-full text-sm font-medium"
                        >
                            {count}
                        </span>
                    </div>

                ))}
            </div>
        </div>
    );
}