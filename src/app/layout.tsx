import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Metadata} from "next";
import {inter, playfairDisplay} from "@/fonts";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "My Next.js Application",
    description: "Built with Next.js 16",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en" className={`flex bg-cloud-canvas ${inter.className} ${playfairDisplay.className} h-full antialiased`}>
        <body className="w-full flex items-center justify-center">
        <TooltipProvider>
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}