import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Metadata} from "next";
import {inter, playfairDisplay} from "@/fonts";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "PawHub - Your intelligent companion",
    description: "Built with Next.js 16",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en" className={`flex bg-cloud-canvas ${inter.className} ${playfairDisplay.className} antialiased`}>
        <body className="bg-cloud-canvas min-h-screen w-full text-graphite-text">
        <TooltipProvider>
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}