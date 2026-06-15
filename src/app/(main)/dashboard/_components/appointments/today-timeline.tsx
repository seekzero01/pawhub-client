"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Stethoscope, Syringe, Users, FileText } from "lucide-react"

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

const getVariantStyles = (type: string | null) => {
    switch (type?.toLowerCase()) {
        case "emergency":
            return "bg-pink-50/60 hover:bg-pink-50 text-pink-950 border-l-4 border-pink-400";
        case "diagnostic":
        case "checkup":
            return "bg-blue-50/60 hover:bg-blue-50 text-blue-950 border-l-4 border-blue-400";
        case "sync":
        case "operation":
            return "bg-amber-50/60 hover:bg-amber-50 text-amber-950 border-l-4 border-amber-400";
        default:
            return "bg-slate-50/60 hover:bg-slate-50 text-slate-950 border-l-4 border-slate-300";
    }
};

const getIcon = (type: string | null) => {
    switch (type?.toLowerCase()) {
        case "emergency":
            return <Stethoscope className="size-5 text-pink-500" />;
        case "diagnostic":
            return <Syringe className="size-5 text-blue-500" />;
        case "sync":
            return <Users className="size-5 text-amber-600" />;
        default:
            return <FileText className="size-5 text-slate-500" />;
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

    const [currentTime, setCurrentTime] = React.useState<Date | null>(null);

    React.useEffect(() => {
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

            <ScrollArea className="h-130 pr-4 relative">
                <div className="relative">
                    {indicatorTopPosition !== null && (
                        <div
                            className="absolute left-0 right-0 z-40 flex items-center pointer-events-none transition-all duration-500 ease-in-out"
                            style={{ top: `${indicatorTopPosition}px` }}
                        >
                            <span className="absolute left-1.5 text-[10px] font-bold bg-purple-600 text-white px-1.5 py-0.5 rounded-md transform -translate-y-1/2 shadow-sm tracking-tight">
                                {formattedIndicatorTime}
                            </span>
                            <div className="w-full ml-16 border-t-2 border-dashed border-purple-500/80" />
                        </div>
                    )}

                    {hours.map((time) => {
                        const currentSlotAppointments = hourMap[time] || [];

                        return (
                            <div key={time} style={{ height: `${ROW_HEIGHT}px` }} className="flex group relative">
                                <div className="w-16 text-xs font-medium text-slate-400 pt-1 select-none">
                                    {time}
                                </div>

                                <div className="flex-1 border-t border-slate-100 pt-2 relative">
                                    {currentSlotAppointments.length > 0 ? (
                                        <div className="flex flex-col gap-2 w-full">
                                            {currentSlotAppointments.map((appt) => {
                                                const timeString = new Date(appt.scheduledAt).toLocaleTimeString("en-US", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: false
                                                });

                                                return (
                                                    <div
                                                        key={appt.id}
                                                        className={`p-3.5 rounded-2xl transition-all flex items-start gap-3.5 ${getVariantStyles(appt.type)}`}
                                                    >
                                                        <div className="p-2 rounded-xl bg-white shadow-xs flex items-center justify-center">
                                                            {getIcon(appt.type)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-semibold text-sm leading-tight truncate">{appt.title}</h4>
                                                            {appt.location && (
                                                                <p className="text-xs opacity-80 mt-0.5 truncate">{appt.location}</p>
                                                            )}
                                                            {appt.vetName && (
                                                                <p className="text-[11px] opacity-60 mt-0.5 italic">Vet: {appt.vetName}</p>
                                                            )}
                                                            <p className="text-[10px] font-bold tracking-wide mt-1.5 opacity-60">
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