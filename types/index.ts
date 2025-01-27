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
}
// Props for ClassSlides component
export interface ClassSlidesProps {
  classInfo: ClassInfo;
}
