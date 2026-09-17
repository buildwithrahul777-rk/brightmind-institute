import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Real stories. Real success.
          </p>
          <div className="mt-2 inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wider">
            DEMO TESTIMONIAL
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              
              {/* Avatar placeholder with initials */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
                  {current.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-400 p-1.5 rounded-full shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-slate-900" />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-center sm:text-left space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-slate-700 italic font-medium leading-relaxed">
                  "{current.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-base font-bold text-[#0b2545]">
                      — {current.name}
                    </div>
                    <div className="text-xs font-semibold text-blue-600">
                      {current.exam}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 self-center sm:self-auto">
                    {current.role}
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0b2545] hover:bg-slate-50 shadow-xs transition"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0b2545] hover:bg-slate-50 shadow-xs transition"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 text-center text-xs text-slate-400">
            *Demo student stories — easily customizable with your institute's real toppers & testimonials.
          </div>

        </div>

      </div>
    </section>
  );
};
