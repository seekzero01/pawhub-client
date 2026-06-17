'use client'

import {ReactNode} from "react";
import Image from "next/image";

interface AuthCardProps {
    title: string
    subtitle: string
    children: ReactNode
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
    return (
        <div className="w-full h-full max-h-screen bg-cloud-canvas flex items-center justify-center">
                <div className="max-w-lg bg-porcelain-surface rounded-3xl shadow-md px-10 py-10 flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/logo/logo.svg" alt="Logo" width={50} height={50} />
                        </div>
                        <div className="font-inter text-[22px] font-bold leading-subheading tracking-subheading">
                            <p className="text-graphite-text mb-1">
                                {title}
                            </p>
                            <p className="text-deep-plum/75">
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        {children}
                    </div>
                </div>
        </div>
    )
}