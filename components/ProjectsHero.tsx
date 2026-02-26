"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projectsData = [
    {
        title: "Government Platform UX Redesign",
        description: "Redesigned a government website to improve usability, accessibility, and workflow clarity.",
        status: "Live",
    },
    {
        title: "Legal Case Management Dashboard",
        description: "Designed a comprehensive SaaS platform optimized for legal teams.",
        status: "Live",
    },
    {
        title: "ANTRE HRMS Platform",
        description: "Designed complete HRMS dashboards and employee workflows.",
        status: "In Development",
    },
    {
        title: "ANTFLUENS Social Media Platform",
        description: "Designed an advanced social media management dashboard.",
        status: "Live",
    },
];

export default function ProjectsHero() {
    return (
        <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center pt-20">

            {/* Background radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
                style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 70%)"
                }}
            />

            {/* Main Container for Stack & Pedestal */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">

                {/* Centered Composition Wrapper */}
                <div className="relative w-full max-w-[600px] h-[500px]">

                    {/* Floating Card Stack */}
                    <motion.div
                        className="absolute bottom-[140px] left-1/2 -translate-x-1/2 w-full max-w-xl z-20 flex flex-col items-center"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* We reverse the array so the first item is visually on top (rendered last) */}
                        {[...projectsData].reverse().map((project, index, arr) => {
                            // Because we reversed, the original index 0 (which should be top) is now at the end of the array.
                            // Let's calculate the "stackIndex" where 0 is the front-most card.
                            const stackIndex = arr.length - 1 - index;

                            // For 4 cards: 
                            // stackIndex 0 -> Card 1 (front): translateY(0px) scale(1)
                            // stackIndex 1 -> Card 2: translateY(-20px) scale(0.96)
                            // ...
                            const yOffset = stackIndex * -25; // Spacing it out slightly more for clarity
                            const scale = 1 - (stackIndex * 0.04);
                            const zIndexOffset = 40 - stackIndex;
                            const opacity = 1 - (stackIndex * 0.15);

                            return (
                                <motion.div
                                    key={stackIndex}
                                    className="absolute w-full p-8 cursor-pointer group"
                                    style={{
                                        zIndex: zIndexOffset,
                                        background: "rgba(20, 20, 20, 0.6)",
                                        backdropFilter: "blur(20px)",
                                        WebkitBackdropFilter: "blur(20px)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: "16px",
                                        y: yOffset,
                                        scale: scale,
                                        opacity: opacity,
                                        transformOrigin: "bottom center"
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        y: yOffset - 15, // Lift up slightly on hover
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    {/* Glow Behind Hover (only active on hover via group) */}
                                    <div className="absolute inset-0 rounded-[16px] bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500 z-0 pointer-events-none blur-xl" />

                                    <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                        <div className="flex flex-col items-center gap-2 w-full">
                                            <h3 className="text-2xl font-bold text-white tracking-tight leading-snug max-w-[90%]">
                                                {project.title}
                                            </h3>
                                            <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full whitespace-nowrap">
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Pedestal Base */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-10 flex flex-col items-center">
                        {/* Shadow Contact Layer (directly above pedestal surface) */}
                        <div className="absolute -top-10 w-[80%] h-20 bg-black/60 blur-2xl rounded-[100%] shadow-[0_40px_80px_rgba(0,0,0,0.8)] z-10" />

                        {/* User's Pedestal Image */}
                        <div className="relative w-full max-w-[420px] md:max-w-[500px] aspect-[2/1]">
                            <Image
                                src="/pedestal.png"
                                alt="Stone Pedestal Base"
                                fill
                                className="object-contain object-bottom drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Ambient floor glow under pedestal */}
                        <div className="absolute bottom-0 w-[200%] max-w-[1200px] h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
