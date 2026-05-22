"use client";

import { SlidersHorizontal, LayoutGrid, Tablet } from "lucide-react";
import { SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const footerActions = [
    { icon: SlidersHorizontal, label: "Filters" },
    { icon: LayoutGrid, label: "Personalization" },
    { icon: Tablet, label: "Download mobile app" },
] as const;

export const AppSidebarFooter = () => {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";

    return (
        <SidebarFooter
            className={cn(
                "flex items-center border-t border-platinum-border py-3",
                isCollapsed
                    ? "flex-col gap-4 px-0 justify-center"
                    : "flex-row justify-between px-4"
            )}
        >
            <div
                className={cn(
                    "flex items-center",
                    isCollapsed ? "flex-col gap-4" : "flex-row gap-4"
                )}
            >
                    {footerActions.map(({ icon: Icon, label }) => (
                        <Button
                            key={label}
                            className="p-0 h-fit w-fit text-deep-plum hover:text-graphite-text transition-colors"
                            aria-label={label}
                        >
                            <Icon className="h-4 w-4 p-px" />
                        </Button>
                    ))}
            </div>

            {!isCollapsed && (
                <p className="text-caption text-silver-detail">
                    By{" "}
                    <span className="font-semibold text-graphite-text">
                        seekzero
                    </span>
                </p>
            )}
        </SidebarFooter>
    );
};