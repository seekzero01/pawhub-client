import {Bot, CalendarDays, LayoutDashboard, PawPrint, Pill} from "lucide-react";
import {ChatHistory, NavItem} from "@/components/sidebar/types";
import { SlidersHorizontal, Tablet } from "lucide-react";

export const navItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Pet Profile",
        href: "/pet-profile",
        icon: PawPrint,
    },
    {
        label: "Appointments",
        href: "/appointments",
        icon: CalendarDays,
    },
    {
        label: "Medication",
        href: "/medications",
        icon: Pill,
    },
    {
        label: "PawBot Agent",
        href: "/pawbot",
        icon: Bot,
        badge: "NEW",
    },
];

export const mockChats: ChatHistory[] = [
    { id: "1", title: "Diet for Golden Retriever..." },
    { id: "2", title: "Flea treatment options" },
    { id: "3", title: "Vaccination schedule 2024" },
];

export const footerActions = [
    { icon: SlidersHorizontal, label: "Settings" },
    { icon: Tablet, label: "Download mobile app" },
] as const;

