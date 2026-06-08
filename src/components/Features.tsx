const features = [
    {
        title: "Client Management",
        text: "Keep all customer information organized."
    },
    {
        title: "Project Tracking",
        text: "Track progress from start to finish."
    },
    {
        title: "Inquiry Workflow",
        text: "Convert inquiries into customenrs."
    },
    {
        title: "Revenue Overview",
        text: "Track payments and income."
    }
];

export default function Features() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <p className="text-[#9B8ACB] uppercase text-center tracking-widest mb-2">
                Features
            </p>

            <h2 className="text-4xl font-bold text-center mb-12">
                Everything you need
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-white p-6 rounded-2xl shadow"
                    >
                        <h3 className="font-bold mb-2">
                            {feature.title}
                        </h3>

                        <p className="text-gray-600">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}