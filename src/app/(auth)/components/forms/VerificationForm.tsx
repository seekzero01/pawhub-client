'use client'

import {useEffect, useState} from "react";

interface VerificationFormProps {
    handleVerify: (formData: FormData) => Promise<void>;
    onResendCode: () => void;
    fetchStatus: string;
    errors: any;
}

export function VerificationForm({ handleVerify, onResendCode, fetchStatus, errors }: VerificationFormProps) {
    const [timeLeft, setTimeLeft] = useState(30);

    const codeError = errors?.fields?.code?.message
    const globalError = errors?.global?.[0]?.longMessage ?? errors?.global?.[0]?.message

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleResendClick = () => {
        onResendCode();
        setTimeLeft(30);
    };

    return (
        <div className="space-y-6">
            <form action={handleVerify} className="space-y-4">
                {globalError && (
                    <div
                        role="alert"
                        className="rounded-lg border border-[rgba(221,91,0,0.2)] bg-[#fff8f5] px-4 py-3 text-sm text-[#dd5b00]"
                    >
                        {globalError}
                    </div>
                )}

                <div>
                    <label htmlFor="code" className="block text-sm font-medium text-[#615d59] mb-1.5">
                        Verification code
                    </label>
                    <input
                        id="code"
                        name="code"
                        type="text"
                        className={[
                            'w-full rounded-lg border px-4 py-3 outline-none placeholder:text-sm text-sm placeholder:text-[#a39e98] tracking-widest transition-colors',
                            codeError
                                ? 'border-[rgba(221,91,0,0.5)] bg-[#fff8f5] focus:border-[#dd5b00]'
                                : 'border-[rgba(0,0,0,0.1)] focus:border-[#C4A800]',
                        ].join(' ')}
                        placeholder="Enter verification code"
                    />
                    {codeError && (
                        <p role="alert" className="mt-1.5 text-xs text-[#dd5b00]">
                            {codeError}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={fetchStatus === 'fetching'}
                    className="w-full rounded-lg bg-[#FFEE8C] py-3 text-sm font-semibold text-[rgba(0,0,0,0.95)] disabled:opacity-50 hover:bg-[#FFF3A3] active:scale-95 transition-all"
                >
                    {fetchStatus === 'fetching' ? 'Please wait…' : 'Verify'}
                </button>
            </form>

            <div className="flex items-center justify-center">
                {timeLeft > 0 ? (
                    <p className="text-sm text-[#a39e98]">
                        Resend code in <span className="font-medium tabular-nums">{timeLeft}s</span>
                    </p>
                ) : (
                    <button
                        type="button"
                        onClick={handleResendClick}
                        className="text-sm text-[#615d59] underline underline-offset-2 hover:text-[rgba(0,0,0,0.95)] transition-colors"
                    >
                        I need a new code
                    </button>
                )}
            </div>
        </div>
    )
}