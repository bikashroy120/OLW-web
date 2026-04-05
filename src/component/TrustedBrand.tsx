'use client';

import React, { useState } from 'react';

const TrustedBrand = () => {
  const logos = [
    '/images/brand/brand1.png',
    '/images/brand/brand2.png',
    '/images/brand/brand3.png',
    '/images/brand/brand4.png',
    '/images/brand/brand5.png',
    '/images/brand/image6.png',
    '/images/brand/image7.png',
  ];

  return (
    <section className=' py-5 md:py-10 mt-12'>
      <div className=' flex flex-col items-center'>
        <h2 className=' px-5 text-[20px] text-center font-semibold'>
          Trusted by leaders in 50+ industries
        </h2>

        <div className=' bg-[#F6F6F6] py-3.5 w-full mt-9'>
          <div className='overflow-hidden space-y-6'>
            <Marquee logos={logos} direction='left' />
          </div>
        </div>
      </div>
    </section>
  );
};

function Marquee({ logos, direction }: { logos: string[]; direction: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='relative flex overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex gap-10 min-w-max ${
          direction === 'right'
            ? 'animate-scroll-right-smooth'
            : 'animate-scroll-left-smooth'
        }`}
        style={{
          animationPlayState: hovered ? 'paused' : 'running',
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className='w-28 h-20 flex items-center justify-center shrink-0'
          >
            <img
              src={logo}
              alt={`Brand ${i}`}
              className='h-auto object-contain opacity-100 hover:cursor-pointer transition'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedBrand;
