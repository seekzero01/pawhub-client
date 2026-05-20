import { TermsFooter } from "./components/TermsFooter";
import { TermsHeader } from "./components/TermsHeader";
import { TermsSection } from "./components/TermsSection";
import { sections } from "./data/sections";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-cloud-canvas w-full">
            <main className="flex-1 px-4 py-14 max-w-2xl mx-auto w-full">
                <TermsHeader />
                <div className="px-8 py-8">
                    {sections.map((section) => (
                        <TermsSection
                            key={section.id}
                            section={section}
                        />
                    ))}
                </div>
            </main>
            <TermsFooter />
        </div>
    );
}