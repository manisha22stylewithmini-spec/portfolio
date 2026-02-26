"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SmokeEffect from "./SmokeEffect";

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0a0a] pt-24 pb-12 px-8 overflow-hidden z-20 border-t border-white/5">

            {/* Background dark gradient & Glow Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_20px_#34d399]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />

            {/* Cinematic Procedural Smoke */}
            <SmokeEffect />

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
                >

                    {/* Brand Col */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="inline-block mb-4">
                            <Image src="/logo.png" alt="Manisha Baroliya Logo" width={280} height={80} className="w-auto h-12 md:h-16 object-contain" />
                        </Link>
                        <p className="text-gray-400 font-light max-w-sm">
                            UX/UI & Product Designer specializing in transforming complex SaaS platforms into intuitive digital experiences.
                        </p>
                    </div>

                    {/* Links Col */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Sitemap</h4>
                        <ul className="space-y-2 text-gray-400 font-light">
                            <li><Link href="/#home" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-emerald-400 transition-colors">About</Link></li>
                            <li><Link href="/portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/#resume" className="hover:text-emerald-400 transition-colors">Resume</Link></li>
                        </ul>
                    </div>

                    {/* Socials Col */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Social Links</h4>
                        <ul className="space-y-2 text-gray-400 font-light">
                            <li><a href="mailto:manishabaroliya2025@gmail.com" className="hover:text-emerald-400 transition-colors">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/manisha-baroliya-488016265/" target="_blank" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
                            <li><a href="https://www.behance.net/manishabarol2023" target="_blank" className="hover:text-emerald-400 transition-colors">Behance</a></li>
                            <li><a href="https://in.pinterest.com/manisha22stylewithmini/" target="_blank" className="hover:text-emerald-400 transition-colors">Pintrest</a></li>
                            <li><a href="https://dribbble.com/barol" target="_blank" className="hover:text-emerald-400 transition-colors">Dribbble</a></li>
                            <li><a href="https://www.instagram.com/ux_designer_manisha/?hl=en" target="_blank" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
                            <li><a href="https://linktr.ee/" target="_blank" className="hover:text-emerald-400 transition-colors">Tree Link</a></li>
                        </ul>
                    </div>

                </motion.div>

                {/* Bottom Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-light"
                >
                    <p>© {new Date().getFullYear()} Manisha Baroliya. All rights reserved.</p>
                    <p>Designed by Manisha Baroliya.</p>
                </motion.div>

            </div>
        </footer>
    );
}
