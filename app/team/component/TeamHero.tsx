"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TeamHero() {
  return (
    <div className="relative w-full bg-[#040115]">

      {/* Hero Section - Full viewport */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <Image
            src="/assets/TeamHero-bg.png"
            alt="Team background"
            width={800}
            height={800}
            priority
            className="object-contain opacity-40"
          />
        </div>

        {/* Blue Glow */}
        <div className="
          absolute w-[400px] h-[300px]
          md:w-[800px] md:h-[600px]
          bg-[#407EDD] rounded-full
          blur-[200px] opacity-30
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none z-[5]
        "></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[6]"></div>

        {/* Radial Gradient */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[8]">
          <div
            className="w-[900px] h-[600px] rounded-full blur-[100px] opacity-[0.15]"
            style={{
              background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, rgba(147, 197, 253, 0.5) 30%, rgba(59, 130, 246, 0.2) 60%, transparent 80%)'
            }}
          />
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-[10] text-4xl md:text-5xl lg:text-7xl tracking-widest text-white drop-shadow-2xl font-(--font-clash-display)"
        >
          TEAM E-CELL
        </motion.h1>
      </div>

    </div>
  );
}
