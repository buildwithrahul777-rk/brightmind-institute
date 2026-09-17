import React from 'react';
import {
  GraduationCap,
  Users2,
  FileCheck2,
  HelpCircle,
  Compass,
  MonitorCheck,
  CheckCircle,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case 'Users':
        return <Users2 className="w-6 h-6 text-amber-600" />;
      case 'FileText':
        return <FileCheck2 className="w-6 h-6 text-red-500" />;
      case 'HelpCircle':
        return <HelpCircle className="w-6 h-6 text-orange-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-600" />;
      case 'Laptop':
        return <MonitorCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>WHY CHOOSE BRIGHTMIND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            More Than Just Coaching
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            We focus on overall development, not just marks.
          </p>
        </div>

        {/* 6 Feature Cards (2 rows of 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:scale-105 transition">
                {getFeatureIcon(item.icon)}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[#0b2545] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
