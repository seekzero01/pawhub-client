import type { LucideIcon } from "lucide-react"

export type SettingsTabId =
    | "account"
    | "general"
    | "security"
    | "billing"
    | "personalization"

export type SettingsTab = {
    id: SettingsTabId
    label: string
    icon: LucideIcon
}