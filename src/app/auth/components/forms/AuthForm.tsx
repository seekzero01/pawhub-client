'use client'

import React from "react"
import { Mail, Hash } from "lucide-react"

interface AuthFormProps {
    handleSubmit: (formData: FormData) => Promise<void>
    fetchStatus: string
    errors: any
    isVerifying?: boolean
}

export function AuthForm({ handleSubmit, fetchStatus, errors, isVerifying = false }: AuthFormProps) {
    const emailError = errors?.fields?.emailAddress?.message
    const codeError = errors?.fields?.code?.message
    const globalError = errors?.global?.[0]?.longMessage ?? errors?.global?.[0]?.message

    return (
        <form action={handleSubmit} className="flex flex-col gap-4">
            {globalError && (
                <div
                    role="alert"
                    className="rounded-xl border border-[rgba(221,91,0,0.2)] bg-[#fff8f5] px-4 py-3 font-inter text-body leading-body text-[#dd5b00]"
                >
                    {globalError}
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
                        className={[
                            'w-full rounded-xl border pl-10 pr-4 py-3 font-inter text-body leading-body tracking-body outline-none placeholder:text-silver-detail transition-colors bg-porcelain-surface',
                            emailError
                                ? 'border-[rgba(221,91,0,0.5)] bg-[#fff8f5] focus:border-[#dd5b00]'
                                : 'border-platinum-border focus:border-graphite-text',
                        ].join(' ')}
                        required
                    />
                </div>
                {emailError && (
                    <p role="alert" className="font-inter text-caption leading-caption text-[#dd5b00]">
                        {emailError}
                    </p>
                )}
            </div>

            {isVerifying && (
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="code" className="font-inter text-body leading-body tracking-body text-graphite-text">
                        Verification code
                    </label>
                    <div className="relative">
                        <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-detail pointer-events-none" />
                        <input
                            id="code"
                            name="code"
                            type="text"
                            inputMode="numeric"
                            placeholder="······"
                            className={[
                                'w-full rounded-xl border pl-10 pr-4 py-3 font-inter text-body leading-body outline-none placeholder:text-silver-detail tracking-[0.3em] transition-colors bg-porcelain-surface',
                                codeError
                                    ? 'border-[rgba(221,91,0,0.5)] bg-[#fff8f5] focus:border-[#dd5b00]'
                                    : 'border-platinum-border focus:border-graphite-text',
                            ].join(' ')}
                        />
                    </div>
                    {codeError && (
                        <p role="alert" className="font-inter text-caption leading-caption text-[#dd5b00]">
                            {codeError}
                        </p>
                    )}
                </div>
            )}

            <button
                type="submit"
                disabled={fetchStatus === 'fetching'}
                className="w-full rounded-xl bg-amethyst-accent hover:bg-amethyst-accent/80 py-3.5 font-inter text-body font-semibold text-ink-text disabled:opacity-50 transition-colors"
            >
                {fetchStatus === 'fetching' ? 'Please wait…' : 'Continue →'}
            </button>
        </form>
    )
}