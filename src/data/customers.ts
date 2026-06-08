
export const customers = [
    {
        id: 1,
        name: "Anna Müller",
        company: "TechStore",
        email: "anna@techstore.de",
        status: "Active",

        projects: [
            {
                name: "Website Redesign",
                progress: 80,
                status: "In Progress",
                
            },
            {
                name: "CRM Setup",
                progress: 40,
                status: "Planning",
                
            },
        ],

        activities: [
            {
                type: "mail",
                title: "Sent proposal",
                date: "12.05.2026",
            },
            {
                type: "phone",
                title: "Discovery call completed",
                date: "10.05.2026",
            },
            {
                type: "file",
                title: "Inquiry received",
                date: "08.05.2026",
            },
        ],
    },
    {
        id: 2,
        name: "Max Weber",
        company: "Fashionista",
        email: "max@fashionista.de",
        status: "Pending",
        

        projects: [
            {
                name: "Online Shop",
                progress: 60,
                status: "Review",
                
            },
        ],

        activities: [
            {
                type: "mail",
                title: "Sent invoice",
                date: "15.05.2026",
            },
            {
                type: "phone",
                title: "Client call",
                date: "17.05.2026",
            },
        ],
    },
    {
        id: 3,
        name: "Lisa Schmidt",
        company: "Solinea Home",
        email: "lisa@solinea-home.de",
        status: "Active",

        projects: [
            {
                name: "E-Commerce Store",
                progress: 40,
                status: "Plannig",
                
            },
        ],
        activities: [
            {
                type: "mail",
                title: "Contract signed",
                date: "04.06.2026",
            },
            {
                type: "mail",
                title: "Project kickoff",
                date: "15.07.2026",
            },
        ],  
    },
];