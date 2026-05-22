"use client";

import { useActionState, useState } from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {handleVerifyBackupCode} from "@/src/actions/auth";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

const slotClassName =
    "w-10 h-10 rounded-xl text-base border border-deep-plum data-[active=true]:border-deep-plum data-[active=true]:border-[0.5px] data-[active=true]:shadow-none transition-all duration-150 bg-[#f5f1ee]";

export default function BackupCodePage() {
    const [code, setCode] = useState("");
    const [state, action, isPending] = useActionState(handleVerifyBackupCode, undefined);

    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-cloud-canvas px-4">
            <div className="w-full max-w-xl bg-porcelain-surface rounded-2xl-2 shadow-sm px-16 py-32 flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h1
                        className="font-playfair-display font-normal text-heading-lg leading-heading-lg tracking-heading-lg text-ink-text"
                    >
                        Use a backup code
                    </h1>
                    <p className="text-sm leading-relaxed max-w-xs mb-2">
                        Enter one of your 8-digit recovery codes to access your account.
                    </p>
                </div>

                <form action={action} className="flex flex-col items-center gap-3 text-center">
                    <InputOTP maxLength={10} value={code} onChange={setCode} name="code">
                        <InputOTPGroup className="gap-2.5">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <InputOTPSlot key={i} index={i} className={slotClassName} />
                            ))}
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="gap-2.5">
                            {[5, 6, 7, 8, 9].map((i) => (
                                <InputOTPSlot key={i} index={i} className={slotClassName} />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>

                    {state?.error && (
                        <p className="text-sm text-[#dd5b00]" role="alert">
                            {state.error}
                        </p>
                    )}

                    <Button
                        type="submit"
                        disabled={code.length !== 10 || isPending}
                        className="mt-2.5 mb-3 w-full max-w-xs rounded-xl bg-amethyst-accent hover:bg-amethyst-accent/80 py-5 font-inter text-body font-semibold text-ink-text disabled:opacity-50 transition-colors"
                    >
                        {isPending ? "Verifying…" : "Verify and Log In"}
                    </Button>
                </form>

                <div className="flex flex-col items-center gap-2">
                    <Link
                        href="mailto:support@pawhub.app"
                        className="text-body text-deep-plum underline underline-offset-4 hover:text-ink-text transition-colors duration-150"
                    >
                        Need help? Contact support
                    </Link>
                    <Link
                        href="/login"
                        className="flex items-center gap-1.5 text-body text-graphite-text hover:text-ink-text transition-colors duration-150"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to login</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}