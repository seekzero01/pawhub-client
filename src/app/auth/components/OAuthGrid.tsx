'use client'
import React from "react";
import {AppleIcon, FacebookIcon, GoogleIcon} from "@/src/app/auth/components/icons/Icons";

function OAuthButton({
                         label,
                         icon,
                         onClick,
                     }: {
    label: string
    icon: React.ReactNode
    onClick: () => void
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex flex-col items-center justify-center gap-1.5 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition"
        >
            <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
            <span className="text-sm font-semibold text-gray-700">{label}</span>
        </button>
    )
}

interface OAuthGridProps {
    signUpWithAction: (strategy: 'oauth_google' | 'oauth_apple' | 'oauth_facebook') => Promise<void>;
}

export function OAuthGrid({ signUpWithAction }: OAuthGridProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-neutral-400">
                <div className="h-px flex-1 bg-neutral-200" />
                or continue with
                <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="grid grid-cols-3 gap-3">
                <OAuthButton onClick={() => signUpWithAction('oauth_google')} label="Google" icon={<GoogleIcon />} />
                <OAuthButton onClick={() => signUpWithAction('oauth_apple')} label="Apple" icon={<AppleIcon />} />
                <OAuthButton onClick={() => signUpWithAction('oauth_facebook')} label="Facebook" icon={<FacebookIcon />} />
            </div>
        </div>
    )
}