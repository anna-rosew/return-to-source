//HomeScroll

import { StaticImageData } from "next/image";

export interface IServiceCard {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  reversed?: boolean;
}

//Testimonials

export interface Testimonial {
  pic: string;
  heading: string;
  testimonial: string;
  name: string;
  location: string;
}

//Groups
export interface CardInfo {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  alt: string;
}

//OnlineGroupsSlider

export interface ClassInfo {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  classType: string;
  description: string;
  permanentDescription: string;
  dates: string[];
  times: string[];
  dropInPrice: string;
  monthlyPrice: string;
  width: number;
  height: number;
  backgroundImage: string;
  duration: string;
  pricingDetails: {
    membershipPrice: string;
    bundlePrice: string;
    dropInPrice: string;
  };
}

export interface ClassSlidesProps {
  classInfo: ClassInfo;
}

//InPerson Carousel/Card

export interface InPersonSession {
  backgroundImage: string;
  time: string;
  type: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

export interface InPersonProps {
  sessionInfo: InPersonSession;
}

//RetreatsCarousel

export interface RetreatOverviewCardProps {
  image: string; // URL for the background image
  title: string; // Title text
  description: string; // Description text
  buttonText: string; // Text for the button
}

//RetreatsOverview

export interface Slide {
  imageUrl: string;
  date: string;
  location: string;
  heading: string;
  description: string;
  buttonText: string;
  tags: string[];
  link: string;
}

export interface RetreatInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  classType: string;
  description: string;
  permanentDescription: string;
  dates: string[];
  times: string[];
  dropInPrice: string;
  monthlyPrice: string;
  width?: number;
  height?: number;
  className?: string;
  duration: string;
  backgroundImage: string;
}

export interface RetreatProps {
  retreatInfo: RetreatInfo;
}

//About Page - Qualifications

export type Qualification = {
  year: string;
  title: string;
  institution: string;
};

//(modal)

export type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

//Blog Posts

import { ReactNode } from "react";

export type PostType = "short-article" | "long-article" | "podcast" | "recipe";

// Split tags into primary and secondary
export type PrimaryTag = "Mind" | "Body" | "Breath";
export type SecondaryTag =
  | "Nutrition"
  | "Mindfulness"
  | "Meditation"
  | "Yoga"
  | "Stress Management"
  | "Sleep"
  | "Movement"
  | "Breathing Techniques"
  | "Mental Health"
  | "Physical Health"
  | "Wellness"
  | "Self Care";

// Base interface for common properties
interface BasePost {
  title: string;
  slug: string;
  date: string;
  type: PostType;
  primaryTag: PrimaryTag; // Single primary tag
  secondaryTags: SecondaryTag[]; // Array of secondary tags
  excerpt: string;
  featured: boolean;
  coverImage: string;
  author: string;
}

// Interface for articles (both short and long)
export interface ArticlePost extends BasePost {
  type: "short-article" | "long-article" | "podcast";
  coverImage: string;
  contentImage: string;
  callToAction: string;
  intro?: {
    content: string;
    mdxContent?: ReactNode;
  };
  sections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

// Interface for podcasts
export interface PodcastPost extends BasePost {
  type: "podcast";
  duration: number;
  audioUrl: string;
  podcastUrl: string;
}

// Interface for recipes
export interface RecipePost extends BasePost {
  type: "recipe";
  cookingTime: number;
  ingredients: string[];
  instructions: string[];
}

// Union type for all post types
export type Post = ArticlePost | PodcastPost | RecipePost;

// MDX Content interface
export interface MDXContent {
  title: string;
  excerpt: string;
  date: string;
  primaryTag: PrimaryTag;
  secondaryTags: SecondaryTag[];
  type: PostType;
  featured: boolean;
  author: string;
  coverImage: string;
  contentImage?: string;
  callToAction?: string;
  intro?: {
    content: string;
    mdxContent?: ReactNode;
  };
  sections?: {
    id: string;
    title: string;
    content: string;
  }[];
  // Podcast specific
  duration?: number;
  audioUrl?: string;
  // Recipe specific
  cookingTime?: number;
  ingredients?: string[];
  instructions?: string[];
  // Common
  content?: string;
  children?: ReactNode;
  slug: string;
}

// Helper type for tag counts and filtering
export interface TagCounts {
  primary: Record<PrimaryTag, number>;
  secondary: Record<SecondaryTag, number>;
}

// Helper functions for tag validation
export const isPrimaryTag = (tag: string): tag is PrimaryTag => {
  return ["Mind", "Body", "Breath"].includes(tag);
};

export const isSecondaryTag = (tag: string): tag is SecondaryTag => {
  const secondaryTags: SecondaryTag[] = [
    "Nutrition",
    "Mindfulness",
    "Meditation",
    "Yoga",
    "Stress Management",
    "Sleep",
    "Movement",
    "Breathing Techniques",
    "Mental Health",
    "Physical Health",
    "Wellness",
    "Self Care",
  ];
  return secondaryTags.includes(tag as SecondaryTag);
};

//UI COMPONENT

//DetailsDisplay

export interface DisplayInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon2: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  subheading: string;
  heading2: string;
  subheading2: string;
}

export interface DetailsDisplayProps {
  displayInfo: DisplayInfo;
}

//Icon

export interface IconProps {
  width?: string | number;
  height?: string | number;
}
