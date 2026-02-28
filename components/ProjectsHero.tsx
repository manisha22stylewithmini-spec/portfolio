"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative w-full min-h-[130vh] bg-black overflow-hidden flex items-center justify-center pt-32 pb-40">



            {/* Main Container for Stack & Pedestal */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">

                {/* Centered Composition Wrapper */}
                <div
                    className="relative w-full max-w-lg flex items-center justify-center h-[700px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >

                    {/* Floating Card Stack */}
                    <motion.div
                        className="relative w-full z-20 flex flex-col items-center justify-center mb-32"
                        animate={{ y: isHovered ? 150 : [0, -10, 0] }}
                        transition={{ duration: isHovered ? 0.4 : 6, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" }}
                    >
                        {/* We reverse the array so the first item is visually on top (rendered last) */}
                        {[...projectsData].reverse().map((project, index, arr) => {
                            const stackIndex = arr.length - 1 - index;

                            // When hovered, spread the cards further apart vertically,
                            // restore scale to 1, and make them fully opaque.
                            const yOffset = isHovered ? (stackIndex * -140) : (stackIndex * -25);
                            const scale = isHovered ? 1 : (1 - (stackIndex * 0.04));
                            const opacity = isHovered ? 1 : (1 - (stackIndex * 0.15));
                            const zIndexOffset = 40 - stackIndex;

                            return (
                                <motion.div
                                    key={stackIndex}
                                    className={`${stackIndex === 0 ? "relative" : "absolute top-0 left-0"} w-full p-6 cursor-pointer group`}
                                    initial={{ y: stackIndex * -25, scale: 1 - (stackIndex * 0.04), opacity: 1 - (stackIndex * 0.15) }}
                                    animate={{
                                        y: yOffset,
                                        scale: scale,
                                        opacity: opacity
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{
                                        zIndex: zIndexOffset,
                                        background: "rgba(20, 20, 20, 0.6)",
                                        backdropFilter: "blur(20px)",
                                        WebkitBackdropFilter: "blur(20px)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: "16px",
                                        transformOrigin: "bottom center"
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        y: yOffset - 15, // Lift up slightly on individual hover
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                >
                                    {/* Glow Behind Hover (only active on hover via group) */}
                                    <div className="absolute inset-0 rounded-[16px] bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-500 z-0 pointer-events-none blur-xl" />

                                    <div className="relative z-10 flex flex-col items-center text-center gap-2">
                                        <div className="flex flex-row items-center justify-center gap-3 w-full">
                                            <h6 className="text-2xl font-bold text-white tracking-tight leading-snug">
                                                {project.title}
                                            </h6>
                                            <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full whitespace-nowrap">
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-xs font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Stone Base with Light */}
                    <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[1200px] flex flex-col items-center pointer-events-none z-10 transition-transform duration-500"
                        style={{ transform: isHovered ? "translate(-50%, 100px)" : "translate(-50%, -60px)" }}>
                        {/* Ambient Light on the stone */}
                        <div className="absolute top-[60px] w-[600px] h-[120px] bg-white opacity-15 blur-[60px] rounded-[100%]" />

                        {/* Shadow cast by the cards onto the stone */}
                        <div
                            className="absolute top-[100px] w-[450px] bg-black blur-[40px] rounded-[100%] transition-all duration-500 z-20"
                            style={{
                                height: isHovered ? "120px" : "60px",
                                opacity: isHovered ? 0.4 : 0.8,
                                transform: isHovered ? "scale(1.2)" : "scale(1)"
                            }}
                        />

                        <div className="relative w-[2000px] h-[700px]">
                            {/* Uses the provided stone.png */}
                            <Image
                                src="/stone.png"
                                alt="Stone Pedestal Base"
                                fill
                                className="object-contain object-top"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
