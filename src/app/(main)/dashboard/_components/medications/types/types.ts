export interface MedicationRow {
    id: string;
    pet_id: string;
    name: string;
    form: string | null;
    dosage: string | null;
    frequency: string | null;
    times: string[] | null; // HH:MM format strings
    start_date: string;
    end_date: string | null;
    is_active: boolean;
    notes: string | null;
    created_at: string;
    pet?: { name: string };
    logs?: Array<{ administered_at: string; time_slot: string }>;
}

export interface TimelineItem {
    medicationId: string;
    name: string;
    petName: string;
    timeSlot: string;
    isGiven: boolean;
    givenAtTime: string | null;
    isOverdue: boolean;
    targetDateTime: import("dayjs").Dayjs;
}

export const mockMedications: MedicationRow[] = [
    {
        id: "med-01",
        pet_id: "pet-max",
        name: "Amoxicillin",
        form: "Tablet",
        dosage: "250mg",
        frequency: "twice-daily",
        times: ["08:00", "20:00"],
        start_date: "2026-06-01",
        end_date: "2026-06-15",
        is_active: true,
        notes: "Give with food",
        created_at: "2026-06-01T00:00:00Z",
        pet: { name: "Max" },
        logs: [
            { administered_at: "2026-06-09T08:05:00Z", time_slot: "08:00" }
        ]
    },
    {
        id: "med-02",
        pet_id: "pet-max",
        name: "Omega-3 Supplement",
        form: "Liquid",
        dosage: "5ml",
        frequency: "daily",
        times: ["08:00"],
        start_date: "2026-01-01",
        end_date: null,
        is_active: true,
        notes: "Mix into morning meal",
        created_at: "2026-01-01T00:00:00Z",
        pet: { name: "Max" },
        logs: [
            { administered_at: "2026-06-09T08:00:00Z", time_slot: "08:00" }
        ]
    },
    {
        id: "med-03",
        pet_id: "pet-max",
        name: "Eye Drops",
        form: "Drops",
        dosage: "1 drop",
        frequency: "daily",
        times: ["22:00"],
        start_date: "2026-06-05",
        end_date: "2026-06-12",
        is_active: true,
        notes: "Left eye only",
        created_at: "2026-06-05T00:00:00Z",
        pet: { name: "Max" },
        logs: []
    }
];