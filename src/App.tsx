import React, { useState } from 'react';
import { AgencyBanner } from './components/AgencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SmartCta } from './components/SmartCta';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { AboutSection } from './components/AboutSection';
import { Gallery } from './components/Gallery';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { EnquiryModal } from './components/EnquiryModal';
import { CustomizerModal } from './components/CustomizerModal';
import { COURSES_DATA } from './data/mockData';
import { Course } from './types';
import { Phone, MessageCircle } from 'lucide-react';

export default function App() {
  // Brand state (allows freelancer to customize on-the-fly during client calls)
  const [brandName, setBrandName] = useState('BRIGHTMIND');
  const [brandSub, setBrandSub] = useState('COACHING INSTITUTE');

  // Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPreselectedCourse, setEnquiryPreselectedCourse] = useState('');
  const [enquiryModalTitle, setEnquiryModalTitle] = useState('Book a Free Demo Class');
  const [customizerModalOpen, setCustomizerModalOpen] = useState(false);

  // Handlers
  const handleOpenEnquiry = (courseName?: string, customTitle?: string) => {
    setEnquiryPreselectedCourse(courseName || '');
    setEnquiryModalTitle(customTitle || 'Book a Free Demo Class');
    setEnquiryModalOpen(true);
  };

  const handleSelectCategory = (categoryId: string) => {
    // Scroll to courses section
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCourseDetails = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#0f172a] font-sans antialiased flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Freelancer Outreach Banner */}
      <AgencyBanner onOpenCustomizer={() => setCustomizerModalOpen(true)} />

      {/* 2. Premium Sticky Navbar */}
      <Navbar
        brandName={brandName}
        brandSub={brandSub}
        onOpenEnquiry={() => handleOpenEnquiry('', 'Enquire Now - BrightMind Demo')}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenDemoBooking={() => handleOpenEnquiry('', 'Book a Free Demo Class')}
          onOpenTalkToUs={handleScrollToContact}
        />

        {/* 4. Exam Category Strip */}
        <CategoryStrip onSelectCategory={handleSelectCategory} />

        {/* 5. Popular Courses */}
        <Courses
          onViewCourseDetails={handleOpenCourseDetails}
          onEnquireCourse={(courseTitle) => handleOpenEnquiry(courseTitle, `Enquiry for ${courseTitle}`)}
        />

        {/* 6. Why Choose Us (More Than Just Coaching) */}
        <WhyChooseUs />

        {/* 7. Smart CTA Banner & Milestone Counters */}
        <SmartCta
          onOpenCounselling={() => handleOpenEnquiry('', 'Get Free Academic Counselling')}
        />

        {/* 8. Results & Achievements */}
        <Results />

        {/* 9. Student Testimonials Carousel */}
        <Testimonials />

        {/* 10. About Institute Section */}
        <AboutSection onKnowMore={handleScrollToContact} />

        {/* 11. Campus Facilities Gallery */}
        <Gallery />

        {/* 12. Contact & Enquiry Form */}
        <ContactSection initialCourse={enquiryPreselectedCourse} />

        {/* 13. Final Call to Action */}
        <FinalCta
          onOpenDemoBooking={() => handleOpenEnquiry('', 'Book a Free Demo Class')}
        />
      </main>

      {/* 14. Footer */}
      <Footer
        onSelectCourse={(category) => {
          const matched = COURSES_DATA.find((c) => c.category.toLowerCase() === category.toLowerCase());
          if (matched) {
            setSelectedCourse(matched);
          } else {
            handleSelectCategory(category);
          }
        }}
      />

      {/* Floating Quick Helpline for Mobile Conversion */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => handleOpenEnquiry('', 'Quick Admission Enquiry')}
          className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-2xl hover:shadow-blue-900/30 hover:scale-105 active:scale-95 transition-all border border-blue-400/30"
          aria-label="Quick Enquiry"
        >
          <MessageCircle className="w-4 h-4 text-amber-300" />
          <span className="hidden sm:inline">Book Demo</span>
          <span className="sm:hidden">Enquire</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnquireNow={(title) => handleOpenEnquiry(title, `Book Demo for ${title}`)}
      />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        preselectedCourse={enquiryPreselectedCourse}
        modalTitle={enquiryModalTitle}
      />

      <CustomizerModal
        isOpen={customizerModalOpen}
        onClose={() => setCustomizerModalOpen(false)}
        instituteName={brandName}
        instituteSub={brandSub}
        onUpdateBrand={(name, sub) => {
          setBrandName(name);
          setBrandSub(sub);
        }}
      />
    </div>
  );
}
