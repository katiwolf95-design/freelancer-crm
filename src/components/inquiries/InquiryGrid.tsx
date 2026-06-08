import { inquiries } from "@/data/inquiries";
import InquiryCard from "./InquiryCard";

export default function InquiryGrid() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {inquiries.map((inquiry) => (
                <InquiryCard
                    key={inquiry.id}
                    customer={inquiry.customer}
                    service={inquiry.service}
                    budget={inquiry.budget}
                    status={inquiry.status}
                />
            ))}

        </div>
    );
}