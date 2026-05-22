import type { ContentBlock, PolicySection as PolicySectionType } from "../data/sections";

function renderContent(blocks: ContentBlock[]) {
    return blocks.map((block, i) => {
        if (block.type === "paragraph") {
            return (
                <p key={i} className="text-sm leading-relaxed text-graphite-text mb-4">
                    {block.text}
                    {block.link && (
                        <a
                            href={block.link.href}
                            className="text-deep-plum font-semibold hover:underline underline-offset-2"
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
        return null;
    });
}

type Props = {
    section: PolicySectionType;
};

export function PolicySection({ section }: Props) {
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