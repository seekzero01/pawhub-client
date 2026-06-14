"use client"

import {useEffect, useState} from "react";
import {AppointmentCalendar} from "@/app/(main)/dashboard/_components/appointments/AppointmentCalendar";

interface UpcomingEventsOverviewProps {
    events: any[]
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
                <time className="text-subheading">{date?.toLocaleString("default", { month: "long" })}, {date?.getDate()}</time>
            {/*    List of appointments / events */}
            </div>
        </div>
    )
}