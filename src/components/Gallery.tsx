import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>OUR GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            A Glimpse of Our Institute
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            State-of-the-art facilities crafted for focused learning and academic excellence.
          </p>
          <div className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            DEMO CAMPUS VISUALS
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Smart Classroom */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[0])}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-slate-200 aspect-[4/3]"
          >
            <img
              src={GALLERY_ITEMS[0].imageUrl}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                {GALLERY_ITEMS[0].category}
              </span>
              <h3 className="text-sm font-bold leading-snug">
                {GALLERY_ITEMS[0].title}
              </h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Campus Wall Art / Discipline Quote Card (As shown in reference screenshot) */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-xs aspect-[4/3] relative overflow-hidden group hover:border-blue-300 transition">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-50 rounded-full pointer-events-none" />
            <div className="text-emerald-700 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus Culture</span>
            </div>
            <div className="text-lg sm:text-xl font-black text-[#0b2545] tracking-tight leading-snug uppercase">
              DISCIPLINE <br />
              <span className="text-blue-600">TODAY</span> <br />
              SUCCESS <br />
              <span className="text-emerald-600">TOMORROW</span>
            </div>
            <div className="text-[11px] text-slate-400 font-medium mt-3">
              Values instilled in every lecture
            </div>
          </div>

          {/* Card 3: Library Study Hall */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[1])}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-slate-200 aspect-[4/3]"
          >
            <img
              src={GALLERY_ITEMS[1].imageUrl}
              alt={GALLERY_ITEMS[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                {GALLERY_ITEMS[1].category}
              </span>
              <h3 className="text-sm font-bold leading-snug">
                {GALLERY_ITEMS[1].title}
              </h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Cheerful Students Group */}
          <div
            onClick={() => setActiveItem(GALLERY_ITEMS[2])}
            className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-slate-200 aspect-[4/3]"
          >
            <img
              src={GALLERY_ITEMS[2].imageUrl}
              alt={GALLERY_ITEMS[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                {GALLERY_ITEMS[2].category}
              </span>
              <h3 className="text-sm font-bold leading-snug">
                {GALLERY_ITEMS[2].title}
              </h3>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                {activeItem.category} • DEMO CAMPUS VISUAL
              </div>
              <h4 className="text-xl font-bold text-[#0b2545]">{activeItem.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
