import {
    User,
    SlidersHorizontal,
    ShieldCheck,
    CreditCard,
    Sparkles,
} from "lucide-react"
import type { SettingsTab } from "../types/index"

export const SETTINGS_TABS: SettingsTab[] = [
    { id: "account", label: "Account", icon: User },
    { id: "general", label: "General", icon: SlidersHorizontal },
    { id: "security", label: "Security", icon: ShieldCheck },
    { id: "billing", label: "Usage & Billing", icon: CreditCard },
    { id: "personalization", label: "Personalization", icon: Sparkles },
]