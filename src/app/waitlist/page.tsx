'use client'

import { useWaitlist } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {SyntheticEvent} from "react";
import {PawIcon} from "@/src/app/auth/components/icons/Icons";
import {SOCIAL_LINKS} from "@/src/app/waitlist/data/Data";
import Link from "next/link";

export default function Page() {
    const { waitlist, errors, fetchStatus } = useWaitlist()

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const emailAddress = formData.get('emailAddress') as string

        const { error } = await waitlist.join({ emailAddress })
        if (error) {
            console.error('Failed to join waitlist:', error)
        }
    }
    const content = waitlist.id ? (
        <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#FFEE8C] flex items-center justify-center">
                <PawIcon className="w-8 h-8 text-[#C4A800]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl drop-shadow-md">
                You're on the list!
            </h1>
            <p className="text-base font-semibold text-white/90 max-w-md drop-shadow">
                We'll notify you when you're approved. Stay tuned for exclusive launch updates.
            </p>
        </div>
    ) : (
        <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-3 max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                    Join our waitlist!
                </h1>
                <p className="text-base font-semibold text-white/90 drop-shadow">
                    Be Part of the Excitement: Receive Exclusive Launch Updates and Notifications
                </p>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full max-w-md mt-2">
                <Input
                    id="email"
                    name="emailAddress"
                    type="email"
                    required
                    placeholder="Email address"
                    className="rounded-md border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10.5 text-sm bg-white/90"
                />
                <Button
                    type="submit"
                    disabled={fetchStatus === 'fetching'}
                    className="rounded-md h-11 px-5 bg-[#C4A800] hover:bg-[#a89000] text-white font-semibold text-sm whitespace-nowrap"
                >
                    {fetchStatus === 'fetching' ? 'Submitting...' : 'Notify me'}
                </Button>
            </form>
            {errors.fields.emailAddress && (
                <p className="text-sm text-red-300 -mt-4">{errors.fields.emailAddress.longMessage}</p>
            )}
        </div>
    )

    return (
        <div className="bg-transparent flex flex-col">
            <video
                className="fixed inset-0 w-full h-full object-cover -z-10"
                src="/videos/pets-background.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="fixed inset-0 bg-black/55 -z-10" />

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
                {content}
            </main>

            <footer className="relative z-10 pt-10 flex justify-center gap-7">
                {SOCIAL_LINKS.map((s) => (
                    <Link key={s.label} href={s.href} aria-label={s.label}>
                        {s.icon}
                    </Link>
                ))}
            </footer>
        </div>
    )
}