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

export type CalloutBlock = {
    type: "callout";
    title: string;
    text: string;
};

export type ContentBlock = ParagraphBlock | ListBlock | CalloutBlock;

export type TermsSection = {
    id: number;
    title: string;
    content: ContentBlock[];
};

export const sections: TermsSection[] = [
    {
        id: 1,
        title: "User Agreement",
        content: [
            {
                type: "paragraph",
                text: "By accessing or using PawHub, you agree to be bound by these Terms of Service. If you disagree with any part of these Terms, you may not access the service. These Terms apply to all visitors, registered users, and others who access or use PawHub.",
            },
            {
                type: "paragraph",
                text: "PawHub reserves the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of material changes via email or an in-app notification. Your continued use of the service after changes take effect constitutes acceptance of the revised Terms.",
            },
        ],
    },
    {
        id: 2,
        title: "Account Responsibility",
        content: [
            {
                type: "paragraph",
                text: "When you create a PawHub account, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or outdated information may result in the immediate suspension or termination of your account.",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "",
                        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
                    },
                    {
                        bold: "",
                        text: "You agree to accept responsibility for any and all activities or actions that occur under your account, whether or not you authorized them.",
                    },
                    {
                        bold: "",
                        text: "You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account at support@pawhub.com.",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Acceptable Use",
        content: [
            {
                type: "paragraph",
                text: "You agree to use PawHub only for lawful purposes and in a manner that does not infringe upon the rights of others. You must not:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "",
                        text: "Use PawHub to transmit any unsolicited or unauthorized advertising or promotional material.",
                    },
                    {
                        bold: "",
                        text: "Attempt to gain unauthorized access to any part of the service, other user accounts, or our infrastructure.",
                    },
                    {
                        bold: "",
                        text: "Use the AI vet assistant as a substitute for professional veterinary diagnosis or treatment. PawHub's AI features are informational only.",
                    },
                    {
                        bold: "",
                        text: "Upload content that is false, misleading, harmful, or violates any applicable law or regulation.",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Subscription and Payments",
        content: [
            {
                type: "paragraph",
                text: "PawHub offers a free tier and paid subscription plans (Paw+ and Paw+ Family). Paid plans are billed on a monthly or annual basis depending on your selection at checkout.",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Billing:",
                        text: " Charges are processed through our payment provider (Stripe). By subscribing, you authorize PawHub to charge your payment method on a recurring basis.",
                    },
                    {
                        bold: "Cancellation:",
                        text: " You may cancel your subscription at any time from your account settings. Cancellations take effect at the end of the current billing period; no partial refunds are issued.",
                    },
                    {
                        bold: "Price changes:",
                        text: " We will give you at least 30 days' notice before any pricing changes take effect.",
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        title: "Intellectual Property",
        content: [
            {
                type: "paragraph",
                text: "The PawHub service and its original content — including the platform design, AI models, features, and functionality — are and will remain the exclusive property of PawHub and its licensors. The service is protected by copyright, trademark, and other applicable laws.",
            },
            {
                type: "paragraph",
                text: "Our trademarks, logos, and trade dress may not be used in connection with any product or service without the prior written consent of PawHub.",
            },
            {
                type: "callout",
                title: "Your Content",
                text: "You retain full ownership of all pet health records, photos, and data you upload to PawHub. By using our service, you grant PawHub a limited license to store, process, and display your content solely for the purpose of providing the service to you.",
            },
        ],
    },
    {
        id: 6,
        title: "AI Assistant Disclaimer",
        content: [
            {
                type: "paragraph",
                text: "PawHub's AI vet assistant is designed to provide general pet health information and help you prepare for veterinary appointments. It is not a licensed veterinarian and does not provide professional veterinary advice, diagnosis, or treatment.",
            },
            {
                type: "callout",
                title: "Important Notice",
                text: "Always consult a qualified veterinarian for any health concerns about your pet. In an emergency, contact an emergency veterinary clinic immediately. PawHub is not liable for decisions made based solely on AI assistant output.",
            },
        ],
    },
    {
        id: 7,
        title: "Termination",
        content: [
            {
                type: "paragraph",
                text: "We may terminate or suspend your account and access to the service immediately, without prior notice or liability, at our sole discretion, for any reason — including but not limited to a breach of these Terms.",
            },
            {
                type: "callout",
                title: "Effect of Termination",
                text: "If you wish to terminate your account, you may do so from your account settings or by contacting support. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
            },
        ],
    },
    {
        id: 8,
        title: "Limitation of Liability",
        content: [
            {
                type: "paragraph",
                text: "To the maximum extent permitted by applicable law, PawHub and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of data, revenue, or goodwill — arising out of or in connection with your use of the service.",
            },
            {
                type: "paragraph",
                text: "PawHub's total liability to you for any claim arising out of or relating to these Terms or the service shall not exceed the amounts you have paid to PawHub in the twelve months prior to the claim.",
            },
        ],
    },
    {
        id: 9,
        title: "Disclaimer of Warranties",
        content: [
            {
                type: "paragraph",
                text: "The service is provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },
            {
                type: "paragraph",
                text: "PawHub does not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.",
            },
        ],
    },
    {
        id: 10,
        title: "Governing Law",
        content: [
            {
                type: "paragraph",
                text: "These Terms shall be governed and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising under these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction.",
            },
            {
                type: "paragraph",
                text: "If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.",
            },
        ],
    },
    {
        id: 11,
        title: "Contact Us",
        content: [
            {
                type: "paragraph",
                text: "If you have any questions about these Terms of Service, please contact us at ",
                link: { href: "mailto:legal@pawhub.com", label: "legal@pawhub.com" },
            },
        ],
    },
];