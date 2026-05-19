import { CookieFooter } from "./components/CookieFooter";
import { CookieHeader } from "./components/CookieHeader";
import { CookieSection } from "./components/CookieSection";
import { sections } from "./data/sections";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col bg-cloud-canvas w-full">
            <main className="flex-1 px-4 py-14 max-w-2xl mx-auto w-full">
                <CookieHeader />
                <div className="px-8 py-8">
                    {sections.map((section) => (
                        <CookieSection
                            key={section.id}
                            section={section}
                        />
                    ))}
                </div>
            </main>
            <CookieFooter />
        </div>
    );
}