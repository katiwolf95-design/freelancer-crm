

import Sidebar from "@/components/dashboard/Sidebar";
import ProjectGrid from "@/components/projects/ProjectsGrid";
import { Search } from "lucide-react";
import AddProjectButton from "@/components/projects/AddProjectButton";
import { prisma } from "@/lib/prisma";

import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ search?: string }>;
}) {

    const params = await searchParams;
    const search = params.search ?? "";

    const customers = await prisma.customer.findMany();

    const projects = await prisma.project.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: search,
                        mode: "insensitive",
                    },
                },
                {
                    customer: {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                },
            ],
        },
        include: {
            customer: true,
        },
    });

    const cookieStore = await cookies();

    const session =
        cookieStore.get("session");

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen bg-[#f8f8fa]">
            
            <Sidebar />

            <main className="flex-1 p-8">

                <div className="flex justify-between items-start mb-14">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-700">
                            Projects
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage all active projects.
                        </p>
                    </div>
                

                    <div className="flex items-center gap-4">

                        <AddProjectButton customers={customers} />

                        <form className="relative">

                            <input 
                                type="text"
                                name="search"
                                defaultValue={search}
                                placeholder="Search project..."
                                className="w-72 pl-4 pr-12 py-2 rounded-xl border bg-white"
                            />

                            <button 
                                type="submit"
                                className="
                                    absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100
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
                            href="/projects"
                            className="
                                text-sm
                                text-[#9b8acb]
                                hover:underline
                            "
                        >
                            ← Show all projects
                        </Link>
                    </div>
                )}

                <ProjectGrid projects={projects} />
                
            </main>

        </div>
    );
}