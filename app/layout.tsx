import type {Metadata} from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"


const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})
export const metadata: Metadata = {
    title: "Accueil freasbe leads",
    description: "Freasbe leads est une plateforme de génération de leads pour les professionnels de l'immobilier et de la rénovation énergétique.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        {children}
        </body>
        </html>
    )
}
