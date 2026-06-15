import {cookies} from "next/headers";
import Link from "next/link";
import {ActionBar} from "@/app/(main)/dashboard/_components/header/ActionBar";
import {UpcomingEvents} from "@/app/(main)/dashboard/_components/appointments/upcoming-events";
import {Tasks} from "@/app/(main)/dashboard/_components/tasks/Tasks";
import {MedicationSchedule} from "@/app/(main)/dashboard/_components/medications/medication-schedule";
import {mockMedications} from "@/app/(main)/dashboard/_components/medications/types/types";
import {PawBotAssistantCard} from "@/app/(main)/dashboard/_components/ai/paw-bot-assistant-card";
import {MOCK_PAWBOT_INSIGHT} from "@/app/(main)/dashboard/_components/ai/types";
import {TimeGreeting} from "@/app/(main)/dashboard/_components/TimeGreeting";

async function getServerSession() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("better-auth.session_token");
    if (!sessionCookie) return null;
    try {
        const res = await fetch("http://localhost:3001/users/me", {
            headers: {
                Cookie: `better-auth.session_token=${sessionCookie.value}`,
            },
            cache: "no-store",
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

async function getDashboardData() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("better-auth.session_token");

    if (!sessionCookie) return null;
    try {
        const res = await fetch("http://localhost:3001/dashboard", {
            headers: {
                Cookie: `better-auth.session_token=${sessionCookie.value}`
            },
            cache: "no-store",
        })
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export interface Pet {
    id: string
    name: string
    avatar_url: string | null
}

// const MOCK_PETS: Pet[] = [
//     {
//         id: "pet_1",
//         name: "Bella",
//         avatar_url: "https://placedog.net/100/100?id=1",
//     },
//     {
//         id: "pet_2",
//         name: "Max",
//         avatar_url: "https://placedog.net/100/100?id=2",
//     },
//     {
//         id: "pet_3",
//         name: "Luna",
//         avatar_url: null,
//     },
// ]

export default async function DashboardPage() {
    const session = await getServerSession();
    const data = await getDashboardData();
    if (!session) {
        return (
            <div className="">
                <h1>Profile (SSR)</h1>
                <p>Not authenticated. This was checked on the server.</p>
                <Link href="/login">Sign in</Link>
            </div>
        );
    }

    return (
            <div className="w-full max-w-350 mx-auto">
                <div className="mb-6">
                    <ActionBar />
                </div>
                <div className="flex items-start justify-between w-full">
                    <div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-heading-lg font-bold leading-heading-lg tracking-heading-lg">
                                <TimeGreeting name={session.user.name}/>
                            </h1>
                            <p className="text-subheading leading-subheading tracking-subheading font-medium text-deep-plum/75">Here&#39;s what&#39;s happening with your pets today.</p>
                        </div>
                        <div className="flex flex-col mt-4 space-y-4">
                            <div className="flex items-start justify-between gap-8">
                                <PawBotAssistantCard insight={MOCK_PAWBOT_INSIGHT}/>
                                <MedicationSchedule data={mockMedications}/>
                            </div>
                            <Tasks />
                        </div>
                    </div>
                    <div>
                        <UpcomingEvents events={data.appointments} />
                    </div>
                </div>
            </div>
    );
}