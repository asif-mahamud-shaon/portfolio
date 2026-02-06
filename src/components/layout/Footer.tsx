"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © 2026 Asif Mahamud Shaon. All rights reserved.
                </p>

                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                >
                    Back to Top
                    <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </footer>
    );
}
