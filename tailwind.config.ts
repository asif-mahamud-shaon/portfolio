import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030303", // Deep dark background
                foreground: "#ededed", // Off-white text
                primary: {
                    DEFAULT: "#ffffff",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#1a1a1a",
                    foreground: "#ffffff",
                },
                accent: {
                    DEFAULT: "#333333",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#111111",
                    foreground: "#888888",
                },
                border: "#262626",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-glow": "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "slide-up": "slide-up 0.5s ease-out forwards",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                }
            },
        },
    },
    plugins: [],
};
export default config;
