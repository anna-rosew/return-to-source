import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import RetreatSlide from "@/components/ui/RetreatOverviewSlide";
import { Slide } from "@/types";



interface RetreatCarouselProps {
  slides: Slide[];
}

export default function RetreatsOverview({ slides }: RetreatCarouselProps) {
  return (
    <Carousel className="w-full max-w-5xl mx-auto relative">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative h-[500px] flex items-center justify-center"
          >
            <RetreatSlide slide={slide} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "w-8 h-2.5 rounded-full bg-gray-400 transition-all",
              idx === 0 && "bg-white"
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
