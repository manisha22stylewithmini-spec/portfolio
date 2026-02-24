"use client";

import { useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scope the scroll progress strictly to this 500vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Add a buttery smooth spring physics to the raw scroll value
    // Tightened physics so it feels instantly responsive to the scroll wheel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 800,
        damping: 150,
        restDelta: 0.001
    });

    return (
        <section id="hero" ref={containerRef} className="relative w-full h-[500vh] z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <ScrollyCanvas scrollYProgress={smoothProgress} />
                <Overlay scrollYProgress={smoothProgress} />
            </div>
        </section>
    );
}
