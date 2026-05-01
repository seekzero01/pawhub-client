'use client'

import React, {ReactNode} from "react";

function PawIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM5.5 7C4.1 7 3 8.1 3 9.5S4.1 12 5.5 12 8 10.9 8 9.5 6.9 7 5.5 7zm13 0C17.1 7 16 8.1 16 9.5S17.1 12 18.5 12 21 10.9 21 9.5 19.9 7 18.5 7zM12 13c-4.4 0-8 2.7-8 5.5V20h16v-1.5c0-2.8-3.6-5.5-8-5.5z" />
        </svg>
    )
}

export function AuthCard({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-neutral-50">
            <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-xl bg-yellow-200 flex items-center justify-center mb-4">
                            <PawIcon className="w-6 h-6 text-yellow-700" />
                        </div>
                        <h1 className="text-2xl font-semibold text-center">
                            {title}
                        </h1>
                        <p className="text-xl text-neutral-500 font-semibold">
                            {subtitle}
                        </p>
                    </div>
                {children}
            </div>
        </div>
    )
}