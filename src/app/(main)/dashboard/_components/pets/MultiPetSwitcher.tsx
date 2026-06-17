// components/multi-pet-switcher.tsx

"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {Pet} from "@/app/(main)/dashboard/page";

interface MultiPetSwitcherProps {
    pets: Pet[]
}

export const MultiPetSwitcher = ({
                                     pets,
                                 }: MultiPetSwitcherProps) => {
    const [activePetId, setActivePetId] = useState<string>(pets[0]?.id ?? "")

    if (!pets.length) return null

    const handleValueChange = (value: string) => {
        setActivePetId(value)
    }

    return (
        <div className="flex items-center gap-2 border-b border-platinum-border bg-cloud-canvas px-4 pb-2">
            <Tabs value={activePetId} onValueChange={handleValueChange}>
                <TabsList className="h-auto gap-2 bg-transparent p-0">
                    {pets.map((pet) => (
                        <TabsTrigger
                            key={pet.id}
                            value={pet.id}
                            className="flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-sm font-medium text-deep-plum transition-colors data-[state=active]:border-transparent data-[state=active]:bg-amethyst-accent data-[state=active]:text-graphite-text data-[state=inactive]:border-platinum-border data-[state=inactive]:bg-transparent data-[state=inactive]:text-deep-plum"
                        >
                            <Avatar className="size-5 shrink-0">
                                <AvatarImage src={pet.avatar_url ?? undefined} alt={pet.name} />
                                <AvatarFallback className="bg-amethyst-accent text-[10px] font-semibold text-graphite-text">
                                    {pet.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <span className="max-w-80 truncate">{pet.name}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="ml-auto size-8 shrink-0 rounded-full border border-dashed border-platinum-border text-deep-plum hover:border-silver-detail hover:bg-transparent hover:text-graphite-text"
                aria-label="Add pet"
            >
                <Plus className="size-3.5" />
            </Button>
        </div>
    )
}