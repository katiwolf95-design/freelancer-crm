export default function RevenueOverview() {
    const revenue = [
        { month: "Jan", value: 1200, height: "40%" },
        { month: "Feb", value: 2500, height: "75%" },
        { month: "Mar", value: 3200, height: "97%" },
    ];
    return (
        <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-semibold mb-6">
                Revenue Overview
            </h2>

            <div className="h-52 flex items-end justify-evently gap-4">

                {revenue.map((item) => (
                    <div 
                        key={item.month}
                        className="flex flex-col items-center flex-1 h-full"
                    >

                        <span className="text-xs text-gray-500 mb-1">
                            €{item.value}
                        </span>

                        <div className="flex-1 w-full flex items-end justify-center">
                        
                            <div 
                                className="
                                    w-14 bg-[#9b8acb] rounded-t-3xl
                                    hover:opacity-80 transition
                                "

                                style={{ height: item.height, }}
                            />
                        </div>
                        <span className="text-sm mt-3 text-gray-500">
                            {item.month}
                        </span>

                    </div>
                ))}
            </div>
        </div>
    );
}