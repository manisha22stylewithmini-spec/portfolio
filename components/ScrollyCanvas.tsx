"use client";

import { useEffect, useRef, useState, memo } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 128; // 0000.webp to 0127.webp

interface ScrollyCanvasProps {
    scrollYProgress: MotionValue<number>;
}

function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    // Preload Images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image();
            const paddedIndex = i.toString().padStart(4, "0");
            img.src = `/sequence/${paddedIndex}.webp`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Draw frame on canvas
    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !images[frameIndex]) return;

        const img = images[frameIndex];

        // Object-fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
        } else {
            drawWidth = canvas.height * imgRatio;
        }

        // Apply a slight zoom factor (8%) to push the edges out of frame, cropping out the Veo watermark
        const ZOOM = 1.08;
        drawWidth *= ZOOM;
        drawHeight *= ZOOM;

        const offsetX = (canvas.width - drawWidth) / 2;
        const offsetY = (canvas.height - drawHeight) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Re-draw current frame on resize
                if (loaded) {
                    const currentFrame = Math.round(scrollYProgress.get() * (FRAME_COUNT - 1));
                    drawFrame(currentFrame);
                }
            }
        };

        handleResize(); // Initialize sizes
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, scrollYProgress]);

    // Handle Scroll scrubbing
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!loaded) return;
        const frameIndex = Math.round(latest * (FRAME_COUNT - 1));
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
    );
}

export default memo(ScrollyCanvas);
