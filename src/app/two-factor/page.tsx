"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {authClient} from "@/src/lib/auth-client";

// TODO: discuss issue about server actions and how to better replace states

export default function TwoFactorPage() {
    const router = useRouter();
    const [code, setCode] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleVerify = async () => {
        if (code.length !== 6) return;

        setIsPending(true);
        setError(null);

        const { error } = await authClient.twoFactor.verifyTotp({ code });

        if (error) {
            setError(error.message ?? "Invalid code. Please try again.");
            setIsPending(false);
            return;
        }

        router.push("/dashboard");
    };

    const handleBackupCode = () => {
        router.push("/two-factor/backup");
    };

    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-cloud-canvas px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm px-16 py-32 flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h1
                        className="text-display leading-display font-playfair-display font-normal tracking-tight"
                    >
                        Two-factor
                        <br />
                        authentication
                    </h1>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[18rem]">
                        Enter the 6-digit code from your authenticator app to secure your account.
                    </p>
                </div>

                <InputOTP
                    maxLength={6}
                    value={code}
                    onChange={setCode}
                    onComplete={handleVerify}
                >
                    <InputOTPGroup className="gap-2.5">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <InputOTPSlot
                                key={i}
                                index={i}
                                className="w-13 h-13 rounded-xl text-base border border-[#e2ddd8] data-[active=true]:border-[#1a1a1a] data-[active=true]:border-2 data-[active=true]:shadow-none transition-all duration-150 bg-[#f5f1ee]"
                            />
                        ))}
                    </InputOTPGroup>
                </InputOTP>

                {error && (
                    <p className="text-sm text-[#dd5b00]" role="alert">
                        {error}
                    </p>
                )}

                <Button
                    onClick={handleVerify}
                    disabled={code.length !== 6 || isPending}
                    className="my-12 w-full max-w-sm px-4 py-2 rounded-lg bg-amethyst-accent hover:bg-amethyst-accent/90 text-ink-text font-semibold text-base shadow-none border-0 transition-opacity duration-150 disabled:opacity-60"
                >
                    {isPending ? "Verifying…" : "Verify"}
                </Button>

                <button
                    onClick={handleBackupCode}
                    className="text-sm text-muted-foreground hover:text-deep-plum transition-colors duration-150 underline underline-offset-4"
                >
                    Lost your device? Use a backup code
                </button>
            </div>
        </main>
    );
}