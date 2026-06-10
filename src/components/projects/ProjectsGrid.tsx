"use client";

import { useState } from "react";
import EditProjectModal from "./EditProjectModal";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
    projects,
}: {
    projects: any[];
}) {

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    return (

        

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            <EditProjectModal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                project={selectedProject}
            />

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.title}
                    client={project.customer.name}
                    progress={project.progress}
                    dueDate={project.dueDate ?? "No due date"}
                    status={project.status}
                    price={project.price}
                    onEdit={() => {
                        setSelectedProject(project);
                        setShowEditModal(true);
                    }}
                />
            ))}

        </div>
    );
}