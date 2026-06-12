import StatCard from "./StatCard";
import { prisma } from "@/lib/prisma";

import {
    Users,
    FolderKanban,
    Euro,
    Mail,
} from "lucide-react";

export default async function StatsGrid() {

    const clientsCount = await prisma.customer.count();
    const projectsCount = await prisma.project.count();
    const projects = await prisma.project.findMany();
    const revenue = await projects.reduce(
        (sum, project) =>
            sum + Number(project.price || 0),
        0
    );
    const inquiriesCount = await prisma.inquiry.count();
    const activeProjects = await prisma.project.count({
        where: {
            NOT: {
                status: "Completed",
            }
        },
    });


    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
                title="Clients" 
                value={String(clientsCount)} 
                subtitle="+3 this month" 
                icon={Users}
            />
            
            <StatCard 
                title="Projects" 
                value={String(projectsCount)} 
                subtitle={`${activeProjects} active`} 
                icon={FolderKanban}
            />
            <StatCard 
                title="Revenue" 
                value={`€${revenue.toLocaleString("de-DE")}`} 
                subtitle="+12% growth" 
                icon={Euro}
            />
            
            <StatCard 
                title="Inquiries" 
                value={String(inquiriesCount)} 
                subtitle="Incoming leads" 
                icon={Mail}
            />
        </div>
    );
}