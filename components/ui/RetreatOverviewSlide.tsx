import { Button } from "@/components/ui/button";
import { Slide } from "@/types/index";
import { ChevronRight } from "lucide-react";

interface RetreatSlideProps {
  slide: Slide;
}

export default function RetreatSlide({ slide }: RetreatSlideProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.imageUrl})`,
          borderRadius: "inherit",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>{" "}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between p-8 text-left rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col mt-24">
          <h2 className="text-3xl md:text-5xl mb-6 text-white leading-tight">
            {slide.heading}
          </h2>
          <Button variant="primary" size="lg" className="w-auto self-start">
            {slide.buttonText}
            <ChevronRight />
          </Button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col mt-80">
          <div className="description max-w-lg">
            <p className="text-lg mb-6 text-white">{slide.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {slide.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
