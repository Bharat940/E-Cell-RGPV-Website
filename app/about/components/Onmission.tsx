"use client";

import { motion } from "motion/react";

function Onmission() {
  return (
    <div className="flex items-center justify-center mt-36 pt-16 relative bg-gradient-to-b from-[#020014] to-[#0f0b28] px-10">
      
      {/* Background Glow */}
      <div className="
        absolute w-[300px] h-[200px]
        md:w-[650px] md:h-[500px]
        bg-[#407EDD] rounded-full
        blur-[200px] opacity-50
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
      "></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-4xl w-full z-[15] 2xl:max-w-6xl"
      >

        {/* Glassmorphism Card */}
        <div
          className="
            relative
            p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16
            rounded-2xl
            border border-white/10
            backdrop-blur-xl
            bg-white/5
            shadow-[0_8px_32px_rgba(0,0,0,0.2)]
            overflow-hidden
          "
        >
          {/* Inner Shine Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-40 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 w-full sm:pr-20">
            <h1 className="font-extrabold text-lg sm:text-2xl md:text-4xl leading-snug text-white">
              On its mission towards building an enterprising India,
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 w-full sm:pr-20 md:pr-40 mt-3">
              Provides great opportunities for start-ups, colleges, alumni, and corporates to get involved with us.
            </p>

            <button className="
              bg-blue-600 hover:bg-blue-700 transition
              px-4 py-2 rounded-md mt-6 text-white font-medium
            ">
              Get Started
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default Onmission;
