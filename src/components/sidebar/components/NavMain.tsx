"use client"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import {navItems} from "@/components/sidebar/data";
import Link from "next/link";

export function NavMain() {
    return (
        <SidebarGroup>
            <SidebarMenu className="gap-3">
                {navItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton tooltip={item.label}>
                                {item.icon && <item.icon />}
                                <Link href={item.href}>
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
