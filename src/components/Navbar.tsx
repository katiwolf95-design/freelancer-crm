import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="
            sticky top-0 z-50 max-w-6xl mx-auto rounded-b-xl 
            flex items-center justify-between
            bg-white/90 shadow-md px-8 py-4
        ">
                <div className="flex items-center gap-3">
                    <Image 
                        src="/logos/solinea-hub.svg"
                        alt="Solinea Hub Logo"
                        width={220}
                        height={60}
                    />
                </div>

                <ul className="hidden md:flex gap-12 text-[#3A3742]">
                    <li>Features</li>
                    <li>Workflow</li>
                    <li>Pricing</li>
                    <li>Login</li>
                </ul>

                <button className="bg-[#9b8acb] text-white px-5 py-2 rounded-xl hover:scale-105 transition">
                    Get Started
                </button>
        </nav>
    );
}