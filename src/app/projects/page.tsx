import Sidebar from "@/components/dashboard/Sidebar";
import ProjectGrid from "@/components/projects/ProjectsGrid";
import { Search } from "lucide-react";
import AddProjectButton from "@/components/projects/AddProjectButton";
import { prisma } from "@/lib/prisma";

const customers = await prisma.customer.findMany();

export default function ProjectsPage() {
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

                        <div className="relative">

                            <input 
                                type="text"
                                placeholder="Search project..."
                                className="w-72 pl-4 pr-12 py-2 rounded-xl border bg-white"
                            />

                            <button className="
                                absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100
                            ">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <ProjectGrid />
                
            </main>

        </div>
    );
}