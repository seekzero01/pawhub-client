export const LAST_UPDATED = "May 18, 2026";

export type ParagraphBlock = {
    type: "paragraph";
    text: string;
    link?: { href: string; label: string };
};

export type ListBlock = {
    type: "list";
    items: { bold: string; text: string }[];
};

export type ContentBlock = ParagraphBlock | ListBlock;

export type PolicySection = {
    id: number;
    title: string;
    content: ContentBlock[];
};

export const sections: PolicySection[] = [
    {
        id: 1,
        title: "Information We Collect",
        content: [
            {
                type: "paragraph",
                text: "PawHub collects information about you when you use our services, including when you create an account, add pets, log health records, or interact with our AI vet assistant. We collect information in the following ways:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Information you provide directly:",
                        text: " Your name, email address, profile photo, and pet details (species, breed, age, medical history) when you register or use PawHub features.",
                    },
                    {
                        bold: "Information from your use of our services:",
                        text: " We collect data about how you interact with PawHub, including appointment logs, medication schedules, health records, and AI assistant conversations.",
                    },
                    {
                        bold: "Device and usage information:",
                        text: " We may collect device identifiers, browser type, IP address, and diagnostic information to improve app performance and security.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "How We Use Your Information",
        content: [
            {
                type: "paragraph",
                text: "We use the information we collect to operate, improve, and personalize PawHub services. Specifically, we use your data to:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Provide core features:",
                        text: " Manage your pet health records, medication reminders, vet appointment scheduling, and AI-assisted health insights.",
                    },
                    {
                        bold: "Improve our platform:",
                        text: " Analyze usage patterns to develop new features, fix bugs, and enhance the overall PawHub experience.",
                    },
                    {
                        bold: "Send relevant communications:",
                        text: " Appointment reminders, medication alerts, and service updates. You may opt out of non-essential communications at any time.",
                    },
                    {
                        bold: "Train and refine our AI:",
                        text: " Aggregated, anonymized pet health data may be used to improve the accuracy of our AI vet assistant. We will always ask for your consent before using your personal data for this purpose.",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Sharing Your Information",
        content: [
            {
                type: "paragraph",
                text: "PawHub does not sell your personal information to third parties. We may share information in the following limited circumstances:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "With your consent:",
                        text: " When you explicitly authorize PawHub to share your pet's health records with a veterinary clinic or specialist through our B2B integrations.",
                    },
                    {
                        bold: "With service providers:",
                        text: " Trusted third-party vendors who assist us in operating PawHub (e.g., cloud infrastructure, payment processing) are bound by strict data processing agreements.",
                    },
                    {
                        bold: "For legal reasons:",
                        text: " We may disclose information if required by law, court order, or to protect the rights, property, or safety of PawHub, our users, or the public.",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Data Retention",
        content: [
            {
                type: "paragraph",
                text: "We retain your personal information for as long as your PawHub account is active or as needed to provide you with our services. If you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required by law to retain it longer.",
            },
            {
                type: "paragraph",
                text: "Pet health records you have explicitly exported or shared with veterinary partners are subject to those partners' own retention policies.",
            },
        ],
    },
    {
        id: 5,
        title: "Security",
        content: [
            {
                type: "paragraph",
                text: "We take the security of your data seriously, particularly given the sensitive nature of pet health information. Our safeguards include:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "",
                        text: "All data is encrypted in transit using TLS and at rest using AES-256 encryption.",
                    },
                    {
                        bold: "",
                        text: "Health record storage uses private, access-controlled buckets with no public URLs.",
                    },
                    {
                        bold: "",
                        text: "Row-level security policies ensure users can only access their own data.",
                    },
                    {
                        bold: "",
                        text: "We conduct regular security reviews of our infrastructure and access controls.",
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        title: "Your Rights and Controls",
        content: [
            {
                type: "paragraph",
                text: "You have meaningful control over your personal information. You may at any time:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Access and export:",
                        text: " Request a copy of all personal data and pet health records we hold about you.",
                    },
                    {
                        bold: "Correct:",
                        text: " Update inaccurate or incomplete information directly in the app or by contacting us.",
                    },
                    {
                        bold: "Delete:",
                        text: " Request permanent deletion of your account and associated data.",
                    },
                    {
                        bold: "Restrict or object:",
                        text: " Opt out of certain data uses, such as AI training or marketing communications.",
                    },
                ],
            },
            {
                type: "paragraph",
                text: "To exercise any of these rights, please contact us at ",
                link: { href: "mailto:privacy@pawhub.com", label: "privacy@pawhub.com" },
            },
        ],
    },
    {
        id: 7,
        title: "Cookies and Tracking",
        content: [
            {
                type: "paragraph",
                text: "PawHub uses cookies and similar technologies to keep you logged in, remember your preferences, and understand how our platform is used. We use:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Essential cookies:",
                        text: " Required for authentication and core functionality. These cannot be disabled.",
                    },
                    {
                        bold: "Analytics cookies:",
                        text: " Help us understand usage patterns and improve the product. You can opt out via your account settings.",
                    },
                ],
            },
            {
                type: "paragraph",
                text: "You can control cookies through your browser settings. Disabling non-essential cookies will not affect core PawHub functionality.",
            },
        ],
    },
    {
        id: 8,
        title: "Third-Party Services",
        content: [
            {
                type: "paragraph",
                text: "PawHub integrates with third-party services to provide a complete experience, including Google Calendar for appointment syncing and payment processors for subscription management. These services have their own privacy policies and we encourage you to review them.",
            },
            {
                type: "paragraph",
                text: "We are not responsible for the privacy practices of veterinary clinics or other third parties you connect to through PawHub.",
            },
        ],
    },
    {
        id: 9,
        title: "Children's Privacy",
        content: [
            {
                type: "paragraph",
                text: "PawHub is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately at ",
                link: { href: "mailto:privacy@pawhub.com", label: "privacy@pawhub.com" },
            },
        ],
    },
    {
        id: 10,
        title: "Changes to This Policy",
        content: [
            {
                type: "paragraph",
                text: "We may update this Privacy Policy from time to time as PawHub evolves. We will notify you of material changes via email or an in-app notification before they take effect. The 'Last updated' date at the top of this page always reflects the most recent revision.",
            },
            {
                type: "paragraph",
                text: "Continued use of PawHub after changes are posted constitutes your acceptance of the revised policy.",
            },
        ],
    },
];