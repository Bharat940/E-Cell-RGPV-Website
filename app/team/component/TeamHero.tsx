import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative w-full overflow-visible">
      
      {/* ===== HERO CONTENT AREA ===== */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#070b1a]">

        {/* Background image ONLY behind content */}
        <Image
          src="/assets/hero-bg.png"
          alt="Team background"
          fill
          priority
          className="object-cover opacity-40"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b1a]/90 via-[#070b1a]/70 to-[#070b1a]/95" />

        {/* Text */}
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest text-white">
          TEAM E-CELL
        </h1>
      </div>

      {/* ===== CURVED STAGE (OVERLAP) ===== */}
      <div className="relative -mt-[18vh] flex justify-center z-20 pointer-events-none">
        <Image
          src="/assets/curvedStage.png"
          alt="Curved stage"
          width={1600}
          height={500}
          className="w-full max-w-none"
        />
      </div>

    </section>
  );
}
