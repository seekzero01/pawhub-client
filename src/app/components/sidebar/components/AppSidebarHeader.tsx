"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip , TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";

export const AppSidebarHeader = () => {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";

    return (
        <SidebarHeader className="flex flex-row items-center justify-between min-h-14">
            {!isCollapsed && (
                <span className="px-2 font-playfair-display text-lg font-semibold tracking-tight text-graphite-text group-data-[collapsible=icon]:hidden">
                    Pawhub
                </span>
            )}
            <Tooltip>
                <TooltipTrigger>
                    <SidebarTrigger
                        className="p-4 rounded-lg text-deep-plum hover:text-graphite-text hover:bg-platinum-border/30 transition-colors ml-auto"
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? (
                            <PanelLeftOpen className="h-5 w-5 p-px" />
                        ) : (
                            <PanelLeftClose className="h-5 w-5 p-px" />
                        )}
                    </SidebarTrigger>
                </TooltipTrigger>
                <TooltipContent side="left">
                    {isCollapsed ? (
                        <span>Open Sidebar</span>
                    ) : (
                        <span>Close Sidebar</span>
                    )}
                    <Kbd>B</Kbd>
                </TooltipContent>
            </Tooltip>
        </SidebarHeader>
    );
};