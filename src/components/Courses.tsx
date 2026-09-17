import React from 'react';
import {
  Atom,
  Stethoscope,
  BookOpen,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { Course } from '../types';

interface CoursesProps {
  onViewCourseDetails: (course: Course) => void;
  onEnquireCourse: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({
  onViewCourseDetails,
  onEnquireCourse,
}) => {
  const getCourseIcon = (category: Course['category']) => {
    switch (category) {
      case 'JEE':
        return <Atom className="w-6 h-6 text-blue-600" />;
      case 'NEET':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'SCHOOL':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'FOUNDATION':
        return <BarChart3 className="w-6 h-6 text-purple-600" />;
      default:
        return <Atom className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="courses" className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>OUR COURSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Popular Courses
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Choose the right program for your goals. Designed by experts, taught with passion.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              id={`course-${course.category.toLowerCase()}`}
              className="flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Top Banner / Accent */}
              <div className={`p-6 ${course.colorScheme.bgTint} border-b ${course.colorScheme.border} transition-colors`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCourseIcon(course.category)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${course.colorScheme.tagBg} ${course.colorScheme.tagText}`}>
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0b2545] tracking-tight">
                  {course.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  {course.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-5">
                    {course.description}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 block">
                      Key Inclusions
                    </span>
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onViewCourseDetails(course)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0b2545] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold tracking-wide uppercase transition shadow-xs group-hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onEnquireCourse(course.title)}
                    className="w-full text-center py-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 hover:underline transition"
                  >
                    Enquire for this batch →
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
