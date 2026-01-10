"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, PanInfo } from "motion/react";

type Position = "center" | "left" | "right" | "hidden";

const teamMembers = [
  {
    id: 1,
    name: "Parag Raguvanshi",
    role: "Team Supervisor",
    image: "/assets/teamhead.png",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Parag Raguvanshi",
    role: "Team Supervisor",
    image: "/assets/teamhead.png",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Parag Raguvanshi",
    role: "Team Supervisor",
    image: "/assets/teamhead.png",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Parag Raguvanshi",
    role: "Team Supervisor",
    image: "/assets/teamhead.png",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    linkedin: "#"
  }
];

export default function TeamHead() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCardPosition = (index: number): Position => {
    const totalCards = teamMembers.length;
    let relativePos = (index - currentIndex + totalCards) % totalCards;

    if (relativePos > totalCards / 2) {
      relativePos = relativePos - totalCards;
    }

    if (relativePos === 0) return "center";
    if (relativePos === -1 || relativePos === totalCards - 1) return "left";
    if (relativePos === 1 || relativePos === -(totalCards - 1)) return "right";
    return "hidden";
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="relative py-24 text-white overflow-hidden">

      {/* Section title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-widest mb-16 font-(--font-clash-display)">
        TEAM HEAD
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Carousel Container */}
        <div className="relative h-[550px] md:h-[550px] flex items-center justify-center">

          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              isActive={index === currentIndex}
              position={getCardPosition(index)}
              onClick={() => setCurrentIndex(index)}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          ))}

        </div>

        {/* Navigation Arrows - Bottom position, mobile and tablet */}
        <div className="flex lg:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous team member"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next team member"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

interface TeamCardProps {
  member: typeof teamMembers[0];
  isActive: boolean;
  position: Position;
  onClick: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function TeamCard({ member, isActive, position, onClick, onNext, onPrev }: TeamCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive positioning
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop positioning
  const desktopPositions = {
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 40
    },
    left: {
      scale: 0.72,
      x: -650,
      opacity: 0.18,
      filter: "blur(4px)",
      zIndex: 5
    },
    right: {
      scale: 0.72,
      x: 650,
      opacity: 0.18,
      filter: "blur(4px)",
      zIndex: 5
    },
    hidden: {
      scale: 0,
      x: 0,
      opacity: 0,
      filter: "blur(0px)",
      zIndex: 0
    },
  };

  // Mobile positioning - side cards closer and more visible
  const mobilePositions = {
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 40
    },
    left: {
      scale: 0.75,
      x: -240,
      opacity: 0.4,
      filter: "blur(2px)",
      zIndex: 5
    },
    right: {
      scale: 0.75,
      x: 240,
      opacity: 0.4,
      filter: "blur(2px)",
      zIndex: 5
    },
    hidden: {
      scale: 0,
      x: 0,
      opacity: 0,
      filter: "blur(0px)",
      zIndex: 0
    },
  };

  const currentPositions = isMobile ? mobilePositions : desktopPositions;

  return (
    <motion.div
      className="absolute w-full max-w-[320px] md:max-w-[700px] lg:max-w-[750px] cursor-pointer"
      style={{ willChange: isActive ? 'transform, opacity' : 'auto' }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ ...currentPositions[position] }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
      onClick={onClick}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset }: PanInfo) => {
        // Improved swipe detection with direction
        if (offset.x > 100) {
          onPrev();
        } else if (offset.x < -100) {
          onNext();
        }
      }}
    >
      <div className="relative w-full h-[500px] md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-black/80 to-black border border-white/10 shadow-2xl flex flex-col md:flex-row">

        {/* Left Image Section */}
        <div className="relative w-full md:w-[240px] lg:w-[260px] h-[280px] md:h-full order-2 md:order-1 flex items-center justify-center md:block">
          <Image
            src={member.image}
            alt={member.name}
            fill
            priority={isActive}
            className="object-contain object-center grayscale"
          />
        </div>

        {/* Right Content Section */}
        <div className="relative z-10 p-4 md:p-5 lg:p-6 flex-1 flex flex-col justify-center order-1 md:order-2">

          {/* Content - Vertically centered */}
          <div className="space-y-3 md:space-y-4">
            <div>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1 font-(--font-clash-display)">
                Hi, I'm {member.name}
              </h3>
              <p className="text-lg md:text-2xl lg:text-3xl font-bold mb-1 font-(--font-clash-display)">
                I work as {member.role}
              </p>
            </div>

            {/* Description with text truncation for mobile */}
            <p className="text-xs md:text-sm lg:text-base text-white/70 leading-relaxed line-clamp-4 md:line-clamp-5">
              {member.description}
            </p>

            {/* LinkedIn Icon with Text */}
            {isActive && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-row-reverse items-center gap-2 hover:opacity-80 transition-all"
                aria-label={`Visit ${member.name}'s LinkedIn profile`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm md:text-base font-semibold">LinkedIn</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
