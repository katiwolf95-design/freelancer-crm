import Sidebar from "@/components/dashboard/Sidebar";
import CustomerTable from "@/components/customers/CustomerTable";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import AddCustomerButton from "@/components/customers/AddCustomerButton";


export default async function CustomersPage() {

    const customers = await prisma.customer.findMany();

    return (
        <div className="flex min-h-screen bg-[#f8f8fa]">
            <Sidebar />

            <main className="flex-1 p-8">

                <div className="flex items-center justify-between mb-8">

                    <div>
                        <h1 className="text-4xl font-bold">
                            Customers
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage all your customers in one place.
                        </p>
                    </div>

                    <div className="flex items-center gap-5 mb-8">   

                        <AddCustomerButton />
                        
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search customer..."
                                className="
                                    w-64 pl-4 pr-12 py-2 rounded-xl
                                    border bg-white"
                            />

                            <button
                                className="
                                    absolute right-2
                                    top-1/2 -translate-y-1/2
                                    p-2 rounded-lg hover:bg-gray-100
                                "
                            >
                                <Search size={18} /> 
                            </button>
                        </div> 
                        
                    </div>

                </div>

                <CustomerTable customers={customers} />

            </main>
        </div>
    );
}