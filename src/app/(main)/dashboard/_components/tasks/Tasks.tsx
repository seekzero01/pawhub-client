import {Card, CardContent} from "@/components/ui/card";
import {Calendar, CalendarCheck, CircleCheck, ListFilter, Sun} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {DataTable} from "@/app/(main)/dashboard/_components/tasks/data-table";
import {columns, Task} from "@/app/(main)/dashboard/_components/tasks/columns";

const tasks: Task[] = [
    {
        id: "r4323",
        name: "Feed the dog",
        dueDate: new Date("2026-06-20").toLocaleDateString(),
        priority: "high"
    },
    {
        id: "gregr",
        name: "Replace the toilet filling",
        dueDate: new Date("2026-06-08").toLocaleDateString(),
        priority: "urgent"
    },
    {
        id: "r4323f",
        name: "Feed the dog",
        dueDate: new Date("2026-06-20").toLocaleDateString(),
        priority: "high"
    },
    {
        id: "gregrb",
        name: "Replace the toilet filling",
        dueDate: new Date("2026-06-08").toLocaleDateString(),
        priority: "urgent"
    },
    {
        id: "r4323we",
        name: "Feed the dog",
        dueDate: new Date("2026-06-20").toLocaleDateString(),
        priority: "high"
    },
    {
        id: "gregrfb",
        name: "Replace the toilet filling",
        dueDate: new Date("2026-06-08").toLocaleDateString(),
        priority: "urgent"
    },
]

interface TasksProps {
    tasks: any[]
}

export const Tasks = () => {
    return (
        <div className="min-w-200">
            <div className="container mx-auto">
                <DataTable columns={columns} data={tasks} />
            </div>
        </div>
    )
}