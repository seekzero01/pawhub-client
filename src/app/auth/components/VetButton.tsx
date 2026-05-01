'use client'

import React from "react";
import { VetIcon } from "./icons/Icons";

export function VetButton() {
    return (
        <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-lg border p-3 hover:bg-gray-50 transition">
                <VetIcon className="w-5 h-5" />
                <span className="text-sm">Join as Vet</span>
            </button>
        </div>
    )
}