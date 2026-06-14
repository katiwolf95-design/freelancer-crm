"use client";

import { logoutUser } from "@/app/actions/authActions";

export default function LogoutButton() {
    return (
        <button
            onClick={() => logoutUser()}
            className="
                text-red-500
                hover:text-red-600
                transition
            "
        >
            Logout
        </button>
    );
}