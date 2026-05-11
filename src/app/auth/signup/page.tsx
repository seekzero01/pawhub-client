'use client'

import { AuthCard } from "@/src/app/auth/components/AuthCard";
import { OAuthGrid } from "@/src/app/auth/components/OAuthGrid";
import { AuthForm } from "@/src/app/auth/components/forms/AuthForm";
import { VerificationForm } from "@/src/app/auth/components/forms/VerificationForm";
import { VetButton } from "@/src/app/auth/components/buttons/VetButton";
import React from "react";
import {AuthFooter} from "@/src/app/auth/components/AuthFooter";
import {useSignUpFlow} from "@/src/app/auth/hooks/useSignUpFlow";

export default function Page() {
    const {
        signUp,
        errors,
        fetchStatus,
        isVerifying,
        isComplete,
        handleSubmit,
        handleVerify,
        signUpWith,
    } = useSignUpFlow()

    if (isComplete) return null;

    if (isVerifying) {
        return (
            <AuthCard title="Verify Identity" subtitle="We sent a code to your inbox">
                <VerificationForm
                    handleVerify={handleVerify}
                    onResendCode={() => signUp.verifications.sendEmailCode()}
                    fetchStatus={fetchStatus}
                    errors={errors}
                />
            </AuthCard>
        )
    }

    return (
        <AuthCard title="PawHub" subtitle="Sign up with your personal email">
            <AuthForm handleSubmit={handleSubmit} fetchStatus={fetchStatus} errors={errors} />
            <OAuthGrid signUpWithAction={signUpWith} />
            <VetButton />
            <div id="clerk-captcha" />
            <AuthFooter mode="signup" />
        </AuthCard>
    )
}