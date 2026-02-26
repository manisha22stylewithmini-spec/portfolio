import { motion } from "framer-motion";
import Link from "next/link";
import CTAButton from "./CTAButton";

interface ProjectCardProps {
    title: string;
    description: string;
    points: string[];
    ctaText?: string;
    link?: string;
    index: number;
}

export default function ProjectCard({ title, description, points, ctaText, link, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[450px]"
        >
            {/* Glow Layer */}
            <div className="absolute -inset-1 bg-gradient-to-br from-white/5 to-white/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
                    {title}
                </h3>
                <p className="text-xl text-gray-300 font-light mb-6">
                    {description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 font-light text-base">
                            <span className="text-emerald-500 mt-1.5">•</span>
                            {point}
                        </li>
                    ))}
                </ul>

                {ctaText && link && (
                    <div className="mt-auto">
                        <Link href={link}>
                            <CTAButton className="w-full sm:w-auto text-sm py-3 px-6 pb-[2px] pt-[2px]">
                                {ctaText}
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </CTAButton>
                        </Link>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
