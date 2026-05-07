'use client'

import {useAuth, useClerk, useSignIn} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { OAuthStrategy } from '@clerk/shared/types'

export function useLogInFlow() {
    const { signIn, errors, fetchStatus } = useSignIn()
    const { isSignedIn } = useAuth()

    const { client } = useClerk()
    const router = useRouter()

    const lastStrategy = client?.lastAuthenticationStrategy

    const finalizeAuth = async () => {
        await signIn.finalize({
            navigate: ({ decorateUrl }) => {
                const url = decorateUrl('/')
                if (url.startsWith('http')) {
                    window.location.href = url
                } else {
                    router.push(url)
                }
            },
        })
    }

    const handleSubmit = async (formData: FormData) => {
        const emailAddress = formData.get('email') as string
        const { error } = await signIn.create({ identifier: emailAddress })
        if (error) {
            console.error(JSON.stringify(error, null, 2))
            return
        }
        await signIn.emailCode.sendCode()
    }

    const handleVerify = async (formData: FormData) => {
        const code = formData.get('code') as string

        await signIn.emailCode.verifyCode({ code })

        if (signIn.status === 'complete') await finalizeAuth()
        else {
            // Check why the sign-in is not complete
            console.error('Sign-in attempt not complete:', signIn)
        }
    }

    const signInWith = async (strategy: OAuthStrategy) => {
        await signIn.sso({
            strategy,
            redirectCallbackUrl: '/sso-callback',
            redirectUrl: '/dashboard',
        })
    }

    const isVerifying = signIn?.status === 'needs_first_factor'
    const isComplete = signIn?.status === 'complete' || isSignedIn

    return {
        signIn,
        errors,
        fetchStatus,
        lastStrategy,
        isVerifying,
        isComplete,
        handleSubmit,
        handleVerify,
        signInWith,
    }
}