import Image from "next/image";
import Link from "next/link";

export default function TeamHead() {
  return (
    <section className="relative py-24 text-white">
      
      {/* Section title */}
      <h2 className="text-center text-4xl font-semibold tracking-widest mb-16">
        TEAM HEAD
      </h2>

      <div className="relative max-w-4xl mx-auto">
        
        {/* Glass card */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          
          {/* Image */}
          <div className="w-40 h-40 relative">
            <Image
              src="/assets/teamhead.png"   
              alt="Team Head"
              fill
              className="object-cover rounded-xl grayscale"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Hi, I&apos;m Parag Raguvanshi
            </h3>
            <p className="text-purple-400 font-medium mb-4">
              I work as Team Supervisor
            </p>

            <p className="text-sm text-white/70 leading-relaxed max-w-md mb-6">
              I believe in building teams that innovate, collaborate, and lead
              with purpose. At E-Cell, we turn ideas into impact.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              LinkedIn →
            </Link>
          </div>
        </div>

        {/* Side blurred image (decorative) */}
        <div className="absolute right-[-80px] top-10 opacity-30 blur-sm hidden md:block">
          <Image
            src="/team/parag.png"
            alt=""
            width={180}
            height={180}
            className="grayscale"
          />
        </div>
      </div>
    </section>
  );
}
