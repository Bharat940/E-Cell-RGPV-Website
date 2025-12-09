"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const initiatives = [
    {
        title: "Campus Outreach Program",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Startup Internship Program",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "EC-Club",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

type Position = "center" | "left" | "right";

interface Initiative {
    title: string;
    content: string;
    isActive: boolean;
    position: Position;
    onClick: () => void;
}

function InitiativeCard({ title, content, isActive, position, onClick }: Initiative) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Detect screen size on client only to avoid hydration mismatch
    useEffect(() => {
        const updateScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const positions = {
        center: { scale: 1, x: 0, opacity: 1, filter: "blur(0px)", zIndex: 40 },
        left: {
            scale: isMobile ? 0.7 : isTablet ? 0.7 : 0.72,
            x: isMobile ? -180 : isTablet ? -250 : -330,
            opacity: isMobile ? 0.4 : isTablet ? 0.18 : 0.22,
            filter: isMobile ? "blur(3px)" : isTablet ? "blur(4px)" : "blur(5px)",
            zIndex: 5
        },
        right: {
            scale: isMobile ? 0.7 : isTablet ? 0.7 : 0.72,
            x: isMobile ? 180 : isTablet ? 250 : 330,
            opacity: isMobile ? 0.4 : isTablet ? 0.18 : 0.22,
            filter: isMobile ? "blur(3px)" : isTablet ? "blur(4px)" : "blur(5px)",
            zIndex: 5
        },
    };

    return (
        <motion.div
            className="absolute w-full max-w-[90%] sm:max-w-md md:max-w-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ ...positions[position], opacity: positions[position].opacity }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => isActive && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
                if (isMobile && Math.abs(offset.x) > 50) {
                    onClick();
                }
            }}
        >
            <div
                className="relative min-h-[450px] sm:min-h-[480px] md:min-h-[520px] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 pb-20 sm:pb-24 transition-all duration-500"
                style={{
                    borderTopRightRadius: "32px",
                    borderBottomLeftRadius: "32px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(22px)",
                    boxShadow: "0px 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* REAL GRADIENT BORDER */}
                <div
                    style={{
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        padding: "2px",
                        borderTopRightRadius: "32px",
                        borderBottomLeftRadius: "32px",
                        background: isHovered && isActive
                            ? "linear-gradient(135deg, #DE4DBC, #595CED)"
                            : "transparent",

                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",

                        pointerEvents: "none",
                        zIndex: -1,
                    }}
                />

                {/* Glass shine effect */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        borderTopRightRadius: "32px",
                        borderBottomLeftRadius: "32px",
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)",
                        opacity: 0.5,
                    }}
                />

                {/* Grainy texture overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        borderTopRightRadius: "32px",
                        borderBottomLeftRadius: "32px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
                        opacity: 0.4,
                        mixBlendMode: "overlay",
                    }}
                />

                {/* DEFAULT TITLE */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 text-center -translate-y-4 sm:-translate-y-6"
                    animate={{
                        opacity: isHovered && isActive ? 0 : 1,
                        scale: isHovered && isActive ? 0.95 : 1,
                        filter: isHovered && isActive ? "blur(4px)" : "blur(0px)",
                    }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {title}
                    </h3>
                </motion.div>

                {/* HOVER CONTENT */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 md:px-10 text-center -translate-y-4 sm:-translate-y-6"
                    animate={{
                        opacity: isHovered && isActive ? 1 : 0,
                        scale: isHovered && isActive ? 1 : 0.97,
                        filter: isHovered && isActive ? "blur(0px)" : "blur(4px)",
                    }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                        {title}
                    </h3>

                    <p
                        className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                        style={{
                            maxWidth: "100%",
                            textWrap: "balance",
                            letterSpacing: "0.5px",
                        }}
                    >
                        {content}
                    </p>
                </motion.div>

                {/* BUTTON */}
                <motion.button
                    className="absolute bottom-6 sm:bottom-8 px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-semibold text-white text-base sm:text-lg transition-all duration-300"
                    style={{
                        background: "linear-gradient(135deg, #DE4DBC, #595CED)",
                        borderTopRightRadius: "16px",
                        borderBottomLeftRadius: "16px",
                    }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 8px 24px rgba(222, 77, 188, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    Explore More
                </motion.button>
            </div>
        </motion.div>
    );
}

export default function Initiatives() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getCardPosition = (index: number): Position =>
        index === currentIndex
            ? "center"
            : (index === (currentIndex - 1 + initiatives.length) % initiatives.length
                ? "left"
                : "right");

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % initiatives.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
    };

    return (
        <section
            className="relative min-h-screen py-24 px-6"
            style={{ backgroundColor: "#040115" }}
        >
            {/* Background Image */}
            <div className="absolute left-0 top-0 h-full w-full sm:w-3/4 lg:w-2/3 pointer-events-none z-[0]">
                <Image
                    src="/assets/9.png"
                    alt="Initiatives Background"
                    fill
                    className="object-contain object-left opacity-70"
                    priority
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-[10]">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                        Initiatives
                    </h2>

                    <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                        To fulfill our vision to build an ecosystem where networking and entrepreneurial
                        mindset are encouraged, these initiatives guide future entrepreneurs.
                    </p>
                </div>

                {/* CARDS */}
                <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] flex items-center justify-center overflow-hidden">
                    {initiatives.map((initiative, index) => (
                        <InitiativeCard
                            key={index}
                            {...initiative}
                            isActive={index === currentIndex}
                            position={getCardPosition(index)}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}

                    {/* Navigation Arrows - Mobile/Tablet Only */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 md:left-6 lg:hidden top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300"
                        aria-label="Previous card"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 md:right-6 lg:hidden top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all duration-300"
                        aria-label="Next card"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
