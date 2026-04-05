import Image from 'next/image';
import React from 'react';
import ScheduleButton from './shared/ScheduleButton';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='w-full h-screen relative'>
      <div className=' absolute w-full h-full top-0 left-0 '>
        <Image
          src={'/images/hero_bg.png'}
          width={2600}
          height={1600}
          className=' w-full h-full'
          alt='hero_bg'
        />
      </div>

      <div className=' bg-white p-5 md:p-20 absolute rounded-full w-full md:w-[923px] top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] z-20'>
        <div className=' flex items-center flex-col md:max-w-[670px]'>
          <h2 className=' text-3xl md:text-[48px] font-bold'>
            Airbnb Assistants For
          </h2>
          <span className=' text-xl md:text-[38px] font-medium'>
            Property Management
          </span>
          <p className=' text-sm font-medium text-center mt-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </p>

          <div className=' mt-[49px] flex items-center flex-col gap-6.75'>
            <ScheduleButton />
            <Link href={'#'} className=' text-[14px] underline'>
              See Pricing
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={'/images/hero/airbnb.png'}
            width={100}
            height={100}
            alt='logo'
            className=' absolute -top-25 md:top-0 left-0'
          />
          <Image
            src={'/images/hero/bdot.png'}
            width={100}
            height={100}
            alt='logo'
            className=' absolute -top-25 md:top-0 right-0'
          />
          <Image
            src={'/images/hero/image3.png'}
            width={100}
            height={100}
            alt='logo'
            className=' absolute -bottom-25 md:bottom-10 left-0'
          />
          <Image
            src={'/images/hero/image4.png'}
            width={100}
            height={100}
            alt='logo'
            className=' absolute -bottom-25 md:bottom-0 right-0'
          />
        </div>
      </div>

      <div className=' md:block hidden'>
        <div className=' absolute top-[230px] left-[287px] w-[13px] h-[13px] rounded-full bg-[#635BFF]'></div>
        <div className=' absolute top-[430px] left-[387px] w-[13px] h-[13px] rounded-full bg-[#FF5A5F]'></div>
        <div className='absolute bottom-[130px] left-[287px] w-[7px] h-[7px] rounded-full bg-[#FFEC5A]'></div>
        <div className=' absolute top-[180px] z-40 left-[50%] translate-x-[-50%] w-[13px] h-[13px] rounded-full bg-[#34E0A1]'></div>
        <div className=' absolute bottom-[180px] z-40 left-[50%] translate-x-[-50%] w-[13px] h-[13px] rounded-full bg-[#5AF9FF]'></div>
        <div className=' absolute top-[330px] right-[357px] w-[13px] h-[13px] rounded-full bg-[#FFEC5A]'></div>
        <div className='absolute bottom-[130px] right-[287px] w-[7px] h-[7px] rounded-full bg-[#0C3B7C]'></div>
      </div>
    </section>
  );
};

export default Hero;
