'use client'

import React from 'react'
import {AuthCard} from "@/src/app/auth/components/AuthCard";
import {OAuthGrid} from "@/src/app/auth/components/OAuthGrid";
import {AuthForm} from "@/src/app/auth/components/forms/AuthForm";
import {VetButton} from "@/src/app/auth/components/buttons/VetButton";
import {VerificationForm} from "@/src/app/auth/components/forms/VerificationForm";
import {AuthFooter} from "@/src/app/auth/components/AuthFooter";
import {useLogInFlow} from "@/src/app/auth/hooks/useLogInFlow";

export default function Page() {
    const {
        signIn,
        errors,
        fetchStatus,
        lastStrategy,
        isVerifying,
        isComplete,
        handleSubmit,
        handleVerify,
        signInWith,
    } = useLogInFlow()

    if (isComplete) return null;

    if (isVerifying) {
        return (
            <AuthCard title="Verify Identity" subtitle="We sent a code to your inbox">
                <VerificationForm
                    handleVerify={handleVerify}
                    onResendCode={() => signIn.emailCode.sendCode()}
                    fetchStatus={fetchStatus}
                    errors={errors}
                >
                </VerificationForm>
            </AuthCard>
        )
    }

    return (
        <AuthCard title="Your AI pet companion" subtitle="Log in with your personal email">
                <AuthForm handleSubmit={handleSubmit} fetchStatus={fetchStatus} errors={errors} />
                <OAuthGrid signUpWithAction={signInWith} lastStrategy={lastStrategy} />
                <VetButton />
                <AuthFooter mode="login" />
        </AuthCard>
    )
}