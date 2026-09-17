import React, { useState } from 'react';
import { X, Sparkles, RefreshCw, Check, Palette } from 'lucide-react';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  instituteName: string;
  instituteSub: string;
  onUpdateBrand: (name: string, sub: string) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  instituteName,
  instituteSub,
  onUpdateBrand,
}) => {
  const [tempName, setTempName] = useState(instituteName);
  const [tempSub, setTempSub] = useState(instituteSub);

  if (!isOpen) return null;

  const presets = [
    { name: 'BRIGHTMIND', sub: 'COACHING INSTITUTE' },
    { name: 'APEX ACADEMY', sub: 'PREMIER IIT-JEE & MEDICAL' },
    { name: 'SCHOLARS POINT', sub: 'EXCELLENCE IN SCIENCE & BOARDS' },
    { name: 'IGNITE CAREER INSTITUTE', sub: 'FOUNDATION TO COMPETITIVE EXAMS' },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateBrand(tempName, tempSub);
    onClose();
  };

  const handleApplyPreset = (name: string, sub: string) => {
    setTempName(name);
    setTempSub(sub);
    onUpdateBrand(name, sub);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#0b2545] tracking-tight">
                Client Brand Customizer
              </h3>
              <p className="text-xs text-slate-500">
                Preview how quickly this website adapts to any coaching institute during sales calls.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Presets */}
        <div className="mb-5">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Try Quick Demo Presets:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset.name, preset.sub)}
                className="text-left p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition group"
              >
                <div className="text-xs font-bold text-[#0b2545] group-hover:text-blue-700">
                  {preset.name}
                </div>
                <div className="text-[10px] text-slate-500">
                  {preset.sub}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Form */}
        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Coaching Institute Name
            </label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              placeholder="e.g. BRIGHTMIND"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tagline / Subtitle
            </label>
            <input
              type="text"
              value={tempSub}
              onChange={(e) => setTempSub(e.target.value)}
              placeholder="e.g. COACHING INSTITUTE"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              required
            />
          </div>

          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
            <strong>Outreach Tip:</strong> Show this live to coaching owners to prove this website can be personalized with their curriculum, faculty photos, and contact numbers in 24 hours.
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0b2545] hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow"
            >
              Apply To Live Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
