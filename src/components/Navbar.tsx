import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (coursePreselect?: string) => void;
  brandName?: string;
  brandSub?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  brandName = 'BRIGHTMIND',
  brandSub = 'COACHING INSTITUTE',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'courses', 'about', 'results', 'gallery', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Courses', href: '#courses', id: 'courses' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0b2545] text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition">
              <GraduationCap className="w-6 h-6 text-blue-300 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0b2545] leading-none">
                {brandName}
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-0.5">
                {brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-[#0b2545] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 px-2 py-1 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#0b2545] hover:bg-blue-900 text-white text-xs sm:text-sm font-bold tracking-wide uppercase px-5 py-2.5 rounded-lg transition shadow-sm hover:shadow active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="bg-[#0b2545] text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              ENQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                  activeSection === link.id
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="text-xs text-slate-500 flex items-center gap-2 px-3 py-1">
                <PhoneCall className="w-4 h-4 text-blue-600" />
                <span>Demo Helpline: +91 98765 43210</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-[#0b2545] hover:bg-blue-900 text-white font-bold py-3 rounded-lg text-sm transition uppercase tracking-wider"
              >
                BOOK A FREE DEMO CLASS
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
