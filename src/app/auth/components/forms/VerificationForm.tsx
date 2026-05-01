'use client'

import React from "react";

interface VerificationFormProps {
    handleVerify: (formData: FormData) => Promise<void>;
    onResendCode: () => void;
    fetchStatus: string;
    errors: any;
}

export function VerificationForm({ handleVerify, onResendCode, fetchStatus, errors }: VerificationFormProps) {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Verify your account</h1>
            <form action={handleVerify} className="space-y-4">
                <div>
                    <label htmlFor="code" className="block text-sm mb-1">Code</label>
                    <input
                        id="code"
                        name="code"
                        type="text"
                        className="w-full rounded-lg border px-4 py-3 outline-none"
                        placeholder="Enter verification code"
                    />
                    {errors.fields.code && <p className="text-red-500 text-xs mt-1">{errors.fields.code.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={fetchStatus === 'fetching'}
                    className="w-full rounded-lg bg-yellow-200 py-3 font-medium disabled:opacity-50"
                >
                    Verify
                </button>
            </form>
            <button
                onClick={onResendCode}
                className="w-full text-sm text-neutral-500 underline"
            >
                I need a new code
            </button>
        </div>
    )
}