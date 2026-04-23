import SunIcon from '@/public/Assets/Icons/SunIcon';
import Link from 'next/link';

interface CardInfo {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  alt: string;
}

//plan: make responsive for medium

const NavCard = ({ cardInfo }: { cardInfo: CardInfo }) => {
  return (
    <div
      className="group relative aspect-[1/1] max-h-[240px] w-full rounded-lg bg-cover bg-center transition-all duration-700 ease-in-out md:min-h-[350px] md:w-auto"
      style={{
        backgroundImage: `url(${cardInfo.imageUrl})`,
      }}
      aria-label={cardInfo.alt}
    >
      <Link href={cardInfo.link} className="card-link">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-0 text-white transition-all duration-700 group-hover:bg-black group-hover:bg-opacity-80">
          <div className="text-center">
            <h2 className="mb-2 text-white">{cardInfo.title}</h2>
            <h3 className="capitalise text-white">{cardInfo.subtitle}</h3>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="text-center text-white">
            <SunIcon className="mx-auto my-4 hover:fill-white hover:text-white" />
            <p className="text-customBeige">{cardInfo.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavCard;
