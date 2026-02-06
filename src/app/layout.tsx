import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import CursorFollower from "@/components/ui/CursorFollower";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
    title: "Asif Mahamud Shaon | System Engineer",
    description: "Portfolio of Asif Mahamud Shaon, a Full-Stack Software Engineer focused on scalable digital systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth cursor-none">
            <body className={clsx(inter.variable, jetbrainsMono.variable, "bg-background font-sans antialiased selection:bg-white/20 selection:text-white")}>
                <CursorFollower />
                {children}
            </body>
        </html>
    );
}
