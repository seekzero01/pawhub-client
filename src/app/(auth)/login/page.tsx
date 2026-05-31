'use client'

import React, {useActionState} from 'react'
import {AuthCard} from "@/app/(auth)/components/AuthCard";
import {OAuthGrid} from "@/app/(auth)/components/OAuthGrid";
import {AuthForm} from "@/app/(auth)/components/forms/AuthForm";
import {VetButton} from "@/app/(auth)/components/buttons/VetButton";
import {AuthFooter} from "@/app/(auth)/components/AuthFooter";
import {handleSignIn} from "@/actions/auth";

export default function Page() {
    const [state, action, isPending] = useActionState(handleSignIn, undefined);

    return (
        <AuthCard title="PawHub" subtitle="Log in to your account">
                <AuthForm mode="login" state={state} action={action} isPending={isPending} />
                {/*<OAuthGrid signUpWithAction={signInWith} />*/}
                <VetButton />
                <AuthFooter mode="login" />
        </AuthCard>
    )
}