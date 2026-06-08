export default function ActiveProjects() {
    const projects = [
        {
            name: "Solinea Hub Landingpage",
            client: "Solinea",
            status: "In Progress", 
            progress: 75,
            dueDate: "2026-07-15",
        },
        {
            name: "Artist Portfolio",
            client: "TechStore",
            status: "Review", 
            progress: 90,
            dueDate: "2026-08-01",
        },
        {
            name: "Client CRM Setup",
            client: "Fashionista",
            status: "Plannig", 
            progress: 40,
            dueDate: "2026-09-10",
        },
    ];

    return (
        <div className="lg:col-span.2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-6">
                Active Projects
            </h2>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.name}>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-medium">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {project.client}
                                </p>
                            </div>

                            <div className="text-right">
                                <span
                                    className={`
                                        text-xs px-3 py-1 rounded-full
                                        ${
                                            project.status === "In Progress"
                                                ? "bg-[#9b8acb]/10 text-[##9b8acb]"
                                                : project.status === "Review"
                                                ? "bg-yellow-100 text-yellow-700"
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