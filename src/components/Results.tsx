import React from 'react';
import { Trophy, Stethoscope, FileCheck, Users, Info } from 'lucide-react';
import { RESULTS_STATS } from '../data/mockData';

export const Results: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-amber-500" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-teal-500" />;
      case 'Award':
        return <FileCheck className="w-8 h-8 text-emerald-500" />;
      case 'Smile':
        return <Users className="w-8 h-8 text-orange-500" />;
      default:
        return <Trophy className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Our Results Speak
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Consistent performance. Real student stories.
          </p>
        </div>

        {/* 4 Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RESULTS_STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b2545] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-1.5">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mandatory Demo Disclaimer Notice */}
        <div className="mt-8 text-center flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>Demo statistics — replace with verified institute data.</span>
        </div>

      </div>
    </section>
  );
};
