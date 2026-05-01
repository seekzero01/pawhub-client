'use client'

import { useAuth, useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { AuthCard } from "@/src/app/auth/components/AuthCard";
import { OAuthGrid } from "@/src/app/auth/components/OAuthGrid";
import { SignUpForm } from "@/src/app/auth/components/forms/SignUpForm";
import { VerificationForm } from "@/src/app/auth/components/forms/VerificationForm";
import { VetButton } from "@/src/app/auth/components/VetButton";
import Link from "next/link";
import React from "react";

export default function Page() {
    const { signUp, errors, fetchStatus } = useSignUp()
    const { isSignedIn } = useAuth()
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const emailAddress = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await signUp.password({
            emailAddress,
            password,
        })

        if (error) {
            console.error(JSON.stringify(error, null, 2))
            return
        }

        await signUp.verifications.sendEmailCode()
    }

    const handleVerify = async (formData: FormData) => {
        const code = formData.get('code') as string

        await signUp.verifications.verifyEmailCode({
            code,
        })

        if (signUp.status === 'complete') {
            await signUp.finalize({
                navigate: ({ session, decorateUrl }) => {
                    if (session?.currentTask) {
                        console.log(session?.currentTask)
                        return
                    }
                    const url = decorateUrl('/')
                    if (url.startsWith('http')) {
                        window.location.href = url
                    } else {
                        router.push(url)
                    }
                },
            })
        } else {
            console.error('Sign-up attempt not complete:', signUp)
        }
    }

    const signUpWith = async (strategy: 'oauth_google' | 'oauth_apple' | 'oauth_facebook') => {
        await signUp.sso({
            strategy,
            redirectCallbackUrl: '/sso-callback',
            redirectUrl: '/dashboard',
        })
    }

    if (signUp.status === 'complete' || isSignedIn) {
        return null
    }

    if (
        signUp.status === 'missing_requirements' &&
        signUp.unverifiedFields.includes('email_address') &&
        signUp.missingFields.length === 0
    ) {
        return (
            <AuthCard title="Verify Identity" subtitle="We sent a code to your email">
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
        <AuthCard title="PawHub: your AI pet companion" subtitle="Sign up with your personal email">
            <SignUpForm handleSubmit={handleSubmit} fetchStatus={fetchStatus} />

            <OAuthGrid signUpWithAction={signUpWith} />

            <VetButton />

            <p className="text-center text-sm text-neutral-500">
                Existing user? <Link href="/auth/login" className="underline cursor-pointer">Log in</Link>
            </p>

            <p className="text-xs text-neutral-400 text-center">
                By continuing, you acknowledge that you understand and agree to the <span className="underline cursor-pointer text-neutral-500">Terms & Conditions</span> and <span className="underline cursor-pointer text-neutral-500">Privacy Policy</span>
            </p>

            <div id="clerk-captcha" />
        </AuthCard>
    )
}