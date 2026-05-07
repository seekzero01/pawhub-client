'use client'

import React from "react";

interface AuthFormProps {
    handleSubmit: (formData: FormData) => Promise<void>;
    fetchStatus: string;
    errors: any;
}

// TODO: Add conditional rendering. If status is verifying, then show additional field for ver. code (reference Notion)

export function AuthForm({handleSubmit, fetchStatus, errors}: AuthFormProps) {
    const emailError = errors?.fields?.emailAddress?.message
    const globalError = errors?.global?.[0]?.longMessage ?? errors?.global?.[0]?.message

    return (
        <form action={handleSubmit} className="space-y-4">
            {globalError && (
                <div
                    role="alert"
                    className="rounded-lg border border-[rgba(221,91,0,0.2)] bg-[#fff8f5] px-4 py-3 text-sm text-[#dd5b00]"
                >
                    {globalError}
                </div>
            )}

            <div>
                <label htmlFor="email" className="text-neutral-500 block text-sm mb-1.5">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className={[
                        'w-full rounded-lg border px-4 py-2 outline-none placeholder:text-[15px] text-[15px] placeholder:text-[#a39e98] transition-colors',
                        emailError
                            ? 'border-[rgba(221,91,0,0.5)] bg-[#fff8f5] focus:border-[#dd5b00]'
                            : 'border-[rgba(0,0,0,0.1)] focus:border-[#C4A800]',
                    ].join(' ')}
                    required
                />
                {emailError && (
                    <p role="alert" className="mt-1.5 text-xs text-[#dd5b00]">
                        {emailError}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={fetchStatus === 'fetching'}
                className="w-full rounded-lg bg-yellow-200 py-3 text-sm font-medium disabled:opacity-50"
            >
                {fetchStatus === 'fetching' ? 'Please wait…' : 'Continue'}
            </button>
        </form>
    )
}