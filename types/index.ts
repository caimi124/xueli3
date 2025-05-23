import React from 'react';

// Layout Component Types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

// Notion API Types
export interface NotionPage {
  id: string;
  properties: {
    Title: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Date: {
      date?: {
        start: string;
      };
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Excerpt: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Cover: {
      files: Array<{
        file?: {
          url: string;
        };
        external?: {
          url: string;
        };
      }>;
    };
    Published: {
      checkbox: boolean;
    };
  };
}

// Post Types
export interface Post {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category?: string;
  tags?: string[];
}

export interface PostWithContent extends Post {
  content: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
  author?: string;
  structuredData?: Record<string, any>;
}

// i18n Types
export interface TranslationValue {
  [key: string]: string | TranslationValue;
}

export interface LocaleTranslations {
  [locale: string]: {
    [key: string]: string | TranslationValue;
  };
}

export interface Translations {
  [section: string]: LocaleTranslations;
}

export interface School {
  id: string;
  name: string;
  country: string;
  city?: string;
  ranking?: number;
  specialties?: string[];
  accreditation?: string[];
  description?: string;
  website?: string;
  imageUrl?: string;
}

export interface SchoolFilter {
  countries: string[];
  specialties: string[];
  search: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  features: string[];
  duration: string;
  recommended?: boolean;
  highlight?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
} 