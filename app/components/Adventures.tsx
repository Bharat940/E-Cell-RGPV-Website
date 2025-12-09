"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Adventures() {
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
        </section>
    );
}
