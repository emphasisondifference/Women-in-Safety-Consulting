import React from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  imageUrl: string;
}

export interface Stat {
    value: string;
    iconValue?: string;
    label: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string;
}

export interface Event {
  month: string;
  day: string;
  title: string;
  details: string;
}

export interface SearchableItem {
  id: string;
  type: string;
  title: string;
  content: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}
