'use client'

import React from "react";

interface SignUpFormProps {
    handleSubmit: (formData: FormData) => Promise<void>;
    fetchStatus: string;
}

export function SignUpForm({ handleSubmit, fetchStatus }: SignUpFormProps) {
    return (
        <form action={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full rounded-lg border px-4 py-3 outline-none"
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm mb-1">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-lg border px-4 py-3 outline-none"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={fetchStatus === 'fetching'}
                className="w-full rounded-lg bg-yellow-200 py-3 font-medium disabled:opacity-50"
            >
                Continue
            </button>
        </form>
    )
}