'use client'

import React from 'react'
import Link from "next/link"

interface AuthFooterProps {
    mode: 'login' | 'signup'
}

export function AuthFooter({ mode }: AuthFooterProps) {
    const isLogin = mode === 'login'

    return (
        <div className="space-y-4 font-inter">
            <p className="text-center text-body leading-body tracking-body text-graphite-text">
                {isLogin ? "New user? " : "Existing user? "}
                <Link
                    href={isLogin ? "/auth/signup" : "/auth/login"}
                    className="text-graphite-text font-semibold underline underline-offset-2 cursor-pointer"
                >
                    {isLogin ? "Sign up" : "Log in"}
                </Link>
            </p>

            <p className="text-caption text-deep-plum text-center px-4">
                By continuing, you acknowledge that you understand and agree to the{" "}
                <Link className="underline cursor-pointer font-semibold" href="/terms">Terms & Conditions</Link>{" "}
                and{" "}
                <Link className="underline cursor-pointer font-semibold" href="/privacy">Privacy Policy</Link>
            </p>
        </div>
    )
}