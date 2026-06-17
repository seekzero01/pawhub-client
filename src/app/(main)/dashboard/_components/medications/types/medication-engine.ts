import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { MedicationRow, TimelineItem } from "./types";

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export function generateDailyTimeline(medications: MedicationRow[]): {
    timeline: TimelineItem[];
    activeCount: number;
    nextUpItem: TimelineItem | null;
} {
    const timeline: TimelineItem[] = [];
    const now = dayjs();
    const todayStr = now.format("YYYY-MM-DD");

    // 1. Filter out active medications based on current calendar constraints
    const activeMeds = medications.filter((med) => {
        if (!med.is_active) return false;

        const start = dayjs(med.start_date).startOf("day");
        const end = med.end_date ? dayjs(med.end_date).endOf("day") : null;

        // Active if today falls within start_date and end_date window
        return now.isAfter(start) && (end === null || now.isBefore(end));
    });

    // 2. Flatten time slots array into individual trackable entries
    activeMeds.forEach((med) => {
        if (!med.times) return;

        med.times.forEach((slot) => {
            // Reconstruct target slot execution runtime configuration
            const targetDateTime = dayjs(`${todayStr} ${slot}`, "YYYY-MM-DD HH:mm");

            // Look up existing execution log entries matching this specific time slot for today
            const loggedEntry = med.logs?.find((log) => {
                const logDate = dayjs(log.administered_at);
                return log.time_slot === slot && logDate.format("YYYY-MM-DD") === todayStr;
            });

            const isGiven = !!loggedEntry;
            const givenAtTime = loggedEntry ? dayjs(loggedEntry.administered_at).format("HH:mm") : null;
            const isOverdue = !isGiven && now.isAfter(targetDateTime);

            timeline.push({
                medicationId: med.id,
                name: med.name,
                petName: med.pet?.name || "Pet",
                timeSlot: slot,
                isGiven,
                givenAtTime,
                isOverdue,
                targetDateTime,
            });
        });
    });

    // 3. Sort timeline chronologically
    timeline.sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));

    // 4. Find the next up incomplete item
    const nextUpItem = timeline.find((item) => !item.isGiven) || null;

    return {
        timeline,
        activeCount: activeMeds.length,
        nextUpItem,
    };
}