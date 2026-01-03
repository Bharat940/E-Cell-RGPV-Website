"use client";

import Image from "next/image";
import { useState } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const members: Member[] = Array(6).fill({
  name: "HARSH GUPTA",
  role: "Execution Team Member",
  image: "/assets/team/harsh.png",
});

export default function ExecutionTeam() {
  const [activeMember, setActiveMember] = useState<Member | null>(null);

  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* Section heading */}
      <h2 className="text-center text-3xl font-bold tracking-widest mb-20">
        EXECUTION TEAM
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {members.map((member, index) => (
          <button
            key={index}
            onClick={() => setActiveMember(member)}
            className="group relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:scale-105 transition-all duration-300"
          >
            {/* Accent line */}
            <span className="absolute left-4 top-6 h-8 w-[2px] bg-gradient-to-b from-pink-500 to-purple-500" />

            {/* Vertical Name */}
            <span className="absolute left-6 bottom-6 text-xs tracking-widest rotate-180 [writing-mode:vertical-rl] text-white/70">
              {member.name}
            </span>

            {/* Image */}
            <div className="relative w-full h-56 flex justify-center items-end">
              <Image
                src="/assets/exeteam.png"
                alt={member.name}
                width={180}
                height={220}
                className="object-contain grayscale group-hover:grayscale-0 transition"
              />
            </div>

            {/* Glow number (top right) */}
            <span className="absolute top-4 right-4 text-4xl font-bold text-purple-500/30">
              1
            </span>
          </button>
        ))}
      </div>

      {/* ================= POPUP MODAL ================= */}
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-md w-full mx-4 rounded-2xl bg-[#0b1025] border border-white/10 p-8 animate-scaleIn">

            {/* Close button */}
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <div className="flex justify-center mb-6">
              <Image
                src={activeMember.image}
                alt={activeMember.name}
                width={200}
                height={240}
                className="grayscale"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-center">
              {activeMember.name}
            </h3>
            <p className="text-center text-purple-400 mt-2">
              {activeMember.role}
            </p>

            <p className="text-center text-sm text-white/70 mt-4">
              Passionate team member contributing to innovation, execution,
              and growth of E-Cell initiatives.
            </p>
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </section>
  );
}
