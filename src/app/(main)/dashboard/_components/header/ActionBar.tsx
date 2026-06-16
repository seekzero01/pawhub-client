import { Button } from "@/components/ui/button"
import {
    Pill,
    Plus,
    SquareActivity,
} from "lucide-react"
import {AppSearch} from "@/app/(main)/dashboard/_components/header/AppSearch";

export const ActionBar = () => {
    return (
        <div className="flex w-full items-center justify-between gap-4">
            <AppSearch />

            <div className="flex items-center gap-1">
                <Button variant="ghost" className="bg-amethyst-accent rounded-full" aria-label="Add">
                    <Plus />
                </Button>
                <Button variant="ghost" className="bg-amethyst-accent rounded-full" aria-label="Medication">
                    <Pill />
                </Button>
                <Button variant="ghost" className="bg-amethyst-accent rounded-full" aria-label="Activity">
                    <SquareActivity />
                </Button>
            </div>
        </div>
    )
}