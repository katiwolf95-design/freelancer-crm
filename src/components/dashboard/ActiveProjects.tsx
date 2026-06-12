import { prisma } from "@/lib/prisma";

export default async function ActiveProjects() {

    const projects = await prisma.project.findMany({
        where: {
            status: {
                not: "Completed",
            },
        },
        include: {
            customer: true,
        },
        orderBy: {
            progress: "desc",
        },
        take: 3,
    });

    return (
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-6">
                Active Projects
            </h2>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.id}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-medium">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {project.customer.name}
                                </p>
                            </div>

                            <div className="text-right">
                                <span
                                    className={`
                                        text-xs px-3 py-1 rounded-full
                                        ${
                                            project.status === "In Progress"
                                                ? "bg-[#9b8acb]/10 text-[#9b8acb]"
                                                : project.status === "Review"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : project.status === "Completed"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-blue-100 text-blue-700"
                                        }
                                    `}
                                >
                                    {project.status}
                                </span>

                                <p className="text-sm text-gray-400">
                                    Due: {project.dueDate}
                                </p>
                            </div>
                                
                        </div>

                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#9B8ACB] rounded-full transition-all"
                                style={{
                                    width: `${project.progress}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}