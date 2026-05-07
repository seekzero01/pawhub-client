'use client'

import { useAuth, useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { OAuthStrategy } from '@clerk/shared/types'

export function useSignUpFlow() {
    const { signUp, errors, fetchStatus } = useSignUp()
    const { isSignedIn } = useAuth()
    const router = useRouter()

    const finalizeAuth = async () => {
        await signUp.finalize({
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
        const { error } = await signUp.create({ emailAddress, legalAccepted: true })
        if (error) {
            console.error(JSON.stringify(error, null, 2))
            return
        }
        await signUp.verifications.sendEmailCode()
    }

    const handleVerify = async (formData: FormData) => {
        const code = formData.get('code') as string

        await signUp.verifications.verifyEmailCode({ code })

        if (signUp.status === 'complete') {
            await finalizeAuth()
        } else {
            console.error('Sign-up attempt not complete:', signUp)
        }
    }

    const signUpWith = async (strategy: OAuthStrategy) => {
        await signUp.sso({
            strategy,
            redirectCallbackUrl: '/sso-callback',
            redirectUrl: '/dashboard',
        })
    }

    const isVerifying =
        signUp?.status === 'missing_requirements' &&
        signUp?.unverifiedFields.includes('email_address') &&
        signUp?.missingFields.length === 0

    const isComplete = signUp?.status === 'complete' || isSignedIn

    return {
        signUp,
        errors,
        fetchStatus,
        isVerifying,
        isComplete,
        handleSubmit,
        handleVerify,
        signUpWith,
    }
}