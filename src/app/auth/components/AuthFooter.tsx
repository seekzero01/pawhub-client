'use client'

import React from 'react'
import Link from "next/link"

interface AuthFooterProps {
    mode: 'login' | 'signup'
}

export function AuthFooter({ mode }: AuthFooterProps) {
    const isLogin = mode === 'login'

    return (
        <div className="space-y-4">
            <p className="text-center text-sm text-neutral-500">
                {isLogin ? "New user? " : "Existing user? "}
                <Link
                    href={isLogin ? "/auth/signup" : "/auth/login"}
                    className="underline cursor-pointer"
                >
                    {isLogin ? "Sign up" : "Log in"}
                </Link>
            </p>

            <p className="text-xs text-neutral-400 text-center px-4">
                By continuing, you acknowledge that you understand and agree to the{" "}
                <span className="underline cursor-pointer text-neutral-500">Terms & Conditions</span>{" "}
                and{" "}
                <span className="underline cursor-pointer text-neutral-500">Privacy Policy</span>
            </p>
        </div>
    )
}