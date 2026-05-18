'use client'

import React, {useActionState} from 'react'
import {AuthCard} from "@/src/app/auth/components/AuthCard";
import {OAuthGrid} from "@/src/app/auth/components/OAuthGrid";
import {AuthForm} from "@/src/app/auth/components/forms/AuthForm";
import {VetButton} from "@/src/app/auth/components/buttons/VetButton";
import {AuthFooter} from "@/src/app/auth/components/AuthFooter";
import {handleSignIn} from "@/src/actions/auth";

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