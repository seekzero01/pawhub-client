"use client"

import { useRouter } from "next/navigation";
import {signOut, useSession} from "@/src/lib/auth-client";

export function UserButton() {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    if (isPending) return <span>Loading…</span>;
    if (!session?.user) {
        return (
            <div>
                <a href="/auth/login">Sign In</a>{" "}
                <a href="/auth/signup">Sign Up</a>
            </div>
        );
    }
    return (
        <div>
            <span>{session.user.name}</span>
            <button onClick={async () => {
                await signOut();
                router.push("/");
                router.refresh();
            }}>
                Sign Out
            </button>
        </div>
    );
}