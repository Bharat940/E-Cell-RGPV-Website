"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const events = [
    { title: "IMPRENDITORE 4.0" },
    { title: "LUMOS 2025" },
    { title: "ECELL GENESIS" },
];

interface EventCardProps {
    title: string;
}

function EventCard({ title }: EventCardProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [titleHeight, setTitleHeight] = useState(0);

    useEffect(() => {
        if (titleRef.current) {
            setTitleHeight(titleRef.current.offsetHeight);
        }
    }, [title]);

    // Calculate font size based on title length - responsive sizing
    const getFontSize = () => {
        const length = title.length;
        if (length <= 12) return "text-3xl sm:text-3xl md:text-4xl";
        if (length <= 15) return "text-2xl sm:text-2xl md:text-3xl";
        return "text-xl sm:text-xl md:text-2xl";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[280px] sm:h-[320px] md:h-[350px]"
        >
            <div
                className="relative h-full bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 overflow-hidden"
                style={{
                    borderTopRightRadius: "2rem",
                    borderBottomLeftRadius: "2rem",
                    border: "2px solid rgba(200, 200, 200, 0.3)",
                }}
            >
                {/* Grainy texture overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        borderTopRightRadius: "2rem",
                        borderBottomLeftRadius: "2rem",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
                        opacity: 0.6,
                        mixBlendMode: "overlay",
                    }}
                />

                {/* Vertical Title - Full Height */}
                <div className="relative h-full flex items-start justify-start py-3 sm:py-4 pl-2 sm:pl-4">
                    <div className="flex flex-row items-start gap-1 sm:gap-2">
                        {/* Vertical Gradient Underline - 40% of text height */}
                        {titleHeight > 0 && (
                            <div
                                className="rounded-full"
                                style={{
                                    width: "4px",
                                    height: `${titleHeight * 0.4}px`,
                                    background: "linear-gradient(135deg, #FF1493, #87CEEB)",
                                }}
                            />
                        )}

                        <h3
                            ref={titleRef}
                            className={`${getFontSize()} font-bold text-white font-[var(--font-clash-display)] whitespace-nowrap`}
                            style={{
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                            }}
                        >
                            {title}
                        </h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function OurEvents() {
    return (
        <section
            className="relative min-h-screen pt-24 sm:pt-32 md:pt-48 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ backgroundColor: "#040115" }}
        >
            {/* Background Image similar to I3.tsx */}
            <div className="absolute inset-0 pointer-events-none z-0 flex justify-end items-center">
                <div className="relative h-full w-full sm:w-[80%] md:w-[70%]">
                    <Image
                        src="/assets/10.png"
                        alt="bg"
                        fill
                        className="opacity-20 sm:opacity-30 md:opacity-40"
                        style={{
                            objectFit: "contain",
                            objectPosition: "right center",
                        }}
                    />
                </div>
            </div>

            {/* Circular Gradient Background - Mobile Only */}
            <div
                className="absolute pointer-events-none z-0 sm:hidden"
                style={{
                    width: "600px",
                    height: "600px",
                    top: "12%",
                    left: "50%",
                    marginLeft: "-300px",
                    background: "linear-gradient(267deg, rgba(99, 102, 241, 0.4) 13.23%, rgba(3, 0, 20, 0.1) 50%)",
                    borderRadius: "50%",
                    transform: "rotate(-86.99deg)",
                }}
            />

            {/* Larger circle for tablets and desktop */}
            <div
                className="absolute pointer-events-none z-0 hidden sm:block"
                style={{
                    width: "800px",
                    height: "800px",
                    top: "15%",
                    left: "50%",
                    marginLeft: "-400px",
                    background: "linear-gradient(267deg, rgba(99, 102, 241, 0.4) 13.23%, rgba(3, 0, 20, 0.1) 50%)",
                    borderRadius: "50%",
                    transform: "rotate(-86.99deg)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto mt-24 sm:mt-12 md:mt-20">
                {/* Heading (Normal, no flip, no underline) */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="relative flex flex-col items-center">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center font-[var(--font-clash-display)] uppercase">
                            OUR EVENTS
                        </h2>
                    </div>
                </div>

                {/* Three Cards - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto pt-12 sm:pt-16 md:pt-20 px-4 sm:px-0">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
        </section>
    );
}
