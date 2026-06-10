"use client";

import { useState } from "react";
import ProjectGrid from "./ProjectsGrid";

export default function ProjectsView({
    projects,
}: {
    projects: any[];
}) {
    const [search, setSearch] = useState("");

    const filteredProjects = projects.filter((project) =>
        project.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <>
            <div className="relative mb-6">

                <input
                    type="text"
                    placeholder="Search project..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
                        w-72 pl-4 pr-12 py-2
                        rounded-xl border bg-white
                    "
                />

            </div>

            <ProjectGrid projects={filteredProjects} />
        </>
    )
}