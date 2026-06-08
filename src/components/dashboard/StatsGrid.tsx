import StatCard from "./StatCard";

import {
    Users,
    FolderKanban,
    Euro,
    Mail,
} from "lucide-react";

export default function StatsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
                title="Clients" 
                value="25" 
                subtitle="+3 this month" 
                icon={Users}
            />
            
            <StatCard 
                title="Projects" 
                value="12" 
                subtitle="4 active" 
                icon={FolderKanban}
            />
            <StatCard 
                title="Revenue" 
                value="€3.2k" 
                subtitle="+12% growth" 
                icon={Euro}
            />
            
            <StatCard 
                title="Inquiries" 
                value="5" 
                subtitle="2 new today" 
                icon={Mail}
            />
        </div>
    );
}