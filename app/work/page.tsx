import Image from "next/image";
import Link from "next/link";
import Approach from "@/public/Assets/Images/my-approach.webp";
import SunIcon from "@/public/Assets/Icons/SunIcon";

//Correct spacing on mobile view
//Add images

const Work = () => {
  return (
    <div className="text-center">
      <h1>Work with Rose</h1>
      <p className="font-medium">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div
          className="card rounded-lg group relative bg-cover bg-center transition-all duration-300 ease-in-out aspect-[1/1]"
          style={{
            backgroundImage: "url(/Assets/Images/my-approach.webp)",
          }}
        >
          <Link href="/approach" className="card-link">
            {/* Initial content */}
            <div className=" rounded-lg absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-300">
              <div className="text-center">
                <h2 className="text-white mb-4">Approach</h2>
                <h4>LEARN FROM EXPERIENCE</h4>
              </div>
            </div>

            {/* Hover content */}
            <div className="rounded-lg absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
              <div className="text-center text-white">
                {/* Replace with your SVG */}
                <SunIcon className=" hover:fill-white hover:text-white mx-auto" />
                <p className="text-customBeige">
                  Transform from the inside out!
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="card rounded-lg group relative bg-cover bg-center transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: "url(/Assets/Images/my-approach.webp)",
          }}
        >
          <Link href="/approach" className="card-link">
            {/* Initial content */}
            <div className=" rounded-lg absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-300">
              <div className="text-center">
                <h2 className="text-white mb-4">Approach</h2>
                <h4>LEARN FROM EXPERIENCE</h4>
              </div>
            </div>

            {/* Hover content */}
            <div className="rounded-lg absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
              <div className="text-center text-white">
                {/* Replace with your SVG */}
                <SunIcon className=" hover:fill-white hover:text-white mx-auto" />
                <p className="text-customBeige">
                  Transform from the inside out!
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div
          className="card rounded-lg group relative bg-cover bg-center transition-all duration-300 ease-in-out aspect-[1/1]"
          style={{
            backgroundImage: "url(/Assets/Images/my-approach.webp)",
          }}
        >
          <Link href="/approach" className="card-link">
            {/* Initial content */}
            <div className=" rounded-lg absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-0 group-hover:bg-opacity-80 group-hover:bg-black transition-all duration-300">
              <div className="text-center">
                <h2 className="text-white mb-4">Approach</h2>
                <h4>LEARN FROM EXPERIENCE</h4>
              </div>
            </div>

            {/* Hover content */}
            <div className="rounded-lg absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
              <div className="text-center text-white">
                {/* Replace with your SVG */}
                <SunIcon className=" hover:fill-white hover:text-white mx-auto" />
                <p className="text-customBeige">
                  Transform from the inside out!
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
