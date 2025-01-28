import Card from "@/components/common/NavCard";
import TestimonialSection from "@/components/ui/TestimonialSection";

//Add testimonial component to bottom

const cards = [
  {
    imageUrl: "/Assets/Images/my-approach.webp",
    title: "Approach",
    subtitle: "Learn from Experience",
    description: "Transform from the inside out.",
    link: "/approach",
    alt: "My Approach - 'Torus in acrylics': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/groups.webp",
    title: "Groups",
    subtitle: "Classes - Workshops - Retreats",
    description: "Share in the Power of the Collective.",
    link: "/groups",
    alt: "Group - 'Chinese Year of the Water Rabbit': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/one-to-one.webp",
    title: "One-to-Ones",
    subtitle: "Coaching & Yoga",
    description: "The path of self-discovery.",
    link: "/onetoone",
    alt: "One-To-Ones - 'The Lotfollah Dome': painting by Lynn Hanford-Day",
  },
];

const Work = () => {
  return (
    <div>
      <div className="container">
        <h1>Work with Rose</h1>
        <p className="font-bold">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth.
        </p>

        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {cards.map((card, index) => (
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
