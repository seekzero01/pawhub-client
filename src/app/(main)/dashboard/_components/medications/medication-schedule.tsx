"use client";

import React from "react";
import dayjs from "dayjs";
import { CardTitle , Card, CardHeader, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Pill,
    ArrowRight,
    CircleCheck,
    Clock,
    SquircleDashedIcon, CheckCircleIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import {MedicationRow, TimelineItem} from "./types/types";
import { generateDailyTimeline } from "./types/medication-engine";
import Link from "next/link";

interface MedicationScheduleProps {
    data: MedicationRow[];
}

export const MedicationSchedule = ({ data }: MedicationScheduleProps) => {
    const { timeline, activeCount, nextUpItem } = generateDailyTimeline(data);

    const getCountdownLabel = (item: TimelineItem) => {
        if (item.isOverdue) return "Overdue";

        const now = dayjs();
        const diffHours = item.targetDateTime.diff(now, "hour");

        if (diffHours <= 0) {
            const diffMins = item.targetDateTime.diff(now, "minute");
            return `Due in ${diffMins} min${diffMins !== 1 ? "s" : ""}`;
        }

        return `Due in ${diffHours} hour${diffHours !== 1 ? "s" : ""}`;
    };

    return (
        <Card className="w-full max-w-md p-4 bg-white">
            <CardHeader className="flex p-0 justify-between w-full">
                    <CardTitle className="flex flex-col">
                        <span className="text-body font-bold tracking-body text-graphite-text">
                            Medication Schedule
                        </span>
                        <p className="text-caption text-deep-plum">
                            {activeCount} active medications
                        </p>
                    </CardTitle>
                    <Link
                        href="/medications"
                        className="group flex items-center gap-1 text-caption text-slate hover:text-graphite transition-colors duration-150"
                    >
                        View All
                        <ArrowRight className="size-4 transform transition-transform duration-150 group-hover:translate-x-0.5" />
                    </Link>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-5">
                {nextUpItem && (
                    <div className="bg-amethyst-accent/50 rounded-2xl p-4 relative">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex gap-3">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center border border-purple-100/40 shadow-sm">
                                    <Pill className="size-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-neutral-900 text-body leading-body">
                                        {nextUpItem.name}
                                    </span>
                                    <span className="text-caption text-deep-plum mt-0.5">
                                        For {nextUpItem.petName} • Today at {nextUpItem.timeSlot}
                                    </span>
                                </div>
                            </div>
                            <Badge className={cn(
                                "text-xs font-semibold px-2.5 py-0.5 rounded-full border-none shadow-none",
                                nextUpItem.isOverdue
                                    ? "bg-red-100 text-red-700 hover:bg-red-100"
                                    : "bg-sky-blue-highlight"
                            )}>
                                {getCountdownLabel(nextUpItem)}
                            </Badge>
                        </div>
                        <Button className="w-full bg-black rounded-xl h-10 font-medium text-body leading-body transition-colors flex items-center justify-center gap-2">
                            <CheckCircleIcon className="size-4 text-white" /> <span className="text-white">Mark as Given</span>
                        </Button>
                    </div>
                )}
                <div className="flex flex-col">
                    <span className="text-caption font-bold text-graphite-text uppercase mb-4 block">
                        Today&#39;s Timeline
                    </span>

                    <div className="relative flex flex-col gap-6 pl-2">
                        {timeline.map((item, index) => {
                            const isCurrentNextUp = nextUpItem?.medicationId === item.medicationId && nextUpItem?.timeSlot === item.timeSlot;

                            return (
                                <div
                                    key={`${item.medicationId}-${item.timeSlot}`}
                                    className="flex items-start justify-between relative"
                                >
                                    {index !== timeline.length - 1 && (
                                        <div className="absolute left-4 top-8 bottom-0 w-[1.5px] bg-neutral-100 -mb-6" />
                                    )}

                                    <div className="flex gap-4">
                                        <div className="z-10">
                                            {item.isGiven ? (
                                                <div className="size-8 rounded-full bg-porcelain-surface flex items-center justify-center border border-green-200">
                                                    <CircleCheck className="size-4 text-green-600 fill-green-100" />
                                                </div>
                                            ) : isCurrentNextUp ? (
                                                <div className="size-8 rounded-full bg-[#EDF5FA] flex items-center justify-center border border-blue-200">
                                                    <Clock className="size-4 text-sky-blue-highlight fill-sky-blue-highlight/10" />
                                                </div>
                                            ) : (
                                                <div className="size-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-200">
                                                    <SquircleDashedIcon className="size-4"/>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <span className={cn(
                                                "font-semibold text-body leading-snug",
                                                item.isGiven ? "text-neutral-400 line-through font-medium" : "text-neutral-900"
                                            )}>
                                                {item.name}
                                            </span>
                                            <span className="text-xs font-normal text-neutral-500 mt-0.5">
                                                {item.isGiven
                                                    ? `Given at ${item.givenAtTime}`
                                                    : isCurrentNextUp
                                                        ? "Due next"
                                                        : "Upcoming"
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    <span className={cn(
                                        "text-caption font-bold self-start pt-1.5 tabular-nums",
                                        item.isGiven ? "text-neutral-400 font-normal" : "text-neutral-950"
                                    )}>
                                        {item.timeSlot}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};