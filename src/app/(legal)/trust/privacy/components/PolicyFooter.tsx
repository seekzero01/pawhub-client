const footerLinks = [
    { label: "Privacy Policy", href: "/trust/privacy" },
    { label: "Terms of Service", href: "/trust/terms" },
    { label: "Cookie Policy", href: "/trust/cookies" },
    { label: "Support", href: "/support" },
];

export function PolicyFooter() {
    return (
        <footer className="border-t border-[#d9d5cf] bg-[#ece9e4]">
            <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                <p className="text-xs text-deep-plum font-sans">
                    &copy; 2026 PawHub. All rights reserved.
                </p>
                <nav className="flex items-center gap-5">
                    {footerLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-xs text-graphite-text hover:text-ink-text transition-colors font-sans"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}