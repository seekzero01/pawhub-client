'use client'

import {ReactNode} from "react";

interface AuthCardProps {
    title: string
    subtitle?: string
    children: ReactNode
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
    return (
        <div className="w-full min-h-screen bg-cloud-canvas flex items-center justify-center">
                <div className="max-w-md bg-porcelain-surface rounded-3xl shadow-md px-10 py-10 flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <div className="flex items-center gap-2">
                            <span className="font-playfair-display text-heading font-semibold text-amethyst-accent leading-none tracking-tight">
                                PawHub
                            </span>
                        </div>
                        {title !== 'PawHub' && (
                            <p className="font-inter text-subheading leading-subheading tracking-subheading text-graphite-text mt-1">
                                {title}
                            </p>
                        )}
                        {subtitle && (
                            <p className="font-inter text-body leading-body tracking-body text-graphite-text mt-0.5">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-5">
                        {children}
                    </div>
                </div>
        </div>
    )
}