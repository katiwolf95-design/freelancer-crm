import { prisma } from "@/lib/prisma";
import ProjectCard from "./ProjectCard";

export default async function ProjectGrid() {

    const projects = await prisma.project.findMany({
        include: {
            customer: true,
        },
    });
    
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    name={project.title}
                    client={project.customer.name}
                    progress={project.progress}
                    dueDate={project.dueDate ?? "No due date"}
                    status={project.status}
                />
            ))}

        </div>
    );
}