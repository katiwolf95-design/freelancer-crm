import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">
            

            <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-6xl font-bold leading-tight text-[#26242B]">
                        Manage clients, projects and inquiries in one place.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Solinea Hub helps freelancert and creative studios 
                        organize their business with clarity.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="
                            bg-[#9B8ACB] text-white px-6 py-3 rounded-xl 
                            hover:scale-105 transition
                        ">
                            Get Started
                        </button>

                        <button className="border px-6 py-3 rounded-xl hover:bg-gray-50 transition">
                            View Demo
                        </button>
                    </div>
                </div>

                <div className="relative rotate-1 hover:rotate-0 transition-all duration-500">

                    <div
                        className="
                        absolute inset-0 bg-[#9B8ACB]/20
                        blur-[120px] rounded-full scale-75
                        "
                    />
                    <Image
                        src="/images/solinea-hub-mockup.png"
                        alt="Dashboard Preview"
                        width={900}
                        height={600}
                        className="rounded-3xl shadow-2xl border border-white"
                    />
                </div>
            </div>
        </section>
    );
}