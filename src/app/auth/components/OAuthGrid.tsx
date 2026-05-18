// 'use client'
// import React from "react";
// import { OAuthStrategy } from '@clerk/shared/types';
// import {providers} from "@/src/app/auth/data/Data";
// import {OAuthButton} from "@/src/app/auth/components/buttons/OAuthButton";
//
// interface OAuthGridProps {
//     signUpWithAction: (strategy: OAuthStrategy) => Promise<void>;
//     lastStrategy?: any;
// }
//
// export function OAuthGrid({ signUpWithAction, lastStrategy }: OAuthGridProps) {
//     return (
//         <div className="space-y-4">
//             <div className="flex items-center gap-3 text-sm text-neutral-400">
//                 <div className="h-px flex-1 bg-neutral-200" />
//                 or continue with
//                 <div className="h-px flex-1 bg-neutral-200" />
//             </div>
//
//             <div className="grid grid-cols-3 gap-3">
//                 {providers.map((provider) => (
//                     <div key={provider.name} className="relative flex flex-col items-center">
//                         <OAuthButton onClick={() => signUpWithAction(provider.strategy)} label={provider.name} icon={provider.icon} />
//                         {lastStrategy === provider.strategy && <span className="absolute -bottom-4 text-[10px] whitespace-nowrap text-neutral-500"> (Last used)</span>}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

'use client'

import React from "react"
import { providers } from "@/src/app/auth/data/Data"
import { OAuthButton } from "@/src/app/auth/components/buttons/OAuthButton"

interface OAuthGridProps {
    signUpWithAction: (strategy: any) => Promise<void>
}

export function OAuthGrid({ signUpWithAction }: OAuthGridProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-platinum-border" />
                <span className="font-inter text-caption leading-caption tracking-widest text-silver-detail">
                    or continue with
                </span>
                <div className="h-px flex-1 bg-platinum-border" />
            </div>

            <div className="flex flex-col gap-2">
                {providers.map((provider) => (
                        <OAuthButton
                            key={provider.name}
                            onClick={() => signUpWithAction(provider.strategy)}
                            label={`Continue with ${provider.name}`}
                            icon={provider.icon}
                        />
                ))}
            </div>
        </div>
    )
}