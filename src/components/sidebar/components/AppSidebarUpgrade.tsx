"use client";

import { Gem, ChevronRight } from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";

export const AppSidebarUpgrade = () => {
    return (
        <SidebarGroup className="p-2 mt-auto">
            <SidebarGroupContent>
                <SidebarMenu className="group-data-[collapsible=icon]:items-center">
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="h-auto w-full flex items-center gap-3 rounded-xl bg-amethyst-accent border py-3 px-4 hover:bg-amethyst-accent/80 transition-colors group group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:hover:bg-transparent"
                            tooltip="Upgrade to Premium"
                        >
                            <Gem className="h-5 w-5 text-graphite-text p-px" />
                            <div className="flex-1 text-left min-w-0 group-data-[collapsible=icon]:hidden">
                                <p className="text-caption font-semibold text-graphite-text leading-tight">
                                    Upgrade to Premium
                                </p>
                                <p className="text-caption text-deep-plum leading-tight mt-0.5">
                                    Get unlimited AI chats
                                </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-silver-detail group-hover:translate-x-0.5 transition-transform shrink-0 group-data-[collapsible=icon]:hidden" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}