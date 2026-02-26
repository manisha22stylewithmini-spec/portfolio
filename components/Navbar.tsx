"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "./CTAButton";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [background, setBackground] = useState("rgba(255, 255, 255, 0)");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Hide navbar when scrolling down, show when scrolling up
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Add background glassmorphism after scrolling past 50px
        if (latest > 50) {
            setBackground("rgba(255, 255, 255, 0.05)");
        } else {
            setBackground("rgba(255, 255, 255, 0)");
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
                backgroundColor: background,
                backdropFilter: "blur(16px)",
            }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 transition-colors duration-300"
        >
            <div className="flex-1 drop-shadow-md flex items-center">
                <Link href="/" className="inline-block relative">
                    <Image src="/logo.png" alt="Manisha Baroliya" width={240} height={70} className="w-auto h-8 md:h-12 object-contain" />
                </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm text-gray-300 font-medium">
                <Link href="/#home" className="hover:text-white transition-colors">Home</Link>
                <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                <Link href="/#case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                <Link href="/#resume" className="hover:text-white transition-colors">Resume</Link>
            </div>

            <div className="flex-1 flex justify-end">
                <Link href="mailto:manishabaroliya2025@gmail.com">
                    <CTAButton>
                        Contact Me
                    </CTAButton>
                </Link>
            </div>
        </motion.nav>
    );
}
