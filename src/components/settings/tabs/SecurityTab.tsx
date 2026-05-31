"use client"

import { Button } from "@/components/ui/button"
import {Separator} from "@/components/ui/separator";

const MOCK_ACTIVITY = [
    {
        timestamp: "Oct 24, 2024, 10:45 AM",
        ip: "192.168.1.1",
        device: "Chrome on MacOS",
        location: "San Francisco, US",
    },
    {
        timestamp: "Oct 23, 2024, 08:21 PM",
        ip: "184.102.33.15",
        device: "Safari on iPhone",
        location: "Los Angeles, US",
    },
    {
        timestamp: "Oct 21, 2024, 02:15 PM",
        ip: "72.229.28.185",
        device: "Firefox on Windows",
        location: "New York, US",
    },
    {
        timestamp: "Oct 19, 2024, 11:32 AM",
        ip: "192.168.1.1",
        device: "Chrome on MacOS",
        location: "San Francisco, US",
    },
    {
        timestamp: "Oct 15, 2024, 09:12 AM",
        ip: "172.56.21.109",
        device: "Mobile App on Android",
        location: "Chicago, US",
    },
]

export default function SecurityTab() {
    return (
        <div className="px-8 py-6">
            <div className="-mx-4 no-scrollbar max-h-[80vh] overflow-y-auto px-4 space-y-10">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
                        Security
                    </h2>

                    <Separator className="h-px border-[0.5px] border-platinum-border"/>
                </div>

                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
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

                {/* Email & Access */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                        Email & Access
                    </h3>

                    <div className="flex items-center justify-between py-1">
                        <div className="space-y-0.5">
                            <span className="text-sm font-medium text-neutral-900 block">
                                Email Address
                            </span>
                            <span className="text-xs text-neutral-500 block">
                                eleanor.v@example.com
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Change
                        </Button>
                    </div>

                    <div className="space-y-2 py-1">
                        <span className="text-sm font-medium text-neutral-900 block">
                            Connected Providers
                        </span>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-base font-black tracking-tighter text-neutral-900 uppercase">
                                    Google
                                </span>
                                <span className="text-sm text-neutral-500">Google</span>
                            </div>
                            <Button
                                variant="ghost"
                                className="h-10 px-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                                Disconnect
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Device Management */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-200">
                        Device Management
                    </h3>

                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Trusted Devices
                        </span>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Manage
                        </Button>
                    </div>

                    <div className="flex items-center justify-between py-1">
                        <span className="text-sm font-medium text-neutral-900">
                            Login Activity Log
                        </span>
                        <Button
                            variant="link"
                            className="h-auto p-0 text-sm font-medium text-purple-700 hover:text-purple-900 no-underline hover:underline"
                        >
                            View all
                        </Button>
                    </div>

                    {/* Activity Table */}
                    <div className="w-full rounded-xl border border-neutral-200 overflow-hidden">
                        <div className="grid grid-cols-4 bg-neutral-100 px-4 py-2.5">
                            {["Timestamp", "IP Address", "Device", "Location"].map((col) => (
                                <span
                                    key={col}
                                    className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase"
                                >
                                    {col}
                                </span>
                            ))}
                        </div>
                        {MOCK_ACTIVITY.map((row, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-4 px-4 py-3 border-t border-neutral-100 hover:bg-neutral-50 transition-colors"
                            >
                                <span className="text-sm text-neutral-700">{row.timestamp}</span>
                                <span className="text-sm text-neutral-700 font-mono">{row.ip}</span>
                                <span className="text-sm text-neutral-700">{row.device}</span>
                                <span className="text-sm text-neutral-700">{row.location}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}