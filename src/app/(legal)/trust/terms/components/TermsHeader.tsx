import { LAST_UPDATED } from "../data/sections";
import {LegalLabel} from "@/components/LegalLabel";

export function TermsHeader() {
    return (
        <div className="text-center mb-10">
            <LegalLabel />
            <h1 className="text-display tracking-display font-medium text-graphite-text mb-3">
                Terms of Service
            </h1>
            <p className="text-sm text-graphite-text font-sans">
                Last updated:{" "}
                <span className="font-semibold text-graphite-text">{LAST_UPDATED}</span>
            </p>
        </div>
    );
}