"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function CurvedStage() {
    return (
        <div className="relative w-full z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex justify-center pointer-events-none"
            >
                <Image
                    src="/assets/adventures_top.png"
                    alt="Curved stage"
                    width={1920}
                    height={300}
                    className="w-full h-auto object-contain"
                />
            </motion.div>
        </div>
    );
}
