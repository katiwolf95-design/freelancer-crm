import Sidebar from "@/components/dashboard/Sidebar";
import { prisma } from "@/lib/prisma";
import CustomerForm from "@/components/customers/CustomerForm";
import { updateCustomer } from "@/app/actions/customerActions";

export default async function EditCustomerPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    
    const { id } = await params;

    const customer = await prisma.customer.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!customer) {
        return <div>Customer not found.</div>;
    }

    return (
        <div className="flex min-h-screen bg-[#f8f8fa]">

            <Sidebar />

            <main className="flex-1 p-8">

                <h1 className="text-3xl font-bold mb-8">
                    Edit Customer
                </h1>

                <div className="max-w-xl">
                    <CustomerForm
                        customer={customer}
                        action={updateCustomer}
                    />
                </div>

            </main>

        </div>
    );
}