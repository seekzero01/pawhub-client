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

export type CookieSection = {
    id: number;
    title: string;
    content: ContentBlock[];
};

export const sections: CookieSection[] = [
    {
        id: 1,
        title: "What Are Cookies",
        content: [
            {
                type: "paragraph",
                text: "Cookies are small text files that are placed on your device when you visit a website or use a web application. They are widely used to make services work efficiently, remember your preferences, and provide information to site owners.",
            },
            {
                type: "paragraph",
                text: "PawHub uses cookies and similar tracking technologies — including local storage and session storage — to operate the platform, keep you signed in, and understand how you interact with our features.",
            },
        ],
    },
    {
        id: 2,
        title: "How We Use Cookies",
        content: [
            {
                type: "paragraph",
                text: "We use cookies for the following purposes:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Authentication:",
                        text: " To keep you securely signed in to your PawHub account across sessions and devices.",
                    },
                    {
                        bold: "Preferences:",
                        text: " To remember your settings, such as language preference and notification configurations.",
                    },
                    {
                        bold: "Security:",
                        text: " To detect and prevent fraudulent activity, unauthorized access attempts, and other potential security threats.",
                    },
                    {
                        bold: "Analytics:",
                        text: " To understand how users navigate PawHub so we can improve the product, fix bugs, and prioritize features.",
                    },
                    {
                        bold: "Performance:",
                        text: " To monitor service reliability and measure page load times to ensure a smooth experience.",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Types of Cookies We Use",
        content: [
            {
                type: "list",
                items: [
                    {
                        bold: "Strictly necessary cookies:",
                        text: " These are essential for PawHub to function and cannot be switched off. They are usually set in response to actions you take, such as logging in or saving pet health records. Without these, the service cannot be provided.",
                    },
                    {
                        bold: "Functional cookies:",
                        text: " These enable enhanced functionality and personalization, such as remembering your active pet profile or dashboard layout. Disabling them may affect your experience.",
                    },
                    {
                        bold: "Analytics cookies:",
                        text: " These help us count visits and understand traffic patterns so we can measure and improve the performance of PawHub. All data collected is aggregated and anonymized.",
                    },
                    {
                        bold: "Targeting cookies:",
                        text: " We do not currently use advertising or targeting cookies. PawHub products are ad-free and we do not sell your data to advertisers.",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Third-Party Cookies",
        content: [
            {
                type: "paragraph",
                text: "Some cookies on PawHub are set by third-party services we use to operate the platform. These include:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Stripe:",
                        text: " Our payment processor may set cookies to handle secure checkout and fraud prevention during subscription transactions.",
                    },
                    {
                        bold: "PostHog:",
                        text: " We use PostHog for product analytics. It collects anonymized usage data to help us understand feature adoption and user flows.",
                    },
                    {
                        bold: "Google:",
                        text: " If you connect Google Calendar for appointment syncing, Google may set authentication cookies governed by Google's own privacy policy.",
                    },
                ],
            },
            {
                type: "paragraph",
                text: "We have no control over third-party cookies. Please refer to each provider's privacy policy for details on how they use cookies.",
            },
        ],
    },
    {
        id: 5,
        title: "Cookie Duration",
        content: [
            {
                type: "paragraph",
                text: "Cookies we use fall into two duration categories:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Session cookies:",
                        text: " These are temporary and are deleted automatically when you close your browser. They are used to maintain your session while you are actively using PawHub.",
                    },
                    {
                        bold: "Persistent cookies:",
                        text: " These remain on your device for a set period of time (typically 30 to 365 days) or until you delete them. They are used to remember your preferences and keep you signed in across sessions.",
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        title: "Managing Cookies",
        content: [
            {
                type: "paragraph",
                text: "You have several options to control how cookies are used:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Browser settings:",
                        text: " Most browsers allow you to view, block, or delete cookies through their settings. Refer to your browser's help documentation for instructions.",
                    },
                    {
                        bold: "Account settings:",
                        text: " You can opt out of non-essential analytics cookies from your PawHub account settings under Privacy.",
                    },
                    {
                        bold: "Do Not Track:",
                        text: " PawHub respects Do Not Track (DNT) signals. If your browser sends a DNT signal, we will not load analytics cookies.",
                    },
                ],
            },
            {
                type: "paragraph",
                text: "Please note that disabling strictly necessary cookies will prevent PawHub from functioning correctly and you may be unable to log in or access your data.",
            },
        ],
    },
    {
        id: 7,
        title: "Changes to This Policy",
        content: [
            {
                type: "paragraph",
                text: "We may update this Cookie Policy from time to time as our use of cookies evolves or as legal requirements change. We will notify you of material changes via email or an in-app notification before they take effect. The 'Last updated' date at the top of this page always reflects the most recent revision.",
            },
        ],
    },
    {
        id: 8,
        title: "Contact Us",
        content: [
            {
                type: "paragraph",
                text: "If you have any questions about our use of cookies, please contact us at ",
                link: { href: "mailto:privacy@pawhub.com", label: "privacy@pawhub.com" },
            },
        ],
    },
];