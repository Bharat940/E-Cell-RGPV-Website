"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState, useRef, useEffect, useCallback } from "react";

const i3Cards = [
  {
    number: "01",
    title: "Identify",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "02",
    title: "Innovate",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    number: "03",
    title: "Incubate",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

interface I3CardProps {
  number: string;
  title: string;
  content: string;
}

function I3Card({ number, title, content }: I3CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkTouchDevice();
    checkReducedMotion();
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkWidth = () => {
      const width = window.innerWidth;

      if (width < 640) setScreenSize("mobile");
      else if (width < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkWidth, 150);
    };

    checkWidth();
    window.addEventListener("resize", debouncedResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  const TARGET_X =
    screenSize === "mobile" ? -15 : screenSize === "tablet" ? -25 : -30;

  const TARGET_Y =
    screenSize === "mobile" ? -20 : screenSize === "tablet" ? -35 : -50;

  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState(0);

  useEffect(() => {
    if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
  }, []);

  const enableAnimations = !isTouchDevice && !prefersReducedMotion;


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => enableAnimations && setIsHovered(true)}
      onMouseLeave={() => enableAnimations && setIsHovered(false)}
      className="relative group"
    >
      <div
        className="relative bg-white/5 backdrop-blur-sm p-6 sm:p-10 md:min-h-[470px] md:p-12 overflow-hidden transition-all duration-500"
        style={{
          borderTopRightRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
          minHeight: "360px",
          border: "2px solid transparent",
          background: (isHovered && enableAnimations)
            ? "linear-gradient(#040115, #040115) padding-box, linear-gradient(135deg, #FF1493, #87CEEB) border-box"
            : "rgba(255,255,255,0.05)",
          willChange: enableAnimations ? "background" : "auto",
        }}
      >
        {/* Grainy texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderTopRightRadius: "1.5rem",
            borderBottomLeftRadius: "1.5rem",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E")`,
            opacity: 0.4,
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative w-full h-full flex items-center justify-center">
          {/* GHOST TRAIL - Only render on desktop with animations enabled */}
          {enableAnimations && (
            <motion.div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              animate={{
                x: isHovered ? TARGET_X : 0,
                y: isHovered ? TARGET_Y : 0,
                opacity: isHovered ? 0.35 : 0,
              }}
              transition={{
                x: {
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.4, 0, 0.2, 1],
                },
                y: {
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.4, 0, 0.2, 1],
                },
                opacity: {
                  duration: 0.6,
                  delay: isHovered ? 0 : 0.12,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <div
                className={`flex justify-start lg:justify-center transition-all duration-600`}
              >
                <div className="flex flex-col items-start">
                  <h3
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[8.5rem] font-bold font-[var(--font-clash-display)] mb-5"
                    style={{
                      color: "#1D86C2",
                      filter:
                        screenSize === "mobile"
                          ? "blur(0.8px)"
                          : screenSize === "tablet"
                            ? "blur(1.2px)"
                            : "blur(2.5px)",
                    }}
                  >
                    {number}
                  </h3>

                  <div className="inline-block">
                    <h4
                      className="text-xl md:text-2xl font-bold text-white font-[var(--font-clash-display)] mb-2"
                      style={{
                        opacity: 0.25,
                        filter:
                          screenSize === "mobile"
                            ? "blur(0.6px)"
                            : screenSize === "tablet"
                              ? "blur(1px)"
                              : "blur(1.5px)",
                      }}
                    >
                      {title}
                    </h4>

                    {/* Ghost underline */}
                    <div
                      className="h-1 rounded-full"
                      style={{
                        width: `${titleWidth * 0.8}px`,
                        background: "linear-gradient(135deg,#FF1493,#87CEEB)",
                        opacity: 0.22,
                        filter:
                          screenSize === "mobile"
                            ? "blur(0.5px)"
                            : screenSize === "tablet"
                              ? "blur(0.8px)"
                              : "blur(1.2px)",
                      }}
                    />
                  </div>

                  {/* Ghost Content */}
                  <p
                    className="mt-10 text-sm max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed font-[var(--font-geist-sans)] text-left"
                    style={{
                      opacity: 0.2,
                      filter:
                        screenSize === "mobile"
                          ? "blur(0.6px)"
                          : screenSize === "tablet"
                            ? "blur(1px)"
                            : "blur(1.5px)",
                    }}
                  >
                    {content}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* MAIN CONTENT - dynamic alignment */}
          <motion.div
            className="relative z-20 w-full"
            animate={{
              x: (isHovered && enableAnimations) ? TARGET_X : 0,
              y: (isHovered && enableAnimations) ? TARGET_Y : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ willChange: enableAnimations ? "transform" : "auto" }}
          >
            <div
              className={`flex justify-start lg:justify-center transition-all duration-600`}
            >
              <div className="flex flex-col items-start">
                {/* Number */}
                <motion.h3
                  className="text-6xl sm:text-7xl md:text-7xl lg:text-[8.5rem] font-bold mb-5 font-[var(--font-clash-display)]"
                  animate={{ color: (isHovered && enableAnimations) ? "#4BA3D1" : "#1D86C2" }}
                  transition={{ duration: 0.3 }}
                >
                  {number}
                </motion.h3>

                <div className="inline-block">
                  {/* Title */}
                  <h4
                    ref={titleRef}
                    className="text-2xl sm:text-2xl md:text-2xl font-bold text-white mb-2 font-[var(--font-clash-display)]"
                  >
                    {title}
                  </h4>

                  {/* Underline */}
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: `${titleWidth * 0.8}px`,
                      background: "linear-gradient(135deg,#FF1493,#87CEEB)",
                    }}
                  />
                </div>

                {/* Content Section */}
                <motion.p
                  className="mt-10 text-sm max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed font-[var(--font-geist-sans)] text-left"
                  animate={{
                    opacity: (isHovered && enableAnimations) || isTouchDevice ? 1 : 0,
                    y: (isHovered && enableAnimations) || isTouchDevice ? 0 : 10,
                  }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  style={{ willChange: enableAnimations ? "opacity, transform" : "auto" }}
                >
                  {content}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function I3() {
  return (
    <section
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#040115" }}
    >
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-end items-center">
        <div className="relative h-full w-[70%]">
          <Image
            src="/assets/10.png"
            alt="bg"
            fill
            className="opacity-70"
            style={{
              objectFit: "contain",
              objectPosition: "right center",
              paddingTop: "80px",
              paddingBottom: "80px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-20 font-[var(--font-clash-display)]">
          WE BELIEVE IN I 3
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {i3Cards.map((c, i) => (
            <I3Card key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
