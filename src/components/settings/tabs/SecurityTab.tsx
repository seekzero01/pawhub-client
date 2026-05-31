"use client"

import { Button } from "@/components/ui/button"
import {Separator} from "@/components/ui/separator";

export default function SecurityTab() {
    return (
        <div className="p-6 space-y-10">
            <div className="flex flex-col justify-center">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
                        Security
                    </h2>

                    <Separator className="h-px border-[0.5px] border-platinum-border"/>
                </div>

                <div className="space-y-3 mb-10">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-100">
                        Login & Recovery
                    </h3>

                    <div className="flex items-center justify-between py-1">
                        <div className="space-y-0.5">
                            <span className="text-sm font-medium text-neutral-900 block">
                                Two-Factor Authentication (TOTP)
                            </span>
                            <span className="text-xs text-sky-600 font-medium block">
                                Enabled
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Configure
                        </Button>
                    </div>

                    {/* Backup Codes */}
                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Backup Codes
                        </span>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            View codes
                        </Button>
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Password
                        </span>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Change password
                        </Button>
                    </div>

                    {/* Passkey / WebAuthn */}
                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Passkey / WebAuthn
                        </span>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Register new
                        </Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-100">
                        Login Activity
                    </h3>

                    {/* Login Activity Log Row */}
                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Login Activity Log
                        </span>
                        <Button
                            variant="link"
                            className="h-auto p-0 text-sm font-medium text-purple-700 hover:text-purple-900 dark:text-purple-400 no-underline hover:underline"
                        >
                            View all
                        </Button>
                    </div>

                    {/* Table Header Sneak Peek from Image */}
                    <div className="w-full rounded-t-xl bg-neutral-100/70 p-3 flex text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                        <div className="w-1/3">Timestamp</div>
                        <div className="w-1/3">IP Address</div>
                        <div className="w-1/3">Device</div>
                    </div>
                    {/* Activity log records can be mapped here later */}
                </div>
            </div>
        </div>
    )
}