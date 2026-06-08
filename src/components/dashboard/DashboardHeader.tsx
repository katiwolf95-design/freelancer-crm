import {
    Search, Mail, Bell, User,
} from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function DashboardHeader() {
    return (
        <div className="flex justify-between items-start mb-8">
            <div>
                <h1 className="text-4xl font-bold text-[#26242B]">
                    Good morning, Katharina!
                </h1>

                <p className="text-gray-500 mt-2">
                    Here's an overview of your workspace.
                </p>
            </div>

            <div className="flex items-center gap-3">

                <button className="
                    w-10 h-10 rounded-xl bg-white shadow-sm
                    hover:shadow-md hover:bg-gray-50 transition
                    flex items-center justify-center
                ">
                    <Search size={18} />
                </button>

                <div className="relative">
                    <button className="
                        w-10 h-10 rounded-xl bg-white shadow-sm
                        hover:shadow-md hover:bg-gray-50 transition
                        flex items-center justify-center
                    ">
                        <Mail size={18} />
                    </button>

                    <span className="
                        absolute -top-1 -right-1 w-5 h-5 rounded-full
                        bg-[#9b8acb] text-white text-xs
                        flex items-center justify-center"
                    >
                        2
                    </span>
                </div>

                <div className="relative">
                    <button className="
                        w-10 h-10 rounded-xl bg-white shadow-sm
                        hover:shadow-md hover:bg-gray-50 transition
                        flex items-center justify-center
                    ">
                        <Bell size={18} />
                    </button>  
                     <span className="
                        absolute -top-1 -right-1 w-5 h-5 rounded-full
                        bg-[#9b8acb] text-white text-xs
                        flex items-center justify-center"
                    >
                        3
                    </span> 
                </div>

                <button className="
                    flex items-center gap-2 px-3 py-2 bg-white
                    rounded-xl shadow-sm
                ">
                    <div className="
                        w-8 h-8 rounded-full bg-[#9b8acb]/10
                        flex items-center justify-center
                        text-[#9b8acb] font-seimbold"
                    >
                        K
                    </div>

                    <span className="text-sm font-medium">
                        Katharina
                    </span>
                    <ChevronDown size={14} />
                </button>

                <button className="
                    bg-[#9B8ACB] text-white px-5 py-3 rounded-xl
                    hover:scale-105 transition
                    ">
                        + New Inquiry
                    </button>
            </div>
        </div>
    );
}
