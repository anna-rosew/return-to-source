import Card from "@/components/common/NavCard";
import TestimonialSection from "@/components/ui/testimonials/TestimonialSection";
import { workCards } from "@/content/work";

const Work = () => {
  return (
    <div>
      <div className="container">
        <h1>Work with Rose</h1>
        <p className="font-bold">
          Learn to navigate life with greater ease & flow. Reconnect with your
          body & breath, and discover new ways to mange your thoughts &
          emotions.
        </p>

        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {workCards.map((card, index) => (
              <Card key={index} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default Work;
