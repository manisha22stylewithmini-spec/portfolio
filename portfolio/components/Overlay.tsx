"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // 5 sections over 500vh -> ~20% of scroll each
    const op1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    const op2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.35], [50, -50]);

    const op3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.35, 0.55], [50, -50]);

    const op4 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    const op5 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
    const y5 = useTransform(scrollYProgress, [0.75, 1], [50, 0]);
    return (
        <motion.div
            className="absolute inset-0 w-full h-full z-10 flex flex-col items-center justify-center"
        >

            {/* Section 1 (center) */}
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-auto">
                <div className="text-center max-w-3xl glass-panel p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg mb-4">
                        Manisha Baroliya
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
                        UX/UI & Product Designer
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        Designing scalable digital products that align user psychology with business goals.
                    </p>
                </div>
            </motion.div>

            {/* Section 2 (left) */}
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute inset-0 flex items-center justify-start px-8 md:px-24 pointer-events-auto">
                <div className="max-w-2xl glass-panel p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
                        UX Product Designer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Design Team Lead</span> at RCV Technologies
                    </h3>
                    <p className="text-xl text-gray-300 font-light leading-relaxed">
                        Leading end-to-end product design for SaaS platforms, dashboards, and enterprise systems.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 (right) */}
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute inset-0 flex items-center justify-end px-8 md:px-24 pointer-events-auto">
                <div className="max-w-2xl text-right glass-panel p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
                        I specialize in transforming complex systems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">intuitive, scalable digital experiences.</span>
                    </h3>
                    <p className="text-xl text-gray-300 font-light leading-relaxed">
                        From research to design systems to developer handoff.
                    </p>
                </div>
            </motion.div>

            {/* Section 4 (center) */}
            <motion.div style={{ opacity: op5, y: y5 }} className="absolute inset-0 flex items-center justify-center px-8 md:px-24 pointer-events-auto">
                <div className="text-center max-w-4xl glass-panel p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-white">
                        <div>
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">10+</div>
                            <div className="text-lg text-gray-400">Live Products Designed</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">20+</div>
                            <div className="text-lg text-gray-400">Websites Delivered</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-2">6+</div>
                            <div className="text-lg text-gray-400">Mobile Applications</div>
                        </div>
                    </div>
                    <p className="text-2xl text-gray-300 font-light leading-relaxed">
                        Trusted across SaaS, enterprise, and government platforms.
                    </p>
                </div>
            </motion.div>

            {/* Section 5 (center) */}
            {/* <motion.div style={{ opacity: op5, y: y5 }} className="absolute inset-0 flex items-center justify-center px-8 md:px-24 pointer-events-auto">
                <div className="text-center max-w-3xl glass-panel p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
                    <h3 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                        Recently redesigned a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">government platform</span>
                    </h3>
                    <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                        Improved UX clarity, accessibility, and workflow efficiency using modern UX and AI-augmented workflows.
                    </p>
                    <Link href="#portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(52, 211, 153, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-lg font-medium text-white transition-all duration-300"
                        >
                            View Case Study
                        </motion.button>
                    </Link>
                </div>
            </motion.div> */}

        </motion.div>
    );
}
