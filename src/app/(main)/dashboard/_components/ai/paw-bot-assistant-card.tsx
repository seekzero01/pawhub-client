"use client";

import * as React from "react";
import Link from "next/link";
import {Sparkles, ArrowRight, Syringe, Zap} from "lucide-react";
import { CardContent , Card, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type DynamicInsightPayload } from "./types";

interface PawBotAssistantCardProps {
    insight: DynamicInsightPayload;
    onQuerySelect?: (queryLabel: string) => void;
    onActionTrigger?: () => void;
}

export const PawBotAssistantCard = (
    ({ insight, onQuerySelect, onActionTrigger }: PawBotAssistantCardProps) => {
        return (
           <Card className="w-full p-4 bg-amethyst-accent max-w-md">
               <CardHeader className="flex items-center p-0 justify-between w-full">
                   <CardTitle className="flex items-center gap-2">
                       <Sparkles className="size-4 text-amber-400 fill-amber-400" />
                       <span className="font-bold text-body tracking-body text-graphite-text">
                           {insight.assistantName}
                       </span>
                   </CardTitle>
                   <Link
                       href={insight.viewActionUrl}
                       className="group flex items-center gap-1 text-caption text-slate hover:text-graphite transition-colors duration-150"
                   >
                       View Assistant
                       <ArrowRight className="size-4 transform transition-transform duration-150 group-hover:translate-x-0.5" />
                   </Link>
               </CardHeader>
               <CardContent className="p-0 flex flex-col gap-5">
                   <div>
                       <div className="flex items-start gap-3.5 mb-2">
                           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black bg-paper text-graphite shadow-subtle">
                               <Syringe className="size-5" />
                           </div>

                           <div className="flex flex-col gap-1 pt-0.5">
                                <span className="font-semibold text-caption uppercase">
                                  {insight.alertTypeLabel}
                                </span>
                               <h3 className="font-semibold text-base">
                                   {insight.alertTitle}
                               </h3>
                           </div>
                       </div>

                       <p className="text-body leading-body text-graphite-text pl-14.5 pr-2 mb-4">
                           {insight.alertDescription}
                       </p>

                       <Button
                           type="button"
                           variant="outline"
                           onClick={onActionTrigger}
                           className="w-full bg-black transition-colors font-medium text-body h-12 shadow-subtle flex items-center justify-center gap-2 rounded-xl"
                       >
                           <Zap className="size-4 text-white" />
                           <span className="text-white">{insight.callToActionLabel}</span>
                       </Button>
                   </div>

                   <div className="flex flex-col gap-2.5">
                       <h4 className="font-semibold text-caption uppercase px-0.5">
                           Suggested Questions
                       </h4>

                       <div className="flex flex-wrap items-center gap-2">
                           {insight.suggestedQueries.map((query) => (
                               <Button
                                   key={query.id}
                                   type="button"
                                   variant="secondary"
                                   onClick={() => onQuerySelect?.(query.label)}
                                   className="border border-black hover:bg-zinc-100 hover:border-zinc-300 text-graphite font-switzer font-medium text-[13px] h-9 px-4 rounded-4xl transition-all duration-150"
                               >
                                   {query.label}
                               </Button>
                           ))}
                       </div>
                   </div>
               </CardContent>
           </Card>
        );
    }
);