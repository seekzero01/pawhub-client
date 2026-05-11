"use client"

import {useAuth} from "@clerk/nextjs";
import {useEffect, useState} from "react";
import {apiFetch} from "@/src/lib/api";
import {SignOutButton} from "@/src/app/auth/components/buttons/SignOutButton";

type DashboardData = { message: string };

export default function DashboardPage() {
    const { getToken } = useAuth();
    const [data, setData] = useState<string>("");

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const data = await apiFetch<DashboardData>('/dashboard', getToken);
                console.log(data);
                setData(data.message)
            } catch (e) {
                setData("pizdec");
            }
        }

        dataFetch();
    }, [getToken]);

    return (
        <main className="flex min-h-screen items-center justify-center p-8">
            <section className="rounded-2xl border bg-card p-8 shadow-sm">
                <h1 className="mb-4 text-2xl font-semibold tracking-tight">Dashboard</h1>
                <p className="text-sm text-muted-foreground">{data}</p>
                <SignOutButton />
            </section>
        </main>
    );
}