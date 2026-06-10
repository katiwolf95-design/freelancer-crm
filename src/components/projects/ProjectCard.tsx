type ProjectProps = {
    name: string;
    client: string;
    progress: number;
    dueDate: string;
    status: string;
};

export default function ProjectCard({
    name,
    client, 
    progress,
    dueDate,
    status,
}: ProjectProps) {

    const statusStyles = {
        "In Progress": "bg-[#9b8acb]/10 text-[#9b8acb]",
        Review: "bg-yellow-100 text-yellow-700",
        Planning: "bg-blue-100 text-blue-600",
    };

    return (
        <div className="
            bg-white rounded-2xl shadow p-6
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 cursor-pointer
        ">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="font-semibold text-gray-700 text-lg">
                       {name}
                    </h3>

                    <p className="text-gray-700 text-sm">
                        {client}
                    </p>
                </div>

                <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${statusStyles[status as keyof typeof statusStyles]}
                `}>
                    {status}
                </span>
            </div>

            <div className="mb-2 flex text-gray-700 justify-between text-sm">
                <span>Progress</span>
                <span>{progress}%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded-full">
                <div
                    className="h-2 rounded-full bg-[#9b8acb]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="text-sm text-gray-700 mt-4">
                Due: {dueDate}
            </p>

        </div>
    );
}