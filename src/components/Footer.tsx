import React, { useState } from 'react';
import {
  GraduationCap,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUp,
  Shield,
  FileText,
  X,
} from 'lucide-react';

interface FooterProps {
  onSelectCourse: (courseCategory: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCourse }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  BrightMind
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                  COACHING INSTITUTE
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 italic font-medium">
              "Education today, a better tomorrow."
            </p>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Empowering students with deep conceptual learning, rigorous testing, and empathetic mentorship for JEE, NEET, and school examinations.
            </p>

            <div className="inline-block text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-amber-300/90 border border-slate-700">
              ⚡ Freelancer Outreach Demo Website
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition">All Courses</a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition">Results & Toppers</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">Campus Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact & Admissions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Courses
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onSelectCourse('jee')}
                  className="hover:text-white transition text-left"
                >
                  JEE (Main + Advanced)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('neet')}
                  className="hover:text-white transition text-left"
                >
                  NEET (UG Preparation)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('school')}
                  className="hover:text-white transition text-left"
                >
                  Class 8–12 (CBSE / State Board)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourse('foundation')}
                  className="hover:text-white transition text-left"
                >
                  Foundation (Classes 6–10)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us & Back to Top */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition py-1"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© 2026 BrightMind Coaching Institute. All rights reserved.</span>
            <span className="bg-slate-800 text-blue-400 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              DEMO WEBSITE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 transition underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-slate-300 transition underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {modalType && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 text-slate-900"
          onClick={() => setModalType(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                {modalType === 'privacy' ? (
                  <Shield className="w-5 h-5 text-blue-600" />
                ) : (
                  <FileText className="w-5 h-5 text-blue-600" />
                )}
                <h3 className="font-bold text-base text-[#0b2545]">
                  {modalType === 'privacy' ? 'Privacy Policy (Demo)' : 'Terms & Conditions (Demo)'}
                </h3>
              </div>
              <button
                onClick={() => setModalType(null)}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-1">
              <p>
                <strong>Demo Website Policy:</strong> This website is an agency demonstration portfolio designed by a freelance developer for showcase purposes.
              </p>
              <p>
                All student statistics, course descriptions, testimonials, and contact phone numbers are simulated demo placeholders and do not represent contractual commitments or guaranteed admission results.
              </p>
              <p>
                When delivered to a real coaching institute client, this section is customized with the legal entity's official privacy terms, refund regulations, and GDPR/IT Act compliances.
              </p>
            </div>

            <div className="mt-5 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-[#0b2545] text-white text-xs font-bold rounded-lg"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
