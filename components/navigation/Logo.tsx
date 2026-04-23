'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoImg from '@/public/Assets/Icons/Logo.svg';
import { Button } from '../ui/button';

const Logo = () => {
  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavButton);
    return () => window.removeEventListener('scroll', changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? 'none' : 'block' }}>
        <Image
          src={LogoImg}
          alt="Logo"
          width={250}
          height={74}
          className="relative h-[45px] w-[150px] cursor-pointer md:h-[74px] md:w-[250px]"
          priority={true}
        />
      </Link>
      <div
        style={{
          display: showButton ? 'block' : 'none',
        }}
      >
        <Link href="/contact">
          <Button variant="primary" size="sm">
            Book a session
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Logo;
