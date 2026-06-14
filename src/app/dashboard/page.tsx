import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentInquiries from "@/components/dashboard/RecentInquiries";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import ActiveProjects from "@/components/dashboard/ActiveProjects";
import UpcomingTasks from "@/components/dashboard/UpcomingTasks";
import ServiceOverview from "@/components/dashboard/ServiceOverview";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const cookieStore = await cookies();

    const session = cookieStore.get("session");

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen bg-[#F8F8FA]">
            <Sidebar />

            <main className="flex-1 p-8">

                <DashboardHeader />

                <StatsGrid />

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <RecentInquiries />
                    <UpcomingTasks />
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <ActiveProjects />
                    <RevenueOverview />
                    <ServiceOverview />
                </div>

            </main>
        </div>
    );
}