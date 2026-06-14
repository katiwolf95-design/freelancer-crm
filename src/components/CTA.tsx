import Link from "next/link";

export default function Workflow() {
    return (
        <section className="py-24 text-center">
            <h2 className="text-5xl font-bold mb-4">
                Ready to simplify your workflow?
            </h2>

            <p className="text-gray-600 mb-8">
                Manage everything from one workspace.
            </p>

            <Link 
                href="/register"
                className="bg-[#9B8ACB] text-white px-8 py-3 rounded-xl"
            >
                Get Started
            </Link>
        </section>
    );
}