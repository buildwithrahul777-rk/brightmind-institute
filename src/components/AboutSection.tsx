import React from 'react';
import { ArrowRight, Quote, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onKnowMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onKnowMore }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission, Vision, and Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight leading-tight">
              Building Brighter Futures
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At BrightMind Coaching Institute, we believe every student has unique potential. Our mission is to provide quality education, personalized guidance and a supportive environment to help students achieve their dreams.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Student-Centric Pedagogy</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ethical & Transparent Practices</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Continuous Parent Engagement</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Rigorous Doubt Clearing</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white text-sm font-bold tracking-wide uppercase px-6 py-3 rounded-xl transition shadow-sm hover:shadow active:scale-[0.99]"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Campus Image + Quote Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
              <img
                src="/src/assets/images/institute_campus_1789604759015.jpg"
                alt="BrightMind Coaching Institute Campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Building Signage overlay badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md border border-slate-200">
                <span className="text-xs font-black text-[#0b2545] tracking-tight">BrightMind</span>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase">Coaching Institute</span>
              </div>

              {/* Quote Card (as seen in reference design) */}
              <div className="absolute bottom-6 right-6 max-w-xs bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-3">
                <Quote className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-bold text-[#0b2545] leading-snug">
                    "Education today, a better tomorrow."
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mt-1 block">
                    Institute Motto
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-right">
              <span className="text-[11px] text-slate-400 font-mono">
                *Demo Content — easily replaceable with your institute photos & vision.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
