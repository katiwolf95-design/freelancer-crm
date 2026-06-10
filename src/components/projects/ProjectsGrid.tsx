"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
    projects,
}: {
    projects: any[];
}) {

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
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