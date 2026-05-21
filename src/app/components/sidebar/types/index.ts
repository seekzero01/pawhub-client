import type { LucideIcon } from "lucide-react";

export type NavItem = {
    label: string;
    href: string;
    icon: LucideIcon;
    badge?: string;
};

export type ChatHistory = {
    id: string;
    title: string;
};