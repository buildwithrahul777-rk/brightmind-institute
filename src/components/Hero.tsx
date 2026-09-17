import React from 'react';
import {
  ArrowRight,
  Phone,
  GraduationCap,
  Users,
  FileCheck,
  TrendingUp,
  Sparkles,
  Award,
} from 'lucide-react';

interface HeroProps {
  onOpenDemoBooking: () => void;
  onOpenTalkToUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoBooking, onOpenTalkToUs }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white">
      {/* Subtle background ambient circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-sky-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>LEARN • PRACTICE • GROW • SUCCEED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b2545] leading-[1.12]">
              Your Future <br />
              Starts <span className="text-blue-600 relative inline-block">
                Here
                <svg className="absolute -bottom-1.5 left-0 w-full text-blue-200 -z-10" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Expert faculty. Personalized guidance. Proven learning systems. Join BrightMind and take the first step towards your dream career.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenDemoBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <span>BOOK A FREE DEMO CLASS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenTalkToUs}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0b2545] border border-slate-300 hover:border-slate-400 font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl transition shadow-xs active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>TALK TO US</span>
              </button>
            </div>

            {/* Trust points underneath hero (4 item grid) */}
            <div className="w-full pt-6 mt-4 border-t border-slate-100">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3">
                
                {/* 1: Experienced Faculty */}
                <div className="flex flex-col items-start p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-1.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0b2545] leading-tight">Experienced Faculty</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">Expert educators</span>
                </div>

                {/* 2: Small Batch Size */}
                <div className="flex flex-col items-start p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-1.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0b2545] leading-tight">Small Batch Size</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">Focused attention</span>
                </div>

                {/* 3: Regular Tests & Analysis */}
                <div className="flex flex-col items-start p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0b2545] leading-tight">Regular Tests & Analysis</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">Continuous tracking</span>
                </div>

                {/* 4: Personal Mentorship */}
                <div className="flex flex-col items-start p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-1.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#0b2545] leading-tight">Personal Mentorship</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">1-on-1 guidance</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Premium Student Visual with Trust Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Background shape */}
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-sky-400/20 rounded-3xl transform rotate-1 scale-102 -z-10" />

              {/* Main Student Image */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-white aspect-[3/4]">
                <img
                  src="/src/assets/images/hero_student_1789604747008.jpg"
                  alt="BrightMind confident student holding textbooks"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top-Right Motivational Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-md py-1.5 px-3 rounded-full flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[#0b2545]">Better Learning • Brighter Tomorrow</span>
                </div>

                {/* Floating Amber Badge (Dream Study Achieve) */}
                <div className="absolute top-16 -left-3 sm:-left-4 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg transform -rotate-6 border border-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                  <span>Dream • Study • Achieve</span>
                </div>

                {/* Floating Trust Badge: 5000+ Students Trust Us */}
                <div className="absolute bottom-5 right-5 bg-[#0b2545] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-blue-400/30 flex items-center gap-3 animate-in fade-in zoom-in duration-500">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
                      5000+
                    </div>
                    <div className="text-xs font-semibold text-blue-200 mt-0.5">
                      Students Trust Us
                    </div>
                    <div className="text-[9px] text-blue-300/80 uppercase tracking-widest font-mono">
                      *Demo Stat
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
