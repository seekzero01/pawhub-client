"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navItems } from "@/src/app/components/sidebar/data";

export const AppSidebarNav = () => {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu className="gap-3.5 group-data-[collapsible=icon]:gap-5 group-data-[collapsible=icon]:items-center">
                    {navItems.map((item) => {
                        const isActive =
                            pathname === item.href ||
                            pathname?.startsWith(item.href + "/");

                        return (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive}
                                    className={cn(
                                        "gap-3 rounded-lg py-1.5 font-medium h-fit transition-all duration-150",
                                        "text-deep-plum hover:bg-platinum-border/20 hover:text-graphite-text",
                                        "data-[active=true]:bg-amethyst-accent/20 data-[active=true]:text-graphite-text",
                                        "group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:data-[active=true]:bg-transparent group-data-[collapsible=icon]:hover:bg-transparent"
                                    )}
                                    tooltip={item.label}
                                >
                                    <Link href={item.href}>
                                        <item.icon
                                            className={cn(
                                                "h-5 w-5 p-px",
                                                isActive
                                                    ? "text-graphite-text"
                                                    : "text-deep-plum"
                                            )}
                                        />
                                        <span className="flex-1 py-1 leading-none group-data-[collapsible=icon]:hidden">
                                            {item.label}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};