import { LAST_UPDATED } from "../data/sections";

export function CookieHeader() {
    return (
        <div className="text-center mb-10">
            <h1 className="text-display tracking-display font-medium text-graphite-text mb-3">
                Cookie Policy
            </h1>
            <p className="text-sm text-graphite-text font-sans">
                Last updated:{" "}
                <span className="font-semibold text-graphite-text">{LAST_UPDATED}</span>
            </p>
        </div>
    );
}