import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default async function DashboardPage() {
    const { isAuthenticated } = await auth()

    if (!isAuthenticated) {
        redirect('/auth/login')
    }

    return (
        <div>Dashboard</div>
    )
}