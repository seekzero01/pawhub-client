"use client"

import {Pet} from "@/components/sidebar/AppSidebar";
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar} from "@/components/ui/sidebar";
import {useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronsUpDown, Plus} from "lucide-react";
import Image from "next/image";

interface PetSwitcherProps {
    readonly pets: Pet[];
}

export const PetSwitcher = ({ pets }: PetSwitcherProps) => {
    const { isMobile } = useSidebar()
    const [activePet, setActivePet] = useState(pets[0])

    if (!activePet) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Image src={activePet.avatarUrl} alt={activePet.name} width={200} height={200} className="rounded-full" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{activePet.name}</span>
                                <span className="truncate text-xs">{activePet.breed}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-cloud-canvas"
                        align="start"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-xs text-muted-foreground">
                            Pets
                        </DropdownMenuLabel>
                        {pets.map((pet, index) => (
                            <DropdownMenuItem
                                key={pet.name}
                                onClick={() => setActivePet(pet)}
                                className="gap-2 p-2"
                            >
                                <div className="flex size-6 items-center justify-center rounded-md border">
                                    {/*<pet.logo className="size-3.5 shrink-0" />*/}
                                </div>
                                {pet.name}
                                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <Plus className="size-4" />
                            </div>
                            <div className="font-medium text-muted-foreground">Add pet</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}