import React from 'react';
import { X, CheckCircle2, Calendar, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnquireNow: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnquireNow,
}) => {
  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with tint */}
        <div className={`p-6 sm:p-8 ${course.colorScheme.bgTint} border-b ${course.colorScheme.border}`}>
          <div className="flex items-start justify-between">
            <div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${course.colorScheme.tagBg} ${course.colorScheme.tagText}`}>
                {course.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b2545] tracking-tight mt-2">
                {course.title}
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                {course.subtitle} • {course.targetExam}
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 flex items-center justify-center shadow-xs transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-slate-400 font-medium block">Duration</span>
                <span className="font-bold text-slate-800">{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <div>
                <span className="text-slate-400 font-medium block">Eligibility</span>
                <span className="font-bold text-slate-800">{course.eligibility}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">
              Program Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Syllabus & Learning Module Highlights */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Curriculum & Testing Methodology</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.syllabusHighlights.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Highlight Box */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
            <span className="text-base">💡</span>
            <div>
              <span className="font-bold">Faculty Guarantee: </span>
              {course.keyHighlights}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              *Batch schedules & seat availability confirmed during counselling.
            </div>

            <button
              onClick={() => {
                onClose();
                onEnquireNow(course.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-md"
            >
              <span>Book Free Demo For This Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
