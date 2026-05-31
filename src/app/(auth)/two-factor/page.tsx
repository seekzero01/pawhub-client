"use client";

import {useActionState, useState} from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {handleVerifyTotp} from "@/actions/auth";
import Link from "next/link";

export default function TwoFactorPage() {
    const [code, setCode] = useState("");
    const [state, action, isPending] = useActionState(handleVerifyTotp, undefined);

    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-cloud-canvas px-4">
            <div className="w-full max-w-md bg-porcelain-surface rounded-2xl-2 shadow-sm px-16 py-32 flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h1
                        className="text-heading-lg leading-heading-lg font-playfair-display font-normal tracking-tight"
                    >
                        Two-factor authentication
                    </h1>
                    <p className="text-sm leading-relaxed max-w-[18rem]">
                        Enter the 6-digit code from your authenticator app to secure your account.
                    </p>
                </div>

                <form action={action} className="flex flex-col items-center gap-3 text-center">
                    <InputOTP
                        maxLength={6}
                        value={code}
                        onChange={setCode}
                        name="code"
                    >
                        <InputOTPGroup className="gap-2.5">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <InputOTPSlot
                                    key={i}
                                    index={i}
                                    className="w-10 h-10 rounded-xl text-base border border-deep-plum data-[active=true]:border-deep-plum data-[active=true]:border-[0.5px] data-[active=true]:shadow-none transition-all duration-150 bg-[#f5f1ee]"
                                />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                </form>

                {state?.error && (
                    <p className="text-sm text-[#dd5b00]" role="alert">
                        {state?.error}
                    </p>
                )}

                <Button
                    type="submit"
                    disabled={code.length !== 6 || isPending}
                    className="w-full max-w-xs rounded-xl bg-amethyst-accent hover:bg-amethyst-accent/80 py-5 font-inter text-body font-semibold text-ink-text disabled:opacity-50 transition-colors"
                >
                    {isPending ? "Verifying…" : "Verify"}
                </Button>

                <Link
                    href="/two-factor/backup"
                    className="text-sm text-muted-foreground hover:text-deep-plum transition-colors duration-150 underline underline-offset-4"
                >
                    Lost your device? Use a backup code
                </Link>
            </div>
        </main>
    );
}