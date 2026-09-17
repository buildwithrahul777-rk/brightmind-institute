import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { CONTACT_INFO, COURSES_DATA } from '../data/mockData';

interface ContactSectionProps {
  initialCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCourse = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: initialCourse || '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage('Please provide a valid 10-digit phone number.');
      return;
    }

    if (!formData.course) {
      setErrorMessage('Please select a course program.');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        course: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>CONTACT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (Reference style) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Call Us Anytime
                </span>
                <div className="text-base sm:text-lg font-bold text-[#0b2545]">
                  {CONTACT_INFO.phone}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Toll-free student counselling desk
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Drop Us An Email
                </span>
                <div className="text-base sm:text-lg font-bold text-[#0b2545]">
                  {CONTACT_INFO.email}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Admissions & academic queries
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Visit Our Institute
                </span>
                <div className="text-base sm:text-lg font-bold text-[#0b2545]">
                  {CONTACT_INFO.address}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Fictional demo location for showcase
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Opening Hours
                </span>
                <div className="text-sm sm:text-base font-bold text-[#0b2545]">
                  {CONTACT_INFO.openingHours}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {CONTACT_INFO.sundayHours}
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-800">
              <strong>Notice:</strong> This is a demo coaching institute website template. Contact points are illustrative placeholders.
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-100">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2545] tracking-tight">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in the details below and our academic counselors will contact you within 2 business hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">
                    Demo Enquiry Received!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you! On a real institute deployment, this sends an instant lead notification via SMS, Email, and WhatsApp to your admission team.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition"
                  >
                    Send Another Demo Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Subham Parjapati"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition"
                      required
                    />
                  </div>

                  {/* Select Course */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition bg-white"
                      required
                    >
                      <option value="">-- Choose Desired Program --</option>
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.subtitle})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about current class, school, or target year..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-blue-900 active:bg-slate-950 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-md hover:shadow-lg disabled:opacity-50 text-sm tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <span>{status === 'submitting' ? 'Submitting...' : 'SUBMIT ENQUIRY'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-400 text-center mt-2">
                    🔒 Your details are 100% confidential. No spam calls.
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
