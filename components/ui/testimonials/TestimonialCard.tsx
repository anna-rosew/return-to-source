import Image from 'next/image';

interface TestimonialCardProps {
  pic: string;
  heading: string;
  testimonial: string;
  name: string;
  location: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="testimonial-card rounded bg-customBeige p-7 text-left shadow-md">
      <div className="mb-4">
        <Image
          src={props.pic}
          alt={props.heading}
          width={100}
          height={100}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <h2 className="mb-2 text-lg font-bold text-customSienna">{props.heading}</h2>
      <p className="mb-4 italic">{props.testimonial}</p>
      <p className="text-sm text-customSienna">
        <span className="font-semibold">{props.name}</span> | <span>{props.location}</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
