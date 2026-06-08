import { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: string;
    subtitle: string;
    icon: LucideIcon;
   
};

export default function StatCard({
    title, value, subtitle, icon: Icon,
}: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <div className="flex justify-between items-center mb-4">
                
                <p className="text-gray-500">
                    {title}
                </p>

                <div className="bg-[#9b8acb]/10 p-2 rounded-xl">
                    <Icon
                        size={20}
                        className="text-[#9b8acb]" 
                    />
                </div>
            </div>

            <h2 className="text-3xl font-bold mt-2">
                {value}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
                {subtitle}
            </p>
            
        </div>
    );
}