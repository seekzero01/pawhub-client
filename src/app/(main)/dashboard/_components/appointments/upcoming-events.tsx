"use client"

import {useEffect, useState} from "react";
import {AppointmentCalendar} from "@/app/(main)/dashboard/_components/appointments/appointment-calendar";
import {TodayTimeline} from "@/app/(main)/dashboard/_components/appointments/today-timeline";

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

interface UpcomingEventsOverviewProps {
    events: DBAppointment[];
}

export const UpcomingEvents = ({ events }: UpcomingEventsOverviewProps) => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDate(new Date())
    }, [])

    return (
        <div className="max-w-350">
            <AppointmentCalendar date={date} setDate={setDate} />
            <div className="mt-6">
                <TodayTimeline appointments={events} selectedDate={date} />
            </div>
        </div>
    )
}