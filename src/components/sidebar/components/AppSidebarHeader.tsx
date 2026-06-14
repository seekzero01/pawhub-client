"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Tooltip , TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";
import { Kbd } from "@/components/ui/kbd";
import Image from "next/image";
import {UserButton} from "@/UserButton";

export const AppSidebarHeader = () => {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";

    return (
        <SidebarHeader className="flex flex-row items-center justify-between min-h-14">
            {!isCollapsed && (
                <div></div>
            )}
            <UserButton />
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
        </SidebarHeader>
    );
};