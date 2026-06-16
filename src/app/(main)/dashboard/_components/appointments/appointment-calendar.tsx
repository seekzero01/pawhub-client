"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import {RefreshCw} from "lucide-react";

interface AppointmentCalendarProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export const AppointmentCalendar = ({ date, setDate }: AppointmentCalendarProps) => {
    return (
        <div className="mx-auto w-full border-0 border-transparent shadow-none">
            <Calendar
                mode="single"
                defaultMonth={date}
                selected={date}
                onSelect={setDate}
                showWeekNumber
                className="w-full p-0"
                classNames={{
                    day: "h-11.5 w-11.5 p-0 font-normal aria-selected:opacity-100 rounded-xl hover:bg-slate-100",
                }}
                weekStartsOn={1}
            />
            <div className="flex items-center gap-4 mt-3">
                <Button className="flex-1 w-full bg-amethyst-accent rounded-full text-body leading-body tracking-body font-semibold">Add appointment</Button>
                <Button className=" bg-silver-detail/30 rounded-full">
                    <RefreshCw />
                </Button>
            </div>
        </div>
    )
}
