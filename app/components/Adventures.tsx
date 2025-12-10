"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
            <div className="relative w-full min-h-screen flex items-center justify-center py-20">
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

