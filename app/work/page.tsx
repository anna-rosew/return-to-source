import Card from "@/components/common/card";

//Add images
//array + card component

const cards = [
  {
    imageUrl: "/Assets/Images/my-approach.webp",
    title: "Approach",
    subtitle: "Learn from Experience",
    description: "Transform from the inside out!",
    link: "/approach",
    alt: "My Approach - 'Torus in acrylics': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/groups.webp",
    title: "Groups",
    subtitle: "Classes - Workshops - Retreats",
    description: "Transform from the inside out!",
    link: "/approach",
    alt: "Group - 'Chinese Year of the Water Rabbit': painting by Lynn Hanford-Day",
  },
  {
    imageUrl: "/Assets/Images/one-to-one.webp",
    title: "One-to-Ones",
    subtitle: "Coaching & Yoga",
    description: "Transform from the inside out!",
    link: "/approach",
    alt: "One-To-Ones - 'The Lotfollah Dome': painting by Lynn Hanford-Day",
  },
];

const Work = () => {
  return (
    <div className="container text-center w-full">
      <h1>Work with Rose</h1>
      <p className="font-medium">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>
      <div className="lg:my-20 my-7">
        <div className="lg:my-20 my-7">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Card key={index} cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
