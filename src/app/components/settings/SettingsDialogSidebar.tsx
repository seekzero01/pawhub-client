"use client"

import {HelpCircle, ExternalLink, ChevronsUpDown} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SETTINGS_TABS } from "./data/index"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

type SettingsSidebarProps = {
    user: {
        name: string
        email: string
        avatarUrl?: string
    }
}

export const SettingsDialogSidebar = ({ user }: SettingsSidebarProps) => {
    const initials = user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()

    return (
        <div className="flex h-full flex-col border-r border-platinum-border">
            <div className="flex justify-between items-center p-5   ">
                <div className="flex items-center gap-3">
                    <Avatar className="size-9 shrink-0">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback className="bg-amethyst-accent/10 text-amethyst-accent text-xs font-semibold">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-graphite-text leading-tight">
                            {user.name}
                        </p>
                        <p className="truncate text-xs text-graphite-text/50">Personal</p>
                    </div>
                </div>
                <ChevronsUpDown className="size-4"/>
            </div>

            <Separator className="h-px border-[0.5px] border-platinum-border"/>

            <div className="px-3 pt-4">
                <p className="px-2 pb-2 text-caption font-medium text-graphite-text/40">
                    Account
                </p>
                <TabsList className="flex h-auto w-full flex-col items-stretch gap-0.5 bg-transparent p-0">
                    {SETTINGS_TABS.map((tab) => {
                        const Icon = tab.icon
                        return (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="justify-start gap-2.5 rounded-md px-2 py-2 text-sm data-[state=active]:bg-amethyst-accent data-[state=active]:text-black data-[state=active]:shadow-none"
                            >
                                <Icon className="size-4 shrink-0" />
                                <span>{tab.label}</span>
                            </TabsTrigger>
                        )
                    })}
                </TabsList>
            </div>

            <div className="mt-auto pb-4">
                <Separator className="h-px border-[0.5px] border-platinum-border"/>
                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-between px-4 pt-3 text-sm text-graphite-text/70 hover:text-graphite-text"
                    asChild
                >
                    <Link href="/help" target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-2.5">
                            <HelpCircle className="size-4" />
                            Get help
                        </span>
                        <ExternalLink className="size-3.5 opacity-50" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}