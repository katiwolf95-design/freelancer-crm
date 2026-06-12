"use client";

import InquiryCard from "./InquiryCard";
import EditInquiryModal from "./EditInquiryModal";
import { useState } from "react";

export default function InquiryGrid({
    inquiries,
}: {
    inquiries: any[];
}) {

    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState(null);

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            <EditInquiryModal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                inquiry={selectedInquiry}
            />

            {inquiries.map((inquiry) => (
                <InquiryCard
                    key={inquiry.id}
                    id={inquiry.id}
                    name={inquiry.name}
                    email={inquiry.email}
                    service={inquiry.service}
                    message={inquiry.message}
                    budget={inquiry.budget}
                    status={inquiry.status}
                    onEdit={() => {
                        setSelectedInquiry(inquiry);
                        setShowEditModal(true);
                    }}
                />
            ))}

        </div>
    );
}