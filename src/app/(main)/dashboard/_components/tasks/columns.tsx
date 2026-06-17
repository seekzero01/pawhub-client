"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Flag, MoreHorizontal} from "lucide-react";
import {DataTableColumnHeader} from "@/app/(main)/dashboard/_components/tasks/data-table-column-header";
import {Checkbox} from "@/components/ui/checkbox";
import dayjs from "dayjs";

const priorityMap = {
    urgent: { color: "text-red-500 fill-red-500", label: "Urgent" },
    high: { color: "text-yellow-500 fill-yellow-500", label: "High" },
    normal: { color: "text-blue-500 fill-blue-500", label: "Normal" },
    low: { color: "text-gray-500 fill-gray-500", label: "Low" },
} as const;

type Priority = "urgent" | "high" | "normal" | "low"

export type Task = {
    id: string
    name: string
    dueDate: string
    priority: Priority
}

export const columns: ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({table}) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="opacity-0 group-hover:opacity-100 data-[state=checked]:opacity-100 transition-opacity duration-150"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name"/>
        ),
    },
    {
        accessorKey: "dueDate",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Due Date" />
        ),
        cell: ({row}) => {
            const dateStr = row.getValue("dueDate") as string;

            const isOverdue = dayjs(dateStr).isBefore(dayjs(), "day");

            return (
                <span className={isOverdue ? "text-red-500 font-medium" : ""}>
                    {dateStr}
                </span>
            )
        }
    },
    {
        accessorKey: "priority",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Priority" />
        ),
        cell: ({ row }) => {
            const priority = row.getValue("priority") as Priority;
            const config = priorityMap[priority];

            if (!config) return <span className="capitalize">{priority}</span>;

            return (
                <div className="flex items-center gap-1">
                    <Flag className={`size-4 ${config.color}`} />
                    <span className="capitalize font-medium text-graphite-text">
                        {config.label}
                    </span>
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const task = row.original

            return (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-cloud-canvas max-w-150 w-full">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(task.id)}
                            >
                                Copy task ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Rename</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]