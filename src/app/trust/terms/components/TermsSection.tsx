import type { ContentBlock, TermsSection as TermsSectionType } from "../data/sections";

function renderContent(blocks: ContentBlock[]) {
    return blocks.map((block, i) => {
        if (block.type === "paragraph") {
            return (
                <p key={i} className="text-sm leading-relaxed text-graphite-text mb-4">
                    {block.text}
                    {block.link && (
                        <a
                            href={block.link.href}
                            className="text-deep-plum hover:underline underline-offset-2"
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
                        <li key={j} className="text-sm leading-relaxed text-graphite-text">
                            {item.bold && <strong>{item.bold}</strong>}
                            {item.text}
                        </li>
                    ))}
                </ul>
            );
        }
        if (block.type === "callout") {
            return (
                <div
                    key={i}
                    className="border-l-4 border-amethyst-accent bg-[#faf7fc] rounded-r-lg px-5 py-4 mb-4"
                >
                    <p className="text-sm font-semibold text-graphite-text mb-1">
                        {block.title}
                    </p>
                    <p className="text-sm leading-relaxed text-deep-plum">
                        {block.text}
                    </p>
                </div>
            );
        }
        return null;
    });
}

type Props = {
    section: TermsSectionType;
};

export function TermsSection({ section }: Props) {
    return (
        <>
            <section className="mb-2">
                <h2 className="text-xl font-bold text-graphite-text mb-3">
                    {section.id}. {section.title}
                </h2>
                {renderContent(section.content as ContentBlock[])}
            </section>
        </>
    );
}