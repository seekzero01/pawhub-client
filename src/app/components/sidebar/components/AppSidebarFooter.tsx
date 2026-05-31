"use client";

import { SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {Activity, useState} from "react";
import {SettingsDialog} from "@/src/app/components/settings/SettingsDialog";
import {footerActions} from "@/src/app/components/sidebar/data";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

export const AppSidebarFooter = () => {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarFooter
            className={cn(
                "flex items-center border-t border-platinum-border py-3",
                isCollapsed
                    ? "flex-col gap-4 px-0 justify-center"
                    : "flex-row justify-between px-4"
            )}
        >
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <div
                        className={cn(
                            "flex items-center",
                            isCollapsed ? "flex-col gap-4" : "flex-row gap-4"
                        )}
                    >
                        {footerActions.map((action) => {
                            const isTrigger = action.label.toLowerCase() === "settings" ||
                                action.label.toLowerCase() === "personalization";

                            const buttonElement = (
                                <Button className="h-fit w-fit p-px" key={action.label} variant="ghost" size="icon" aria-label={action.label}>
                                    <action.icon className="size-4 p-px" />
                                </Button>
                            );

                            return isTrigger ? (
                                <DialogTrigger asChild key={action.label}>
                                    {buttonElement}
                                </DialogTrigger>
                            ) : (
                                buttonElement
                            );
                        })}

                        <DialogContent className="p-0 sm:max-w-300 h-165 bg-cloud-canvas">
                            <DialogHeader className="sr-only">
                                <DialogTitle>App Settings</DialogTitle>
                                <DialogDescription>
                                    Manage your profile configuration, preferences, security, and billing details.
                                </DialogDescription>
                            </DialogHeader>
                            <SettingsDialog user={{ name: "down", email: "down", avatarUrl: "gts" }} />
                        </DialogContent>
                    </div>
                </Dialog>

            <Activity mode={isCollapsed ? "hidden" : "visible"}>
                <p className="text-caption text-silver-detail">
                    By{" "}
                    <span className="font-semibold text-graphite-text">
                        seekzero
                    </span>
                </p>
            </Activity>
        </SidebarFooter>
    );
};