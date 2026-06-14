"use client";

import React, { useState, useEffect } from "react";

function getGreeting(hour: number): string {
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
}

interface TimeGreetingProps {
    name?: string;
    className?: string;
}

export const TimeGreeting: React.FC<TimeGreetingProps> = ({ name, className = "" }) => {
    const [hour, setHour] = useState<number | null>(null);

    useEffect(() => {
        setHour(new Date().getHours());
    }, []);

    const greeting = hour !== null ? getGreeting(hour) : "Hello";

    return (
        <span className={className} aria-live="polite">
            {name ? `${greeting}, ${name}` : greeting}
        </span>
    );
};