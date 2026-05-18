import { Separator } from "@/components/ui/separator";

const LAST_UPDATED = "May 18, 2026";

const sections = [
    {
        id: 1,
        title: "Information Collection",
        content: [
            {
                type: "paragraph",
                text: "At PawHub, we take your privacy seriously. We collect information to provide better services to all our users. We collect information in the following ways:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "Information you give us:",
                        text: " This includes your name, email address, and pet details provided during registration.",
                    },
                    {
                        bold: "Information we get from your use of our services:",
                        text: " We collect information about the services that you use and how you use them, like when you visit a feature on PawHub.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Data Usage",
        content: [
            {
                type: "paragraph",
                text: "We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect PawHub and our users. We also use this information to offer you tailored content – like giving you more relevant pet health tips.",
            },
            {
                type: "paragraph",
                text: "We will ask for your consent before using information for a purpose other than those that are set out in this Privacy Policy.",
            },
        ],
    },
    {
        id: 3,
        title: "Security",
        content: [
            {
                type: "paragraph",
                text: "We work hard to protect PawHub and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular:",
            },
            {
                type: "list",
                items: [
                    {
                        bold: "",
                        text: "We encrypt many of our services using SSL.",
                    },
                    {
                        bold: "",
                        text: "We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Your Rights",
        content: [
            {
                type: "paragraph",
                text: "You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request that we delete your data. If you wish to exercise any of these rights, please contact us at ",
                link: { href: "mailto:privacy@pawhub.com", label: "privacy@pawhub.com" },
            },
        ],
    },
    {
        id: 5,
        title: "Cookies",
        content: [
            {
                type: "paragraph",
                text: "PawHub uses cookies to improve your experience on our platform. A cookie is a small file that asks permission to be placed on your device. Cookies allow us to recognize your browser and capture and remember certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly.",
            },
        ],
    },
    {
        id: 6,
        title: "Third-Party Services",
        content: [
            {
                type: "paragraph",
                text: "Our service may contain links to third-party websites or services that are not owned or controlled by PawHub. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.",
            },
        ],
    },
    {
        id: 7,
        title: "Children's Privacy",
        content: [
            {
                type: "paragraph",
                text: "PawHub does not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.",
            },
        ],
    },
    {
        id: 8,
        title: "Changes to This Policy",
        content: [
            {
                type: "paragraph",
                text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
            },
        ],
    },
];

type ContentBlock =
    | { type: "paragraph"; text: string; link?: { href: string; label: string } }
    | { type: "list"; items: { bold: string; text: string }[] };

function renderContent(blocks: ContentBlock[]) {
    return blocks.map((block, i) => {
        if (block.type === "paragraph") {
            return (
                <p key={i} className="text-sm leading-relaxed text-deep-plum mb-4">
                    {block.text}
                    {block.link && (
                        <a
                            href={block.link.href}
                            className="text-[#6b6b9a] hover:underline underline-offset-2"
                        >
                            {block.link.label}
                        </a>
                    )}
                    {block.link && "."}
                </p>
            );
        }
        if (block.type === "list") {
            return (
                <ul key={i} className="list-disc list-outside pl-5 space-y-2 mb-4">
                    {block.items.map((item, j) => (
                        <li key={j} className="text-sm leading-relaxed text-[#3a3a3a]">
                            {item.bold && <strong>{item.bold}</strong>}
                            {item.text}
                        </li>
                    ))}
                </ul>
            );
        }
        return null;
    });
}

export default function Page() {
    return (
        <div className={`min-h-screen flex flex-col bg-cloud-canvas w-full`}>
            {/* Header */}
            <main className="flex-1 px-4 py-14 max-w-2xl mx-auto w-full">
                <div className="text-center mb-10">
                    <h1
                        className="text-display font-semibold text-graphite-text mb-3"
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-[#888] font-sans">
                        Last updated:{" "}
                        <span className="font-semibold text-graphite-text">{LAST_UPDATED}</span>
                    </p>
                </div>

                {/* Card */}
                <div className="px-8 py-8">
                    {sections.map((section, idx) => (
                        <div key={section.id}>
                            <section className="mb-2">
                                <h2
                                    className="text-xl font-bold text-graphite-text mb-3"
                                >
                                    {section.id}. {section.title}
                                </h2>
                                {renderContent(section.content as ContentBlock[])}
                            </section>
                            {idx < sections.length - 1 && (
                                <Separator className="my-6 bg-deep-plum" />
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <footer className="border-t border-[#d9d5cf] bg-[#ece9e4]">
                <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                    <p className="text-xs text-[#888] font-sans">
                        © 2026 PawHub. All rights reserved.
                    </p>
                    <nav className="flex items-center gap-5">
                        {[
                            { label: "Privacy Policy", href: "/privacy" },
                            { label: "Terms of Service", href: "/terms" },
                            { label: "Cookie Policy", href: "/cookies" },
                            { label: "Support", href: "/support" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-xs text-[#555] hover:text-[#1a1a1a] transition-colors font-sans"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </footer>
        </div>
    );
}