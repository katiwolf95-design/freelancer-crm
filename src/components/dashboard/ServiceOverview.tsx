import ServicesChart from "./ServicesChart";
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

    const chartData = sortedServices.map(
        ([service, count]) => ({
            name: service,
            value: count,
        })
    );

    return (
        <div className="bg-white rounded-2xl shadow p-6">
            
            <h2 className="text-xl font-semibold mb-2">
                Most Requested Services
            </h2>

            <p className="text-sm text-gray-400 mt-1 mb-4">
                Based on incoming inquiries
            </p>

            <ServicesChart data={chartData} />
        </div>
    );
}