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
import { FC } from "react";

export interface ClassInfo {
  icon: FC<{ className?: string }>;
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
}

export interface ClassSlidesProps {
  classInfo: ClassInfo;
}

//InPerson Carousel/Card

export interface InPersonSession {
  backgroundImage: string;
  duration: string;
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

//Blog Posts

export type PostType = "short-article" | "long-article" | "podcast" | "recipe";

export type Tag = "Mind" | "Body" | "Breath" | "Nutrition" | "Mindfulness";

export interface Post {
  title: string;
  slug: string;
  date: string;
  type: PostType;
  tags: Tag[];
  excerpt: string;
  featured: boolean;
  coverImage: string;
  // Additional fields based on type
  duration?: number; // For podcasts
  cookingTime?: number; // For recipes
 
}

//UI COMPONENTS

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

