import {ReactNode} from "react";

export function OAuthButton({
                         label,
                         icon,
                         onClick,
                     }: {
    label: string
    icon: ReactNode
    onClick: () => void
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-center gap-1.5 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition"
        >
            <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
            <span className="text-sm font-semibold text-gray-700">{label}</span>
        </button>
    )
}