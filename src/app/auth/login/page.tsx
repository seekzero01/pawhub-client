'use client'

import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from "next/link";
import {AuthCard} from "@/src/app/auth/components/AuthCard";
import {OAuthGrid} from "@/src/app/auth/components/OAuthGrid";

export default function Page() {
    const { signIn, errors, fetchStatus } = useSignIn()
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const emailAddress = formData.get('email') as string
        const password = formData.get('password') as string

        const { error } = await signIn.password({
            emailAddress,
            password,
        })
        if (error) {
            console.error(JSON.stringify(error, null, 2))
            return
        }

        if (signIn.status === 'complete') {
            await signIn.finalize({
                navigate: ({ session, decorateUrl }) => {
                    // Handle session tasks
                    // See https://clerk.com/docs/guides/development/custom-flows/authentication/session-tasks
                    if (session?.currentTask) {
                        console.log(session?.currentTask)
                        return
                    }

                    // If no session tasks, navigate the signed-in user to the home page
                    const url = decorateUrl('/')
                    if (url.startsWith('http')) {
                        window.location.href = url
                    } else {
                        router.push(url)
                    }
                },
            })
        } else if (signIn.status === 'needs_second_factor') {
            // See https://clerk.com/docs/guides/development/custom-flows/authentication/multi-factor-authentication
        } else if (signIn.status === 'needs_client_trust') {
            // For other second factor strategies,
            // see https://clerk.com/docs/guides/development/custom-flows/authentication/client-trust
            const emailCodeFactor = signIn.supportedSecondFactors.find(
                (factor) => factor.strategy === 'email_code',
            )

            if (emailCodeFactor) {
                await signIn.mfa.sendEmailCode()
            }
        } else {
            // Check why the login is not complete
            console.error('Sign-in attempt not complete:', signIn)
        }
    }

    const handleVerify = async (formData: FormData) => {
        const code = formData.get('code') as string

        await signIn.mfa.verifyEmailCode({ code })

        if (signIn.status === 'complete') {
            await signIn.finalize({
                navigate: ({ session, decorateUrl }) => {
                    // Handle session tasks
                    // See https://clerk.com/docs/guides/development/custom-flows/authentication/session-tasks
                    if (session?.currentTask) {
                        console.log(session?.currentTask)
                        return
                    }

                    // If no session tasks, navigate the signed-in user to the home page
                    const url = decorateUrl('/')
                    if (url.startsWith('http')) {
                        window.location.href = url
                    } else {
                        router.push(url)
                    }
                },
            })
        } else {
            // Check why the login is not complete
            console.error('Sign-in attempt not complete:', signIn)
        }
    }

    if (signIn.status === 'needs_client_trust') {
        return (
            <>
                <h1>Verify your account</h1>
                <form action={handleVerify}>
                    <div>
                        <label htmlFor="code">Code</label>
                        <input
                            id="code"
                            name="code"
                            type="text"
                        />
                        {errors.fields.code && <p>{errors.fields.code.message}</p>}
                    </div>
                    <button type="submit" disabled={fetchStatus === 'fetching'}>
                        Verify
                    </button>
                </form>
                <button onClick={() => signIn.mfa.sendEmailCode()}>I need a new code</button>
                <button onClick={() => signIn.reset()}>Start over</button>
            </>
        )
    }

    const signInWith = async (strategy: 'oauth_google' | 'oauth_apple' | 'oauth_facebook') => {
        await signIn.sso({
            strategy,
            redirectCallbackUrl: '/sso-callback',
            redirectUrl: '/dashboard',
        })
    }

    return (
        <AuthCard title="Your AI pet companion" subtitle="Log in with your personal email">
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            className="w-full rounded-lg border px-4 py-3 outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm mb-1">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full rounded-lg border px-4 py-3 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={fetchStatus === 'fetching'}
                        className="w-full rounded-lg bg-yellow-200 py-3 font-medium "
                    >
                        Continue
                    </button>
                </form>

                <OAuthGrid />

                <div className="grid grid-cols-1 gap-3">
                    <button className="flex items-center justify-center gap-2 rounded-lg border p-3">
                        <VetIcon className="w-5 h-5" />
                        <span className="text-sm">Join as Vet</span>
                    </button>
                </div>

                <p className="text-center text-sm text-neutral-500">
                    New user? <Link href="/auth/signup" className="underline cursor-pointer">Sign up</Link>
                </p>

                <p className="text-xs text-neutral-400 text-center">
                    By continuing, you acknowledge that you understand and agree to the <span className="underline cursor-pointer text-neutral-500">Terms & Conditions</span> and <span className="underline cursor-pointer text-neutral-500">Privacy Policy</span>
                </p>

                {/*{errors && <p className="text-xs text-red-500">{JSON.stringify(errors, null, 2)}</p>}*/}

                <div id="clerk-captcha" />
        </AuthCard>
    )
}

function VetIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    )
}