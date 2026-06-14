
import CustomerRow from "./CustomerRow";

export default function CustomerTable({
    customers,
}: {
    customers: any[];
}) {
    return (
        <div className="bg-white rouded-2xl shadow p-6">

            <table className="w-full">
                <thead>
                    <tr className="text-left border-b border-gray-200">
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Company</th>
                        
                        <th className="pb-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((customer) => (
                        <CustomerRow
                            key={customer.id}
                            customer={customer}
                        />
                    ))}
                </tbody>
            </table>
        </div>

    );
}