type InquiryProps = {
    customer: string;
    service: string;
    budget: number;
    status: string;
};

export default function InquiryCard({
    customer,
    service,
    budget,
    status,
}: InquiryProps) {

    const statusStyles = {
        New: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Qualified: "bg-blue-100 text-blue-700",
    };

    return (
        <div className="
            bg-white rounded-2xl shadow p-6
            hover:shadow-lg hover:-translate-y-1
            trnasition-all duration-300 cursor-pointer
        ">
            <div className="flex justify-between items-start mb-6">
                
                <div>
                    <h3 className="font-semibold text-xl">
                        {customer}
                    </h3>

                    <p className="text-gray-500">
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
                    Budget
                </p>

                <p className="text-2xl font-bold">
                    €{budget.toLocaleString()}
                </p>
            </div>
        </div>
    );
}