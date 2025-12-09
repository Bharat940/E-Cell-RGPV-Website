import React from "react";
import { Mic, FileText, FileCheck, SpellCheck, Sparkles } from "lucide-react";

const Provide = () => {
  return (
    <div className="bg-gradient-to-d from-[#16103c] to-[#0f0b28]">
    <h1 className=" text-center text-4xl  my-4   z-100">What we Provide</h1>
    <section className="w-full  flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background Gradient/Glow Effects to match the deep blue vibe */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1a1a40] via-[#08081A] to-[#050511] opacity-80" />
      

      <div className="relative z-10 max-w-5xl w-full">
        
        {/* --- ROW 1: 3 Columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10">
          
          {/* Item 1 */}
          <FeatureItem
            icon={<Mic className="w-8 h-8 text-white/90" strokeWidth={1.5} />}
            title="Entrepreneurship"
            description="with human-level accuracy"
            className="md:border-r border-white/10"
          />

          {/* Item 2 */}
          <FeatureItem
            icon={<FileText className="w-8 h-8 text-white/90" strokeWidth={1.5} />}
            title="Student Support"
            description="from your scattered thoughts"
            className="md:border-r border-white/10"
          />

          {/* Item 3 */}
          <FeatureItem
            icon={<FileCheck className="w-8 h-8 text-white/90" strokeWidth={1.5} />}
            title="Incubation"
            description="items from your meeting notes"
            className="" // No right border on the last item
          />
        </div>

        {/* --- ROW 2: 2 Columns (Centered) --- */}
        {/* We use a specific grid setup here to center the 2 items visually */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[66%] mx-auto">
          
          {/* Item 4 */}
          <FeatureItem
            icon={<SpellCheck className="w-8 h-8 text-white/90" strokeWidth={1.5} />}
            title="Mentoring"
            description="and improve your writing"
            className="md:border-r border-white/10"
          />

          {/* Item 5 */}
          <FeatureItem
            icon={<Sparkles className="w-8 h-8 text-white/90" strokeWidth={1.5} />}
            title="Collaboration"
            description="custom prompts"
            className=""
          />
        </div>

      </div>
    </section>
    </div>
  );
};

// Reusable Sub-component for individual items
const FeatureItem = ({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center group ${className}`}>
      {/* Icon Container */}
      <div className="mb-6 p-3 rounded-lg bg-transparent group-hover:bg-white/5 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-white text-lg font-medium mb-2 tracking-wide">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-400 text-sm font-light leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default Provide;