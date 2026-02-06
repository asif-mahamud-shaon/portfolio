"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Identity from "@/components/sections/Identity";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Mindset from "@/components/sections/Mindset";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        // Smooth scrolling for anchor links if we had a nav
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = target.getAttribute('href')?.substring(1);
                const element = document.getElementById(id || "");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
            <Navbar />
            <Hero />
            <Identity />
            <Skills />
            <Projects />
            <Experience />
            <Mindset />
            <Contact />
        </main>
    );
}
