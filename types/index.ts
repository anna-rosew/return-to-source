//Online Classes

// Type for class information used in ClassSlides and OnlineGroupsSlider
export interface ClassInfo {
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
// Props for ClassSlides component
export interface ClassSlidesProps {
  classInfo: ClassInfo;
}

//ui

//Props for DetailsDisplay

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

export interface IconProps {
  width?: string | number; // Allow both string and number for width
  height?: string | number; // Allow both string and number for height
}
