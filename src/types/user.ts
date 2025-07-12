
export interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileType: 'entrepreneur' | 'investor' | 'incubator' | 'student';
  avatar?: string;
  phone?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EntrepreneurProfile extends BaseUser {
  profileType: 'entrepreneur';
  company?: string;
  businessIdea: string;
  fundingNeeds: string;
  industry: string;
  stage: 'idea' | 'prototype' | 'mvp' | 'growth' | 'scale';
  teamSize?: number;
}

export interface InvestorProfile extends BaseUser {
  profileType: 'investor';
  investmentFocus: string[];
  investmentRange: string;
  sectors: string[];
  criteria: string;
  portfolio?: string[];
}

export interface IncubatorProfile extends BaseUser {
  profileType: 'incubator';
  organizationName: string;
  supportServices: string[];
  focusAreas: string[];
  programDuration?: string;
  applicationProcess: string;
}

export interface StudentProfile extends BaseUser {
  profileType: 'student';
  education: string;
  university?: string;
  skills: string[];
  interests: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  availability: string;
}

export type UserProfile = EntrepreneurProfile | InvestorProfile | IncubatorProfile | StudentProfile;

export interface JobListing {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'CDI' | 'Stage' | 'Freelance' | 'CDD';
  salary?: string;
  requirements: string[];
  benefits?: string[];
  postedBy: string;
  postedAt: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface Training {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  price: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'online' | 'hybrid' | 'in-person';
  maxStudents?: number;
  currentStudents: number;
  rating: number;
  image?: string;
  syllabus?: string[];
  startDate?: string;
  endDate?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  likes: number;
  uploadedBy: string;
  uploadedAt: string;
  tags?: string[];
}
