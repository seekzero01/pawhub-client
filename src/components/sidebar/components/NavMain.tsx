"use client"

import {
    SidebarGroup,
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
                            <SidebarMenuButton tooltip={item.label} className="flex items-center gap-3">
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
