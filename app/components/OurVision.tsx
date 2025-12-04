"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function OurVision() {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#040115' }}
        >
            {/* Background Image - Left aligned, fully visible */}
            <div className="absolute left-0 top-0 h-full w-full sm:w-3/4 lg:w-2/3 pointer-events-none z-[0]">
                <Image
                    src="/assets/9.png"
                    alt="Vision Background"
                    fill
                    className="object-contain object-left opacity-70"
                    priority
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
            </div>

            {/* Content Container - Using relative positioning for overlap */}
            <div className="relative z-[10] max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
                {/* Heading positioned to allow overlap */}
                <div className="relative w-full flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center px-4 relative z-[5]"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-[var(--font-clash-display)]">
                            OUR VISION
                        </h2>
                    </motion.div>
                </div>

                {/* Liquid Glass Card - Positioned to overlap bottom half of heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 max-w-4xl w-full z-[15]"
                >
                    {/* Card with ultra-transparent liquid glass effect and selective border radius */}
                    <div
                        className="relative backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-white/30 shadow-2xl overflow-hidden"
                        style={{
                            borderTopRightRadius: '2rem',
                            borderBottomLeftRadius: '2rem',
                            borderTopLeftRadius: '0',
                            borderBottomRightRadius: '0'
                        }}
                    >
                        {/* Content - Full width with justified text and responsive sizing */}
                        <div className="relative z-10 w-full">
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose text-white font-[var(--font-geist-sans)] text-justify w-full hyphens-auto" lang="en">
                                <span className="font-semibold text-white">e-Entrepreneurship Cell, RGPV</span> is a non-profit organization that believes entrepreneurship is pivotal for our country's development. It was established with the purpose of creating, fostering, and promoting the spirit of developing a culture of entrepreneurship in our surroundings. The team here works to encourage students to embrace the idea of starting their venture and dispel the fear of starting a startup. We guide young entrepreneurs and technopreneurs in their journey from campus to incubators and support them in transforming their budding ideas into successful startups.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
