"use client";

import { motion } from "motion/react";

function Onmission() {
  return (
    <div className="flex items-center justify-center mt-36">
        <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12 max-w-4xl w-full z-[15]"
            >
                {/* Card with ultra-transparent liquid glass effect and selective border radius */}
                <div
                    className="relative backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-white/30 shadow-2xl overflow-hidden rounded-xl" 
                    
                >
                    {/* Content - Full width with justified text and responsive sizing */}
                    <div className="relative z-10 w-full sm:pr-20">
                        <h1 className="font-extrabold text-lg sm:text-2xl md:text-4xl pb-2">On its mission towards building an enterprising India,</h1>
                        <p className="text-sm sm:text-base md:text-lg   text-white  w-full  sm:pr-20 md:pr-40" lang="en">
                            Provides great opportunities for start-ups, colleges, alumini, and corporates to get involved with us.
                        </p>
                        <button className="bg-blue-600 px-4 py-2 rounded-md mt-4">Get Started</button>
                    </div>
                </div>
        </motion.div>
    </div>
  )
}

export default Onmission
