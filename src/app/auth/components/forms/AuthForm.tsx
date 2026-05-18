'use client'

import React from "react"
import { Mail, LockKeyholeOpen, UserIcon } from "lucide-react"

interface AuthFormProps {
    mode: "signup" | "login"
    state: any
    action: (payload: FormData) => void
    isPending: boolean
}

const inputClass = 'w-full rounded-xl border pl-10 pr-4 py-3 font-inter text-body leading-body tracking-body outline-none placeholder:text-silver-detail transition-colors bg-porcelain-surface'

export function AuthForm({ mode, state, action, isPending }: AuthFormProps) {
    return (
        <form action={action} className="flex flex-col gap-4">
            {mode === "signup" && (
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="font-inter text-body leading-body tracking-body text-graphite-text">
                        Full Name
                    </label>
                    <div className="relative">
                        <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-detail pointer-events-none" />
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Alexandro Vaginas"
                            className={inputClass}
                            autoComplete="username"
                        />
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-inter text-body leading-body tracking-body text-graphite-text">
                    Email address
                </label>
                <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-detail pointer-events-none" />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className={inputClass}
                        autoComplete="email"
                    />
                </div>
            </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="font-inter text-body leading-body tracking-body text-graphite-text">
                        Password
                    </label>
                    <div className="relative">
                        <LockKeyholeOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-detail pointer-events-none" />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Do not even think of qwerty1234"
                            className={inputClass}
                            autoComplete="current-password"
                        />
                    </div>
                </div>

            {state?.error && (
                <p className="text-sm font-inter" style={{ color: '#dd5b00' }} role="alert">
                    {state.error}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full rounded-xl bg-amethyst-accent hover:bg-amethyst-accent/80 py-3.5 font-inter text-body font-semibold text-ink-text disabled:opacity-50 transition-colors"
            >
                {isPending ? "Please wait..." : "Continue"}
            </button>
        </form>
    )
}