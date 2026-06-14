"use client";

import { useState } from "react";
import {
    LayoutDashboard, Users, FolderKanban, Mail, Settings, ChevronLeft, ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    return (
        <aside className={`
            min-h-screen bg-white shadow p-6 border-r flex flex-col
            transition-all duration-300 ${collapsed ? "w-22" : "w-56"}
            `}
        >
            <div className="flex justify-center mb-10">
                {collapsed ? (
                    <Image
                        src="/logos/solinea-hub-3.svg"
                        alt="Solinea Hub Logo"
                        width={40}
                        height={40}
                        priority
                    />
                ) : (
                    <Image
                        src="/logos/solinea-hub-2.svg"
                        alt="Solinea Hub"
                        width={160}
                        height={50}
                    />
                )}
            </div>

            <nav className={`
                flex flex-col gap-4 flex-1
                ${collapsed ? "gap-8" : "gap-3"}
                `}
            >
                <a 
                    href="/dashboard" 
                    className={`
                        flex items-center 
                        ${collapsed ? "justify-center px-0" : "gap-3 px-4"} 
                        py-3 rounded-xl 
                        
                        ${
                            pathname === "/dashboard"
                                ? "bg-[#9b8acb]/10 text-[#9b8acb]"
                                : "text-gray-600 hover:bg-gray-100"
                        }
                    `}
                >
                    <LayoutDashboard size={18} />
                    {!collapsed && "Dashboard"}
                </a>

                <a 
                    href="/customers" 
                    className={`
                        flex items-center gap-3 
                        ${collapsed ? "justify-center px-0" : "px-4 py-3"} 
                        rounded-xl 
                        
                        ${
                            pathname === "/customers"
                                ? "bg-[#9b8acb]/10 text-[#9b8acb]"
                                : "text-gray-600 hover:bg-gray-100"
                        }
                    `}
                >
                    <Users size={18} />
                    {!collapsed && "Customers"}
                </a>

                <a 
                    href="/projects" 
                    className={`
                        flex items-center gap-3 
                        ${collapsed ? "justify-center px-0" : "px-4 py-3"} 
                        rounded-xl 
                        
                        ${
                            pathname === "/projects"
                                ? "bg-[#9b8acb]/10 text-[#9b8acb]"
                                : "text-gray-600 hover:bg-gray-100"
                        }
                    `}
                >
                    <FolderKanban size={18} />
                    {!collapsed && "Projects"}
                </a>

                <a 
                    href="/inquiries" 
                    className={`
                        flex items-center gap-3 
                        ${collapsed ? "justify-center px-0" : "px-4 py-3"} 
                        rounded-xl 
                        
                        ${
                            pathname === "/inquiries"
                                ? "bg-[#9b8acb]/10 text-[#9b8acb]"
                                : "text-gray-600 hover:bg-gray-100"
                        }
                    `}
                >
                    <Mail size={18} />
                    {!collapsed && "Inquiries"}
                </a>


            </nav>

                {collapsed ? (

                    <div className="flex justify-center items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#9b8acb] font-semibold">
                            K
                        </div>
                    </div>
                ) : (
                    <div className="mt-auto p-4 bg-[#f8f8fa] rounded-2xl">
                    
                        <div className="font-medium">
                            Katharina Wolf
                        </div>

                        <div className="text-sm text-gray-500">
                            Fullstack Developer
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />

                            <span className="text-xs text-gray-500">
                                Online
                            </span>
                        </div>
                    </div>
                )}

            <div className="mt-4 border-t pt-4">
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="mt-4 w-full flex items-center justify-center p-2 rounded-xl hover:bg-gray-100 transition">
                    {collapsed ? (
                        <ChevronRight size={18} />
                    ) : (
                        <ChevronLeft size={18} />
                    )}
            </button>
            </div>
        </aside>
    );
}