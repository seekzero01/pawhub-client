'use client'

import { AuthCard } from "@/src/app/auth/components/AuthCard";
import { OAuthGrid } from "@/src/app/auth/components/OAuthGrid";
import { AuthForm } from "@/src/app/auth/components/forms/AuthForm";
import { VerificationForm } from "@/src/app/auth/components/forms/VerificationForm";
import { VetButton } from "@/src/app/auth/components/buttons/VetButton";
import React, {useActionState} from "react";
import {AuthFooter} from "@/src/app/auth/components/AuthFooter";
import {handleSignUp} from "@/src/actions/auth";

export default function Page() {
    const [state, action, isPending] = useActionState(handleSignUp, undefined);

    return (
        <AuthCard title="PawHub" subtitle="Sign up with your personal email">
            <AuthForm mode="signup" state={state} action={action} isPending={isPending} />
            {/*<OAuthGrid signUpWithAction={signUpWith} />*/}
            <VetButton />
            <AuthFooter mode="signup" />
        </AuthCard>
    )
}