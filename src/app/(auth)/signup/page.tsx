'use client'

import { AuthCard } from "@/app/(auth)/components/AuthCard";
import { OAuthGrid } from "@/app/(auth)/components/OAuthGrid";
import { AuthForm } from "@/app/(auth)/components/forms/AuthForm";
import { VetButton } from "@/app/(auth)/components/buttons/VetButton";
import React, {useActionState} from "react";
import {AuthFooter} from "@/app/(auth)/components/AuthFooter";
import {handleSignUp} from "@/actions/auth";

export default function Page() {
    const [state, action, isPending] = useActionState(handleSignUp, undefined);

    return (
        <AuthCard title="PawHub: Your intelligent companion" subtitle="Sign up for free account">
            <AuthForm mode="signup" state={state} action={action} isPending={isPending} />
            {/*<OAuthGrid signUpWithAction={signUpWith} />*/}
            <VetButton />
            <AuthFooter mode="signup" />
        </AuthCard>
    )
}