'use client'

import { useWaitlist } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SyntheticEvent } from 'react'
import { PawIcon } from '@/src/app/auth/components/icons/Icons'
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
        <div className="flex flex-col items-center gap-24 text-center">
            <div className="w-14 h-14 rounded-2xl bg-amethyst-accent flex items-center justify-center">
                <PawIcon className="w-7 h-7 text-graphite-text" />
            </div>
            <h1 className="font-pp-editorial-new text-heading-lg leading-heading-lg tracking-heading text-ink-text max-w-2xl">
                You're on the list!
            </h1>
            <p className="font-switzer text-body leading-body tracking-body text-deep-plum max-w-md">
                We'll notify you when you're approved. Stay tuned for exclusive launch updates.
            </p>
        </div>
    ) : (
        <div className="flex flex-col items-center gap-20 text-center">
            <div className="flex flex-col gap-16 max-w-3xl">
                <h1 className="font-playfair-display text-display leading-display text-ink-text tracking-tight">
                    The future of pet care is{' '}
                    <span className="font-bold italic">coming</span>.
                </h1>
                <p className="font-inter text-body leading-body tracking-body text-deep-plum max-w-lg mx-auto">
                    Join the exclusive waitlist for early access to PawBot AI, unified health
                    records, and seamless vet coordination.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 w-full max-w-md"
            >
                <Input
                    id="email"
                    name="emailAddress"
                    type="email"
                    aria-label="Email address"
                    required
                    placeholder="Enter your email address"
                    className="rounded-xl border border-platinum-border focus-visible:ring-0 focus-visible:ring-offset-0 h-12 py-5 font-inter text-body text-ink-text bg-porcelain-surface placeholder:text-silver-detail flex-1"
                />
                <Button
                    type="submit"
                    disabled={fetchStatus === 'fetching'}
                    className="cursor-pointer rounded-xl py-5 h-12 px-20 bg-amethyst-accent hover:bg-amethyst-accent/80 text-ink-text font-inter font-semibold text-body whitespace-nowrap border border-platinum-border shadow-none"
                >
                    {fetchStatus === 'fetching' ? 'Submitting...' : 'Join Waitlist'}
                </Button>
            </form>
            {errors.fields.emailAddress && (
                <p className="font-switzer text-caption leading-caption text-[#dd5b00] -mt-3" role="alert">
                    {errors.fields.emailAddress.longMessage}
                </p>
            )}
        </div>
    )

    return (
        <div className="w-full min-h-screen bg-cloud-canvas flex flex-col">
            <header className="flex justify-center pt-56 pb-8">
                <div className="flex items-center gap-8">
                    <PawIcon className="w-7 h-7 text-graphite-text" />
                    <span className="font-switzer font-semibold text-subheading leading-subheading tracking-subheading text-graphite-text">PawHub
                 </span>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center px-16 py-40">
                {content}
            </main>

            <footer className="flex flex-col items-center pb-32">
                <p className="font-playfair-display font-bold text-body leading-caption text-graphite-text tracking-wide">
                    by <Link href="https://mykolaseekzero.com" target="_blank" className="cursor-pointer">seekzero</Link>
                </p>
            </footer>
        </div>
    )
}