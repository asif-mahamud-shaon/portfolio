"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container px-6 mx-auto flex items-center justify-between">
                {/* Brand Name */}
                {/* Brand Name */}
                <Link href="/" className="group flex items-center gap-3">
                    {/* Abstract Grid Logo */}
                    <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 border border-white/20 rounded-sm rotate-45 group-hover:border-emerald-500/50 transition-colors duration-500" />
                        <div className="w-4 h-4 bg-white/10 group-hover:bg-emerald-500 transition-colors duration-300 rounded-[1px] rotate-45" />
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-3"> {/* Gap between names */}
                            <span className="text-2xl md:text-3xl font-sans font-black text-white tracking-tighter group-hover:text-emerald-400 transition-colors uppercase leading-none">
                                Asif Mahamud Shaon
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs font-mono text-emerald-500/80 tracking-widest mt-1 pl-1">
                            <span className="w-4 h-[1px] bg-emerald-500"></span>
                            <span>FULL STACK ENGINEER</span>
                        </div>
                    </div>
                </Link>

                {/* Simple Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Expertise", href: "#expertise" },
                        { name: "Services", href: "#services" },
                        { name: "Projects", href: "#work" },
                        { name: "Work", href: "#experience" },
                        { name: "Contact", href: "#contact" }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/60 hover:text-white hover:glow-text transition-all uppercase tracking-wider"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button (Visual Only for now) */}
                <button className="md:hidden text-white/80 hover:text-white">
                    <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-current"></span>
                        <span className="block w-8 h-0.5 bg-current"></span>
                    </div>
                </button>
            </div>
        </motion.header>
    );
}
