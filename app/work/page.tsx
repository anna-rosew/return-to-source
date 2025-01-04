import Image from "next/image";
import Link from "next/link";
import Approach from "@/public/Assets/Images/my-approach.webp";

const Work = () => {
  return (
    <div className="text-center">
      <h1>Work with Rose</h1>
      <p className="font-medium">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>
      <div className="grid-cols-1 lg:grid-cols-3">
        {" "}
        <Link href="/approach" className="card-link">
          <h2>Approach</h2>
          <h4>LEARN FROM EXPERIENCE</h4>
          <div className="work-image-container">
            <Image
              src={Approach}
              alt="My Approach - 'Torus in acrylics': painting by Lynn Hanford-Day"
              fill
              className="rounded-lg object-cover"
              placeholder="blur"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Work;
