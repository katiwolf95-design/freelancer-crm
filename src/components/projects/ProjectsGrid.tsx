import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    client={project.client}
                    progress={project.progress}
                    dueDate={project.dueDate}
                    status={project.status}
                />
            ))}

        </div>
    );
}