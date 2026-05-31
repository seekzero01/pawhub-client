"use client"

import {Separator} from "@/components/ui/separator";

export default function BillingTab() {
    return <div className="px-8 py-6 space-y-10">
        <div className="flex flex-col justify-center">
            <div className="mb-6">
                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
                    Billing
                </h2>

                <Separator className="h-px border-[0.5px] border-platinum-border"/>
            </div>
        </div>
    </div>
}