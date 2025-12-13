"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

// Adventure data
const adventures = [
    {
        id: 1,
        image: "/assets/adventures-1.png",
        title: "Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        angle: 30, // Shifted 30° from vertical (0°)
    },
    {
        id: 2,
        image: "/assets/adventures-2.png",
        title: "Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        angle: 120, // Shifted 30° from horizontal right (90°)
    },
    {
        id: 3,
        image: "/assets/adventures-3.png",
        title: "Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        angle: 210, // Shifted 30° from vertical bottom (180°)
    },
    {
        id: 4,
        image: "/assets/adventures-4.png",
        title: "Startup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        angle: 300, // Shifted 30° from horizontal left (270°)
    },
];

interface AdventureItemProps {
    image: string;
    title: string;
    description: string;
    angle: number;
}

function AdventureItem({ image, title, description, angle }: AdventureItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Detect screen size and handle mounting
    useEffect(() => {
        setIsMounted(true);

        const updateScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    // Calculate position on the radar (responsive radius)
    const radian = (angle * Math.PI) / 180;
    const radiusPercent = isMobile ? 38 : isTablet ? 40 : 42;
    const xPercent = radiusPercent * Math.cos(radian);
    const yPercent = radiusPercent * Math.sin(radian);

    const iconSize = isMobile ? 60 : isTablet ? 80 : 100;

    const cardWidth = isMobile ? "200px" : isTablet ? "240px" : "280px";

    const getCardPosition = () => {
        if (!isMobile && !isTablet) {
            return { left: "0", top: "0", transform: "none" };
        }

        if (angle >= 0 && angle < 90) {
            return {
                left: isMobile ? "-70px" : "-40px",
                top: isMobile ? "0" : "10px",
                transform: "none"
            };
        }
        // Right (angle around 120°)
        else if (angle >= 90 && angle < 180) {
            return {
                left: isMobile ? "-140px" : "-180px",
                top: isMobile ? "-20px" : "0",
                transform: "none"
            };
        }
        // Bottom (angle around 210°)
        else if (angle >= 180 && angle < 270) {
            return {
                left: isMobile ? "-70px" : "-40px",
                top: isMobile ? "-120px" : "-140px",
                transform: "none"
            };
        }
        // Left (angle around 300°)
        else {
            return {
                left: isMobile ? "0" : "20px",
                top: isMobile ? "-20px" : "0",
                transform: "none"
            };
        }
    };

    const cardPosition = getCardPosition();

    if (!isMounted) {
        return null;
    }

    return (
        <div
            className="absolute"
            style={{
                left: `calc(50% + ${xPercent}%)`,
                top: `calc(50% + ${yPercent}%)`,
                transform: "translate(-50%, -50%)",
                zIndex: 50,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            <motion.div
                className="relative cursor-pointer"
                animate={{
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 0.8 : 1,
                    x: isHovered ? (isMobile ? -10 : -20) : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    src={image}
                    alt={title}
                    width={iconSize}
                    height={iconSize}
                    className="object-contain"
                    style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: `${iconSize}px`,
                        maxHeight: `${iconSize}px`,
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute pointer-events-none"
                style={{
                    left: cardPosition.left,
                    top: cardPosition.top,
                    transform: cardPosition.transform,
                    width: cardWidth,
                }}
            >
                <div
                    className="relative backdrop-blur-sm overflow-hidden"
                    style={{
                        borderTopRightRadius: isMobile ? "1rem" : "1.5rem",
                        borderBottomLeftRadius: isMobile ? "1rem" : "1.5rem",
                        background: "linear-gradient(135deg, rgba(107, 95, 193, 0.25) 0%, rgba(107, 95, 193, 0.1) 50%, rgba(60, 50, 120, 0.15) 100%)",
                        boxShadow: "0px 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(107, 95, 193, 0.3)",
                        padding: isMobile ? "1rem" : isTablet ? "1.25rem" : "1.5rem",
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            borderTopRightRadius: isMobile ? "1rem" : "1.5rem",
                            borderBottomLeftRadius: isMobile ? "1rem" : "1.5rem",
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
                            opacity: 0.6,
                            mixBlendMode: "overlay",
                        }}
                    />

                    <div className="relative z-10 text-center">
                        <h3
                            className="font-bold text-white font-[var(--font-clash-display)] uppercase tracking-wider"
                            style={{
                                fontSize: isMobile ? "1rem" : isTablet ? "1.125rem" : "1.5rem",
                                marginBottom: isMobile ? "0.5rem" : "0.75rem",
                            }}
                        >
                            {title}
                        </h3>
                        <p
                            className="text-white/90 leading-relaxed font-[var(--font-geist-sans)]"
                            style={{
                                fontSize: isMobile ? "0.7rem" : "0.875rem",
                                lineHeight: isMobile ? "1.4" : "1.6",
                            }}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Adventures() {
    // Generate intersection circles for each concentric circle
    // Radius is now a percentage of the radar size
    const generateIntersectionCircles = (radiusPercent: number, circleClass: string) => {
        // Only show circles on major horizontal and vertical lines (4 cardinal directions)
        const angles = [0, 90, 180, 270];
        return angles.map((angle, index) => {
            const radian = (angle * Math.PI) / 180;
            // Calculate position as percentage
            const xPercent = radiusPercent * Math.cos(radian);
            const yPercent = radiusPercent * Math.sin(radian);

            return (
                <div
                    key={`${circleClass}-${index}`}
                    className="intersection-dot"
                    style={{
                        left: `calc(50% + ${xPercent}%)`,
                        top: `calc(50% + ${yPercent}%)`,
                    }}
                />
            );
        });
    };

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: "#040115" }}
        >
            {/* Background Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
                <Image
                    src="/assets/adventures_top.png"
                    alt="Adventures Background"
                    fill
                    className="opacity-80"
                    priority
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                {/* Gradient Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040115]/80" />

                {/* Content Container */}
                <div className="absolute inset-0 z-10 flex items-end justify-center pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center w-full max-w-7xl"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-[var(--font-clash-display)] tracking-wide px-4 sm:px-6 md:px-8 lg:px-12">
                            ADVENTURES AT ECELL
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* Radar Section */}
            <div className="relative w-full min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 pb-32 sm:pb-36 md:pb-40">
                <div className="radar-container">
                    <div className="radar">
                        {/* Radial Lines */}
                        <div className="radar-lines"></div>

                        {/* 4 Concentric Circles with Purple Gradient */}
                        <div className="radar-circle radar-circle-1"></div>
                        <div className="radar-circle radar-circle-2"></div>
                        <div className="radar-circle radar-circle-3"></div>
                        <div className="radar-circle radar-circle-4"></div>

                        {/* Intersection Circles - Using percentages */}
                        {generateIntersectionCircles(12.5, 'circle-1')} {/* 25% / 2 = 12.5% */}
                        {generateIntersectionCircles(25, 'circle-2')}   {/* 50% / 2 = 25% */}
                        {generateIntersectionCircles(37.5, 'circle-3')} {/* 75% / 2 = 37.5% */}
                        {generateIntersectionCircles(49, 'circle-4')}   {/* 98% / 2 = 49% */}

                        {/* Adventure Items */}
                        {adventures.map((adventure) => (
                            <AdventureItem
                                key={adventure.id}
                                image={adventure.image}
                                title={adventure.title}
                                description={adventure.description}
                                angle={adventure.angle}
                            />
                        ))}

                        {/* Sweep Effect */}
                        <div className="sweep"></div>

                        {/* Logo at Center */}
                        <div className="radar-logo">
                            <Image
                                src="/assets/E-Cell_logo[1] 1.png"
                                alt="E-Cell Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

