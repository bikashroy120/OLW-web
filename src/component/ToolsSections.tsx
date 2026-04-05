import React from 'react';
import SectionHeader from './shared/SectionHeader';
import Image from 'next/image';

const ToolsSections = () => {
  const images = [
    '/images/tools/image1.png',
    '/images/tools/image2.png',
    '/images/tools/image3.png',
    '/images/tools/image4.png',
    '/images/tools/image5.png',
    '/images/tools/image6.png',
    '/images/tools/image4.png',
    '/images/tools/image5.png',
    '/images/tools/image6.png',
  ];

  return (
    <section className=' py-5 md:py-10'>
      <div className='container'>
        <SectionHeader
          title='Our'
          colorTitle='Tools'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        />
      </div>

      <div className=' bg-[#F6F6F6] py-9 mt-20'>
        <div className=' max-w-4xl mx-auto'>
          <div className=' grid md:grid-cols-3 grid-cols-2 gap-5'>
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className=' bg-white h-[139px] rounded-xl flex items-center justify-center hover:shadow-custom-pink'
                >
                  <Image
                    src={item}
                    width={150}
                    height={80}
                    alt={`tool-${index}`}
                    className=' h-auto object-contain'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSections;
