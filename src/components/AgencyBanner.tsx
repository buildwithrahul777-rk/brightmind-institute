import React, { useState } from 'react';
import { Sparkles, X, Palette, CheckCircle2 } from 'lucide-react';

interface AgencyBannerProps {
  onOpenCustomizer?: () => void;
}

export const AgencyBanner: React.FC<AgencyBannerProps> = ({ onOpenCustomizer }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-white text-xs border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-blue-600/30 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-500/30 text-[11px]">
            <Sparkles className="w-3 h-3 text-blue-400" />
            FREELANCER PORTFOLIO DEMO
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Designed for Coaching Institutes & Education Businesses.
          </span>
          <span className="text-slate-400 hidden md:inline">
            • Ready to deploy with your institute logo, colors, faculty & course details.
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1 rounded-md text-[11px] font-semibold transition shadow-sm"
              title="See how this website can be customized for your coaching institute"
            >
              <Palette className="w-3 h-3" />
              <span>Customize For Your Institute</span>
            </button>
          )}
          <button
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded transition hover:bg-slate-800"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
