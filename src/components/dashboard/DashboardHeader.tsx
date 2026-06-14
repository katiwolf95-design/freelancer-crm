"use client";

import {
    Search, Mail, Bell, User, LogOut, Settings, ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { logoutUser } from "@/app/actions/authActions";

export default function DashboardHeader() {

    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(
            event: MouseEvent
        ) {
            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target as Node
                )
            ) {
                setShowMenu(false);
            }
        }

        document.addEventListener(
            "click",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "click",
                handleClickOutside
            );
        };
    }, []);

    return (
        <div className="flex justify-between items-start mb-8">
            <div>
                <h1 className="text-4xl font-bold text-[#26242B]">
                    Good morning, {user?.firstName}!
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

                <div 
                    
                    className="relative"
                >
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

                <div 
                    ref={menuRef}
                    className="relative">

                    <button 
                        onClick={() =>
                            setShowMenu(!showMenu)
                        }
                        className="
                            flex items-center gap-2 px-3 py-2
                            bg-white rounded-xl shadow-sm
                        "
                    >
                        <div className="
                            w-8 h-8 rounded-full bg-[#9b8acb]/10
                            flex items-center justify-center
                            text-[#9b8acb] font-semibold
                        ">
                            K
                        </div>

                        <span className="text-sm font-medium">
                            Katharina
                        </span>

                        <ChevronDown size={14} />
                    </button>

                    {showMenu && (
                        <div className="
                            absolute right-0 mt-2 w-48 bg-white
                            rounded-xl shadow-lg border  border-gray-200 z-50
                        ">
                            <button className="
                                w-full flex items-center gap-2
                                px-4 py-3 text-left hover:bg-gray-50
                            ">
                                <User size={16} />
                                Profile
                            </button>

                            <button className="
                                w-full flex items-center gap-2
                                px-4 py-3 text-left hover:bg-gray-50
                            ">
                                <Settings size={16} />
                                Settings
                            </button>

                            <button 
                                onClick={() => logoutUser()}
                                className="
                                    w-full flex items-center gap-2
                                    px-4 py-3 text-left hover:bg-gray-50
                                "
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                </div>

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
