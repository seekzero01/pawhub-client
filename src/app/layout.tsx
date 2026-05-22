import "./globals.css";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Metadata} from "next";
import {inter, playfairDisplay} from "@/src/fonts";

export const metadata: Metadata = {
    title: "My Next.js Application",
    description: "Built with Next.js 16",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`flex min-h-screen bg-cloud-canvas ${inter.className} ${playfairDisplay.className} h-full antialiased`}>
        <body>
        <TooltipProvider>
            {children}
        </TooltipProvider>
        </body>
        </html>
    );
}