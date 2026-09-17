export interface Course {
  id: string;
  category: 'JEE' | 'NEET' | 'SCHOOL' | 'FOUNDATION';
  title: string;
  subtitle: string;
  badge: string;
  colorScheme: {
    accent: string;
    bgTint: string;
    border: string;
    tagBg: string;
    tagText: string;
    buttonBg: string;
  };
  description: string;
  features: string[];
  duration: string;
  targetExam: string;
  eligibility: string;
  syllabusHighlights: string[];
  keyHighlights: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  exam: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  course: string;
  message: string;
}
