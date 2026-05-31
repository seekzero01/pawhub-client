"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {Separator} from "@/components/ui/separator";

interface AccountUser {
    name: string
    email: string
    avatarUrl?: string
}

interface AccountTabProps {
    user: AccountUser
}

export default function AccountTab({ user }: AccountTabProps) {
    const getInitials = (name: string) => {
        if (!name) return "U"
        return name
            .split(" ")
            .map((chunk) => chunk[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    return (
            <div className="p-6 space-y-10">
                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
                            Account
                        </h2>

                        <Separator className="h-px border-[0.5px] border-platinum-border"/>
                    </div>

                    <div className="flex items-center gap-5">
                        <Avatar className="size-18 border border-neutral-200">
                            {user.avatarUrl && (
                                <AvatarImage
                                    src={user.avatarUrl}
                                    alt={user.name}
                                />
                            )}
                            <AvatarFallback className="bg-neutral-100 text-neutral-600 font-medium">
                                {getInitials(user.name)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex-1 max-w-md space-y-1.5">
                            <label
                                htmlFor="full-name"
                                className="text-xs font-medium text-neutral-500"
                            >
                                Full name
                            </label>
                            <Input
                                id="full-name"
                                type="text"
                                aria-label={user.name}
                                defaultValue={user.name}
                                className="h-11 rounded-lg border-neutral-300 bg-white text-base text-neutral-900 px-3 shadow-none focus-visible:ring-1 focus-visible:ring-neutral-400 focus-visible:border-neutral-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Personal Details Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-100">
                        Personal details
                    </h3>
                    <div className="space-y-1">
                    <span className="text-sm font-semibold text-neutral-900 block">
                        Email
                    </span>
                        <span className="text-sm text-neutral-600 block">
                        {user.email || "No email provided"}
                    </span>
                    </div>
                </div>

                {/* Manage Account Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-neutral-900 pb-2 border-b border-neutral-100">
                        Manage account
                    </h3>

                    {/* Log Out Row */}
                    <div className="flex items-center justify-between py-1">
                        <div className="space-y-0.5">
                        <span className="text-sm font-medium text-neutral-900 block">
                            Log out of this device
                        </span>
                        </div>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            Log out
                        </Button>
                    </div>

                    {/* Delete Account Row */}
                    <div className="flex items-start justify-between py-1">
                        <div className="space-y-1 max-w-[70%]">
                        <span className="text-sm font-semibold text-neutral-900 block">
                            Delete account
                        </span>
                            <p className="text-xs text-neutral-500 leading-normal">
                                This will permanently delete your account and all associated data.
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            className="h-10 px-5 rounded-xl border-red-200 bg-white text-sm font-medium text-red-700 hover:bg-red-50/50 hover:text-red-800 hover:border-red-300 transition-colors"
                        >
                            Delete account
                        </Button>
                    </div>
                </div>
            </div>
    )
}