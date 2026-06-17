"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Stethoscope, Syringe, Users, FileText } from "lucide-react"
import {useEffect, useState} from "react";

interface DBAppointment {
    id: string;
    petId: string;
    userId: string;
    title: string;
    type: string | null;
    location: string | null;
    vetName: string | null;
    scheduledAt: string | Date;
    status: string | null;
    googleEventId: string | null;
    notes: string | null;
    createdAt: string | null;
}

interface TodayTimelineProps {
    appointments: DBAppointment[];
    selectedDate: Date | undefined;
}

const getIconBgColor = (type: string | null) => {
    switch (type?.toLowerCase()) {
        case "emergency":
            return "bg-pink-500";
        case "diagnostic":
        case "checkup":
            return "bg-sky-blue-highlight";
        case "sync":
        case "operation":
            return "bg-amber-50";
        default:
            return "bg-slate-50";
    }
};

const getIcon = (type: string | null) => {
    switch (type?.toLowerCase()) {
        case "emergency":
            return <Stethoscope className="size-4" />;
        case "diagnostic":
            return <Syringe className="size-4" />;
        case "sync":
            return <Users className="size-4" />;
        default:
            return <FileText className="size-4" />;
    }
};

export const TodayTimeline = ({ appointments, selectedDate }: TodayTimelineProps) => {
    const START_HOUR = 0;
    const END_HOUR = 23;
    const ROW_HEIGHT = 90;

    const hours = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => {
        const hour = i + START_HOUR;
        return `${hour < 10 ? `0${hour}` : hour}:00`;
    });

    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    let indicatorTopPosition: number | null = null;

    if (currentTime && selectedDate && currentTime.toDateString() === selectedDate.toDateString()) {
        const currentHour = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();

        if (currentHour >= START_HOUR && currentHour < END_HOUR + 1) {
            const fractionalHoursPassed = (currentHour - START_HOUR) + (currentMinutes / 60);
            indicatorTopPosition = fractionalHoursPassed * ROW_HEIGHT;
        }
    }

    const formattedIndicatorTime = currentTime
        ? `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`
        : "";

    const hourMap: Record<string, DBAppointment[]> = {};
    if (selectedDate) {
        const targetDateStr = selectedDate.toDateString();
        appointments.forEach((appt) => {
            const apptDate = new Date(appt.scheduledAt);
            if (apptDate.toDateString() === targetDateStr) {
                const hourStr = `${apptDate.getHours().toString().padStart(2, "0")}:00`;
                if (!hourMap[hourStr]) hourMap[hourStr] = [];
                hourMap[hourStr].push(appt);
            }
        });
    }

    return (
        <div className="w-full rounded-3xl mt-6 border border-slate-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-heading leading-heading tracking-heading font-semibold text-graphite-text mb-3">
                        {selectedDate?.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </h2>
                    <div className="flex items-center gap-4 text-body leading-body tracking-body">
                        <p>Time</p>
                        <p>Today&#39;s timeline</p>
                    </div>
                </div>
            </div>

            <ScrollArea className="h-100 pr-4 relative">
                <div className="relative">
                    {indicatorTopPosition !== null && (
                        <div
                            className="absolute left-0 right-0 z-40 flex items-center pointer-events-none transition-all duration-500 ease-in-out"
                            style={{ top: `${indicatorTopPosition}px` }}
                        >
                            <span className="absolute text-caption leading-caption font-bold bg-amethyst-accent p-0.5 rounded-md transform shadow-sm tracking-tight">
                                {formattedIndicatorTime}
                            </span>
                            <div className="w-full border-t  border-deep-plum" />
                        </div>
                    )}

                    {hours.map((time) => {
                        const currentSlotAppointments = hourMap[time] || [];

                        return (
                            <div key={time} style={{ height: `${ROW_HEIGHT}px` }} className="flex group relative">
                                <div className="w-16 text-caption leading-caption font-medium text-deep-plum pt-1 select-none">
                                    {time}
                                </div>

                                <div className="flex-1 border-t border-slate-100 pt-2 relative">
                                    {currentSlotAppointments.length > 0 ? (
                                        <div className="flex flex-col gap-2 w-full">
                                            {currentSlotAppointments.map((appointment) => {
                                                const timeString = new Date(appointment.scheduledAt).toLocaleTimeString("en-US", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: false
                                                });

                                                return (
                                                    <div
                                                        key={appointment.id}
                                                        className={`p-3.5 rounded-2xl transition-all flex items-start gap-3 bg-platinum-border/30`}
                                                    >
                                                        <div className={`p-2.5 rounded-full shadow-xs flex items-center justify-center ${getIconBgColor(appointment.type)}`}>
                                                            {getIcon(appointment.type)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-semibold text-subheading leading-subheading tracking-subheading truncate mb-1">{appointment.title}</h4>
                                                            {appointment.location && (
                                                                <p className="text-caption leading-caption opacity-80 mt-0.5 truncate mb-1">{appointment.location}</p>
                                                            )}
                                                            {appointment.vetName && (
                                                                <p className="text-caption leading-caption opacity-60 mt-0.5 italic mb-3">Vet: {appointment.vetName}</p>
                                                            )}
                                                            <p className="text-caption leading-caption font-bold tracking-wide mt-1.5 opacity-60">
                                                                {timeString}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="h-full w-full opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 pt-2 px-1">
                                            <div className="w-full h-10 border border-dashed border-slate-200 rounded-xl cursor-pointer" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </ScrollArea>
        </div>
    );
};