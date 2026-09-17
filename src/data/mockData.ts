import { Course, FeatureItem, StatItem, Testimonial, GalleryItem } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'jee-main-adv',
    category: 'JEE',
    title: 'JEE Coaching',
    subtitle: 'Main + Advanced',
    badge: 'Flagship Program',
    colorScheme: {
      accent: '#2563eb', // blue
      bgTint: 'bg-blue-50/70',
      border: 'border-blue-100',
      tagBg: 'bg-blue-100',
      tagText: 'text-blue-700',
      buttonBg: 'bg-[#0b2545] hover:bg-blue-900',
    },
    description: 'Intensive academic program designed by top faculty to build deep conceptual clarity in Physics, Chemistry, and Mathematics.',
    features: [
      'Expert Faculty with 12+ years exp.',
      'Structured Study Plan & Daily Practice Sheets (DPPs)',
      'Regular Mock Tests on NTA pattern',
      'One-on-One Doubt Clearing Sessions',
    ],
    duration: '1 Year & 2 Year Programs Available',
    targetExam: 'JEE Main & JEE Advanced',
    eligibility: 'Class 11, Class 12, & 12th Passed Students',
    syllabusHighlights: [
      'Mechanics, Electromagnetism, Modern Physics',
      'Physical, Organic & Inorganic Chemistry',
      'Calculus, Algebra, Coordinate Geometry & Vectors',
      'Computer-based test simulation lab access',
    ],
    keyHighlights: 'Regular All-India rank benchmarking and weekly performance analysis reports for parents.',
  },
  {
    id: 'neet-ug',
    category: 'NEET',
    title: 'NEET Coaching',
    subtitle: 'UG Preparation',
    badge: 'High Success Rate',
    colorScheme: {
      accent: '#059669', // emerald / green
      bgTint: 'bg-emerald-50/70',
      border: 'border-emerald-100',
      tagBg: 'bg-emerald-100',
      tagText: 'text-emerald-800',
      buttonBg: 'bg-[#064e3b] hover:bg-emerald-900',
    },
    description: 'Rigorous NCERT-focused medical coaching covering Botany, Zoology, Human Physiology, Organic Chemistry, and NEET Physics.',
    features: [
      'Concept Clarity with NCERT line-by-line mapping',
      'Doubt Solving desk available 6 days a week',
      'Test Series & Detailed Performance Analysis',
      'Dedicated Biology memorization & mnemonic drills',
    ],
    duration: '1 Year & 2 Year Target Batches',
    targetExam: 'NEET-UG (National Eligibility cum Entrance Test)',
    eligibility: 'Class 11, Class 12, & Dropper Students',
    syllabusHighlights: [
      'Complete Class 11 & 12 NCERT Biology mastery',
      'High-yield Physics numericals and shortcut methods',
      'Chemistry reaction mechanisms & physical problems',
      'OMR sheet practice sessions with negative marking analysis',
    ],
    keyHighlights: 'Personal mentorship by doctor alumni and senior medical coaching experts.',
  },
  {
    id: 'class-8-12',
    category: 'SCHOOL',
    title: 'Class 8 – 12',
    subtitle: 'CBSE / State Board',
    badge: 'Foundation + Boards',
    colorScheme: {
      accent: '#d97706', // amber / warm orange
      bgTint: 'bg-amber-50/70',
      border: 'border-amber-100',
      tagBg: 'bg-amber-100',
      tagText: 'text-amber-800',
      buttonBg: 'bg-[#78350f] hover:bg-amber-950',
    },
    description: 'Complete academic school curriculum excellence with special focus on Maths, Science, and English for 95%+ board performance.',
    features: [
      'All Core Subjects covered in-depth',
      'Regular subjective & objective tests',
      'Board Exam Preparation with answer-writing techniques',
      'Timely syllabus completion with 3 revision cycles',
    ],
    duration: 'Full Academic Year (April to March)',
    targetExam: 'CBSE, ICSE & State Board Examinations',
    eligibility: 'Students moving to Class 8, 9, 10, 11, or 12',
    syllabusHighlights: [
      'Step-by-step conceptual lectures with interactive demonstrations',
      'Previous 10 years board paper solutions and model answers',
      'Laboratory practical guidance and viva preparation',
      'Stress management and study timetable scheduling',
    ],
    keyHighlights: 'Small batches ensure teachers know every student personally.',
  },
  {
    id: 'foundation',
    category: 'FOUNDATION',
    title: 'Foundation',
    subtitle: 'Class 6 – 10',
    badge: 'Olympiad & NTSE',
    colorScheme: {
      accent: '#7c3aed', // purple
      bgTint: 'bg-purple-50/70',
      border: 'border-purple-100',
      tagBg: 'bg-purple-100',
      tagText: 'text-purple-800',
      buttonBg: 'bg-[#4c1d95] hover:bg-purple-950',
    },
    description: 'Nurture analytical thinking, logical reasoning, and early competitive aptitude for Olympiads, NTSE, and high-school readiness.',
    features: [
      'Strong Fundamental Basics in Science & Math',
      'Interactive Learning with visual models',
      'Olympiad & NTSE level problem solving',
      'Mental ability, logical puzzles & speed arithmetic',
    ],
    duration: 'Comprehensive Annual Foundation Program',
    targetExam: 'Olympiads (IMO/NSO), NTSE, PRMO & School Exams',
    eligibility: 'Young scholars in Classes 6 through 10',
    syllabusHighlights: [
      'Critical thinking modules & mental mathematics',
      'Applied physics and everyday chemistry experiments',
      'Early introduction to advanced problem solving techniques',
      'Confidence building and presentation skills',
    ],
    keyHighlights: 'Builds curiosity and eliminates fear of science and math early.',
  },
];

export const TRUST_POINTS = [
  {
    id: 'faculty',
    title: 'Experienced Faculty',
    description: 'Learn from seasoned subject experts',
    icon: 'GraduationCap',
  },
  {
    id: 'batch',
    title: 'Small Batch Size',
    description: 'Personalized attention for every learner',
    icon: 'Users',
  },
  {
    id: 'tests',
    title: 'Regular Tests & Analysis',
    description: 'Micro-level tracking & instant feedback',
    icon: 'ClipboardCheck',
  },
  {
    id: 'mentorship',
    title: 'Personal Mentorship',
    description: 'Continuous academic & emotional guidance',
    icon: 'TrendingUp',
  },
];

export const CATEGORIES_DATA = [
  {
    id: 'jee',
    title: 'JEE',
    subtitle: 'Main + Advanced',
    badge: 'Engineering',
    icon: 'Atom',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    id: 'neet',
    title: 'NEET',
    subtitle: 'UG Preparation',
    badge: 'Medical',
    icon: 'Stethoscope',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'school',
    title: 'Class 8 – 12',
    subtitle: 'CBSE / State Board',
    badge: 'School Boards',
    icon: 'BookOpen',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Class 6 – 10',
    badge: 'Junior Wings',
    icon: 'Sparkles',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
];

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    id: 'w1',
    title: 'Experienced Faculty',
    description: 'Learn from experienced educators who simplify complex topics into easy concepts.',
    icon: 'UserCheck',
  },
  {
    id: 'w2',
    title: 'Small Batch Size',
    description: 'Capped class strength ensures teachers give meaningful individual attention to every student.',
    icon: 'Users',
  },
  {
    id: 'w3',
    title: 'Regular Tests',
    description: 'Weekly tests and detailed chapter assessments track progress and pinpoint weak areas.',
    icon: 'FileText',
  },
  {
    id: 'w4',
    title: 'Doubt Solving',
    description: 'Dedicated daily doubt sessions so no student ever goes home with an unanswered question.',
    icon: 'HelpCircle',
  },
  {
    id: 'w5',
    title: 'Personal Mentorship',
    description: 'Continuous 1-on-1 counseling, study strategy planning, and academic motivation.',
    icon: 'Compass',
  },
  {
    id: 'w6',
    title: 'Modern Learning',
    description: 'Smart classrooms, digital visualizer boards, and comprehensive printed study modules.',
    icon: 'Laptop',
  },
];

export const RESULTS_STATS: StatItem[] = [
  {
    id: 'r1',
    value: '120+',
    label: 'JEE Selections',
    sublabel: 'Main & Advanced qualifiers',
    icon: 'Trophy',
  },
  {
    id: 'r2',
    value: '95+',
    label: 'NEET Selections',
    sublabel: 'Admitted to Govt Medical Colleges',
    icon: 'Stethoscope',
  },
  {
    id: 'r3',
    value: '98%',
    label: 'Board Results',
    sublabel: 'Scored distinction in Class 10 & 12',
    icon: 'Award',
  },
  {
    id: 'r4',
    value: '5000+',
    label: 'Happy Students',
    sublabel: 'Guided toward dream careers',
    icon: 'Smile',
  },
];

export const HIGHLIGHT_COUNTERS = [
  { value: '5000+', label: 'Students Enrolled' },
  { value: '95%+', label: 'Success Rate' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '100+', label: 'Expert Faculty' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'DEMO STUDENT',
    exam: 'NEET Qualified (Score: 680/720)',
    quote: 'BrightMind helped me build a strong foundation and the teachers made learning much easier. The weekly tests and doubt sessions made all the difference in cracking NEET in my very first attempt!',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Aman Verma',
    role: 'DEMO STUDENT',
    exam: 'JEE Advanced Rank 1420',
    quote: 'The faculty at BrightMind breaks down difficult physics and math concepts with crystal clear explanations. Their mock tests perfectly mirrored the actual JEE interface.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Sneha Patel',
    role: 'DEMO STUDENT',
    exam: 'Class 12 Board (97.4%)',
    quote: 'Small batch sizes meant the mentors knew my strengths and weaknesses. The structured study material saved me hundreds of hours of wandering around random books.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Rohan Deshmukh',
    role: 'DEMO STUDENT',
    exam: 'Class 10 Foundation & NTSE Scholar',
    quote: 'Starting in the Foundation batch in Class 9 built my confidence. The teachers made learning interactive and enjoyable rather than stressful.',
    rating: 5,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Smart Digital Classrooms',
    category: 'Classroom',
    imageUrl: '/src/assets/images/smart_classroom_1789604773303.jpg',
    description: 'Air-conditioned smart lecture rooms equipped with interactive audiovisual boards and comfortable study seating.',
  },
  {
    id: 'g2',
    title: 'Dedicated Study Library',
    category: 'Library',
    imageUrl: '/src/assets/images/library_students_1789604783664.jpg',
    description: 'Quiet, distraction-free reading hall stocked with reference manuals, past question archives, and study cubicles.',
  },
  {
    id: 'g3',
    title: 'Peer Learning & Collaboration',
    category: 'Students',
    imageUrl: '/src/assets/images/happy_students_1789604797795.jpg',
    description: 'Motivated students collaborating, solving problems together, and building lifelong academic friendships.',
  },
  {
    id: 'g4',
    title: 'Modern Campus Infrastructure',
    category: 'Campus',
    imageUrl: '/src/assets/images/institute_campus_1789604759015.jpg',
    description: 'Secure, centrally located institute campus with well-maintained study zones and parent consultation lounges.',
  },
];

export const CONTACT_INFO = {
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  email: 'info@brightmind.in',
  address: 'Main Road, Sector 62, Siwan, Bihar 841226',
  openingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
  sundayHours: 'Sunday: 9:00 AM - 2:00 PM',
};
