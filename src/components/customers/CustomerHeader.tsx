import { Search } from "lucide-react";

export default function CustomerHeader() {
    return (
        <div className="flex items-center hjustify-between mb-6">
            <div className="relative">
                <Search
                    size={18}
                    className="
                        absolute left-3 top-1/2
                        -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search customer..."
                    className="
                        pl-10 pr-4 py-3 rounded-xl
                        border bg-white w-72"
                />
            </div>

            <button className="
                bg-[#9b8acb] text-white px-5 py-3
                rounded-xl"
            >
                Add Customer
            </button>
        </div>
    );
}