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
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
} 