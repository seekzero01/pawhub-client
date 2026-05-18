import {cookies} from "next/headers";
import {UserButton} from "@/src/UserButton";

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

export default async function DashboardPage() {
    const session = await getServerSession();
    if (!session) {
        return (
            <>
                <h1>Profile (SSR)</h1>
                <p>Not authenticated. This was checked on the server.</p>
                <a href="/auth/login">Sign in</a>
            </>
        );
    }

    return (
        <>
            <h1>Dashboard (SSR)</h1>
            <p>This data was fetched on the <strong>server</strong> by forwarding your
                cookie to the NestJS backend. No client-side JS needed for this page.</p>
            <pre>{JSON.stringify(session.user.name, null, 2)}</pre>
            <UserButton />
        </>
    );
}