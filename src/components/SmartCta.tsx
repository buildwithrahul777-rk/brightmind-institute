import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { HIGHLIGHT_COUNTERS } from '../data/mockData';

interface SmartCtaProps {
  onOpenCounselling: () => void;
}

export const SmartCta: React.FC<SmartCtaProps> = ({ onOpenCounselling }) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navy Smart CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0b2545] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/50">
          {/* Subtle decorative background glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0 text-amber-300">
                <Lightbulb className="w-8 h-8 animate-pulse text-amber-300" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                  Not Sure Which Course is Right for You?
                </h3>
                <p className="text-sm sm:text-base text-blue-100/80 max-w-xl">
                  Get free counselling from our academic team and find the right program for your goals.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenCounselling}
              className="shrink-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <span>GET FREE COUNSELLING</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Item Milestone Stat Band */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2 pb-6 border-b border-slate-100">
          {HIGHLIGHT_COUNTERS.map((stat, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                {stat.label}
              </div>
              <div className="w-10 h-1 bg-blue-600 rounded-full mt-2" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
