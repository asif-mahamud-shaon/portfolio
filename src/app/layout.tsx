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
    title: "Asif Mahamud Shaon | Full Stack Engineer",
    description: "Portfolio of Asif Mahamud Shaon, a Full-Stack Software Engineer focused on scalable digital systems.",
    openGraph: {
        title: "Asif Mahamud Shaon | Full Stack Engineer",
        description: "Portfolio of Asif Mahamud Shaon, a Full-Stack Software Engineer focused on scalable digital systems.",
        //url: "https://asifmahamudshaon.vercel.app",
        siteName: "Asif Mahamud Shaon Portfolio",
        images: [
            {
                url: "/images/showimage.png", // Default image
                width: 1200,
                height: 630,
                alt: "Asif Mahamud Shaon Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Asif Mahamud Shaon | Full Stack Engineer",
        description: "Portfolio of Asif Mahamud Shaon, a Full-Stack Software Engineer focused on scalable digital systems.",
        images: ["/images/showimage.png"], // Default image
    },
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
