import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onOpenDemoBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDemoBooking }) => {
  return (
    <section className="relative py-20 bg-[#081c36] text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
      
      {/* Watermark quote */}
      <div className="absolute right-6 bottom-4 text-7xl lg:text-9xl font-black text-white/[0.03] select-none pointer-events-none hidden md:block">
        EXCELLENCE
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>ADMISSIONS OPEN FOR NEXT ACADEMIC SESSION</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
          Ready to Take the Next Step?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto font-medium">
          Join thousands of students building their future, one step at a time.
        </p>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoBooking}
            className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-xl transition shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-amber-300/50"
          >
            <span>BOOK A FREE DEMO CLASS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Small supporting phrase */}
        <div className="pt-4 flex items-center justify-center gap-4 text-xs font-bold text-blue-200 uppercase tracking-widest">
          <span>Small Steps. Big Dreams.</span>
          <span>•</span>
          <span className="font-mono text-slate-400">DEMO CONTENT</span>
        </div>

      </div>
    </section>
  );
};
