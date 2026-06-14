"use client"

import { type Table } from "@tanstack/react-table"
import {Columns3, Settings2} from "lucide-react"
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DataTableViewOptions<TData>({
                                                table,
                                            }: {
    table: Table<TData>
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Badge
                    variant="ghost"
                    className="bg-amethyst-accent mb-4 cursor-pointer hover:bg-amethyst-accent/80"
                >
                    <Columns3 />
                    Columns
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-37.5 bg-cloud-canvas">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter(
                        (column) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
