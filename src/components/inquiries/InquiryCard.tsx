import {
    deleteInquiry,
    convertInquiry,
} from "@/app/actions/inquiryActions";

type InquiryProps = {
    id: number;
    name: string;
    email: string;
    service: string;
    message: string;
    budget: number;
    status: string;
    onEdit?: () => void;
};

export default function InquiryCard({
    id,
    name,
    email,
    message,
    service,
    budget,
    status,
    onEdit,
}: InquiryProps) {

    const statusStyles = {
        New: "bg-green-100 text-green-700",
        Contacted: "bg-orange-100 text-orange-700",
        Qualified: "bg-cyan-100 text-cyan-700",
        Converted: "bg-indigo-100 text-indigo-700",
    };

    return (
        <div className="
            bg-white rounded-2xl shadow p-6
            hover:shadow-lg hover:-translate-y-1
            transition-all duration-300 cursor-pointer
        ">
            <div className="flex justify-between items-start mb-6">
                
                <div>
                    <h3 className="font-semibold text-xl">
                        {name}
                    </h3>

                    <p className="text-gray-500">
                        {email}
                    </p>

                    <p className="text-sm text-[#9b8acb] mt-1">
                        {service}
                    </p>
                </div>

                <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${statusStyles[status as keyof typeof statusStyles]}
                    `}
                >
                    {status}
                </span>
            </div>

            <div className="mt-4">
                <p className="text-sm text-gray-500">
                    Message
                </p>

                <p className="text-sm text-gray-700 line-clamp-3">
                    {message}
                </p>
            </div>

            <div className="mt-4">
                <p className="text-sm text-gray-500">
                    Budget
                </p>

                <p className="text-2xl font-bold">
                    €{budget.toLocaleString()}
                </p>
            </div>

            <div className="mt-6 flex gap-4">
                <button
                    type="button"
                    onClick={() => onEdit?.()}
                    className="text-blue-600 text-sm hover:underline"
                >
                    Edit
                </button>

                <form action={deleteInquiry.bind(null, id)}>
                    <button
                        type="submit"
                        className="
                            text-red-600
                            text-sm
                            hover:underline
                        "
                    >
                        Delete
                    </button>
                </form>

                <form action={convertInquiry.bind(null, id)}>
                    <button
                        type="submit"
                        className="
                            text-emerald-600
                            text-sm
                            hover:underline
                        "
                    >
                        Convert
                    </button>
                </form>
            </div>
        </div>
    );
}