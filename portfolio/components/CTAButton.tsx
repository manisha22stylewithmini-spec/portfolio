import { motion, HTMLMotionProps } from "framer-motion";

interface CTAButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export default function CTAButton({ children, className = "", ...props }: CTAButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative inline-flex items-center justify-center px-8 py-3.5 rounded-full text-black font-bold tracking-wide transition-all duration-300 overflow-hidden group ${className}`}
            {...props}
        >
            {/* Inner Fill with Glassmorphism matching ON.svg */}
            <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FFDCDC]/50 to-[#FF9797]/50 backdrop-blur-md"
                style={{
                    boxShadow: "0 2.5px 5px rgba(255, 106, 106, 0.25), 0 10px 10px rgba(255, 106, 106, 0.15), 0 20px 15px rgba(255, 106, 106, 0.1)"
                }}
            />

            {/* Glowing Stroke matching ON.svg */}
            <div className="absolute inset-0 rounded-full border-[2px] border-white/80 group-hover:border-[#FF6A6A]/80 transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/0 via-[#FF6A6A]/40 to-white/0 pointer-events-none mix-blend-overlay" />

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
