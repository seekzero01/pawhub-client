import {authClient} from "@/src/lib/auth-client";
import {redirect} from "next/navigation";

export default async function Page() {
    redirect("/dashboard")
}
