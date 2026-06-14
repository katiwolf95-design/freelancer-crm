import Sidebar from "@/components/dashboard/Sidebar";
import {
    Mail,
    Phone,
    FileText,
    Pencil,
    Trash2
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import EditCustomerButton from "@/components/customers/EditCustomerButton";
import DeleteCustomerButton from "@/components/customers/DeleteCustomerButton";

export default async function CustomerDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    
    const { id } = await params;

    const customer = await prisma.customer.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            projects: true,
        },
    });

    if (!customer) {
        return (
            <div className="p-8">
                Customer not found
            </div>
        );
    }

    const revenue = customer.projects.reduce(
        (sum, project) => sum + Number(project.price),
        0
    );

    const openProjects = customer.projects.filter(
        (project) => project.status !== "Completed"
    ).length;

    const progressColors = {
        "In Progress": "bg-[#9b8acb]",
        Planning: "bg-blue-500",
        Review: "bg-yellow-500",
        Completed: "bg-green-500",
    };

    const badgeColors = {
        "In Progress": "bg-[#9b8acb]/10 text-[#9b8acb]",
        Planning: "bg-blue-100 text-blue-600",
        Review: "bg-yellow-100 text-yellow-700",
        Completed: "bg-green-100 text-green-700",
    };

    const customerStatusColors = {
        Lead: "bg-purple-100 text-purple-700",
        Prospect: "bg-yellow-100 text-yellow-700",
        Active: "bg-green-100 text-green-700",
        Inactive: "bg-gray-100 text-gray-600",
    };

    return (
        <div className="flex min-h-screen bg-[#f8f8fa]">

            <Sidebar />

            <main className="flex-1 p-8">

                <Link 
                    href="/customers"
                    className="
                        inline-flex items-center gap-2
                        text-gray-500 hover:text-[#9b8acb]
                        transition mb-8"
                >
                    <ChevronLeft size={18} />
                    <span>All Customers</span>
                </Link>

                <div className="flex justify-between items-start mb-8">

                    <div className="flex items-center gap-6">

                        <div
                            className="
                                w-24 h-24
                                rounded-full
                                bg-[#9b8acb]/10
                                flex items-center justify-center
                                text-[#9b8acb]
                                text-4xl
                                font-bold
                            "
                        >
                            {customer.name.charAt(0)}
                        </div>

                        <div>

                            <h1 className="text-3xl font-bold">
                                {customer.name}
                            </h1>

                            <p className="text-sm text-gray-500 mt-1">
                                {customer.company}
                            </p>

                            <span
                                className={`
                                    inline-block
                                    mt-3
                                    px-3 py-1
                                    rounded-full
                                    ${
                                        customerStatusColors[
                                            customer.status as keyof typeof customerStatusColors
                                        ]
                                    }
                                    text-sm
                                `}
                            >
                                {customer.status}
                            </span>

                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <EditCustomerButton
                            customer={customer}
                        />

                        <DeleteCustomerButton
                            customerId={customer.id}
                        />

                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    
                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-sm text-gray-500">
                            Total Projects
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {customer.projects.length}
                        </h3>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-sm text-gray-500">
                            Total Revenue
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            €{revenue.toLocaleString("de-DE")}
                        </h3>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-6">
                        <p className="text-sm text-gray-500">
                            Open Projects
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {openProjects}
                        </h3>
                    </div>

                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="font-semibold text-lg mb-4">
                            Contact Information
                        </h2>

                        <p className="text-sm text-gray-500 mb-1">
                            Email
                        </p>

                        <p className="mb-4">
                            {customer.email}
                        </p>

                        <p className="text-sm text-gray-500 mb-1">
                            Company
                        </p>

                        <p>
                            {customer.company}
                        </p>

                    </div>

                    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
                        <h2 className="font-semibold text-lg mb-4">
                            Active Projects
                        </h2>

                        <div className="mb-6">

                            {customer.projects.map((project) => (
                                <div
                                    key={project.title}
                                    className="mb-6"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-medium">
                                            {project.title}
                                        </p>

                                        <span
                                            className={`
                                                px-3 py-1 rounded-full text-sm
                                                ${badgeColors[project.status as keyof typeof badgeColors]}
                                            `}
                                        >
                                            {project.status}
                                        </span>
                                    </div>            
                             

                                    <div className="h-2 bg-gray-200 rounded-full">
                                        <div
                                            className={`
                                                h-2 rounded-full
                                                ${progressColors[project.status as keyof typeof progressColors]}
                                            `}
                                            style={{
                                                width: `${project.progress}%`,
                                            }}
                                        />
                                    </div>

                                </div>
                                
                            ))}

                        </div>

                    </div>

                    

                </div>

                <div className="bg-white rounded-2xl shadow p-6 mt-6">

                    <h2 className="font-semibold text-lg mb-4">
                        Notes
                    </h2>

                    <ul className="space-y-3 text-gray-700">
                        <li>
                            • Interested in CRM expansion
                        </li>

                        <li>
                            • Prefers communication via email
                        </li>

                        <li>
                            • Requested maintenance offer
                        </li>
                    </ul>

                </div>

                {/* <div className="bg-white rounded-2xl shadow p-6 mt-6">

                    <h2 className="font-semibold text-lg mb-6">
                        Customer Activity
                    </h2>

                    {customer.activities.map((activity) => (
                        <div
                            key={activity.date + activity.title}
                            className="flex gap-4 mb-6"
                        >

                            <div className="
                                w-10 h-10 rounded-full
                                bg-[#9b8acb]/10
                                flex items-center justify-center
                            ">
                                {activity.type === "mail" && (
                                    <Mail
                                        size={18}
                                        className="text-[#9b8acb]"
                                    />
                                )}

                                {activity.type === "phone" && (
                                    <Phone
                                        size={18}
                                        className="text-[#9b8acb]"
                                    />
                                )}

                                {activity.type === "file" && (
                                    <FileText
                                        size={18}
                                        className="text-[#9b8acb]"
                                    />
                                )}
                            </div>

                            <div>

                                <p className="font-medium">
                                    {activity.title}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {activity.date}
                                </p>

                            </div>

                        </div>
                    ))}

                </div> */}
            </main>
        </div>
    );
}