import React from 'react';
import { Atom, Stethoscope, BookOpen, Sparkles, ArrowUpRight } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/mockData';

interface CategoryStripProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-blue-600" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="relative -mt-4 sm:-mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/90 p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group flex items-center justify-between p-3 sm:p-3.5 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/80 transition text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  {getIcon(cat.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-[#0b2545] tracking-tight">
                      {cat.title}
                    </span>
                    <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      {cat.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {cat.subtitle}
                  </div>
                </div>
              </div>

              <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
