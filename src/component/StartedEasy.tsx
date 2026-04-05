import React from 'react';
import SectionHeader from './shared/SectionHeader';
import Image from 'next/image';
import { Check } from 'lucide-react';
import ScheduleButton from './shared/ScheduleButton';

const steps = [
  {
    id: '01',
    title: 'Add requirements & sign up today',
    icon: '/images/start-icon/icon1.png',
  },
  {
    id: '02',
    title: 'Connect with your CSM & onboarding team',
    icon: '/images/start-icon/icon2.png',
  },
  {
    id: '03',
    title: 'Meet your STR Assistant next week',
    icon: '/images/start-icon/icon3.png',
  },
];

const features = [
  'Brilliant Client Service',
  'Flexibility & Adaptibility',
  'We make it Personal',
  'We have expart in our team',
];

const StartedEasy = () => {
  return (
    <section className=' py-5 md:py-10'>
      <div className='max-w-4xl p-4 mx-auto'>
        <SectionHeader
          title='Getting Started is'
          colorTitle='Easy'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        />

        <div className='grid grid-cols-1 p-5 md:grid-cols-3 gap-16 md:gap-8 mt-14'>
          {steps.map((step) => (
            <div key={step.id} className='flex flex-col items-center'>
              <div className='relative w-full aspect-[4/3] bg-white border border-[#FDEBF0] rounded-xl  flex items-center justify-center mb-8'>
                <div className='absolute -top-6 -left-6 w-14 h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-md'>
                  <span className='text-xl font-bold text-gray-900 leading-none'>
                    {step.id}
                  </span>
                </div>

                {/* Icon Image */}
                <div className='relative w-22 h-22 flex items-center justify-center'>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={80}
                    height={30}
                    className='object-contain h-auto w-auto'
                  />
                </div>
              </div>

              {/* Title Text */}
              <h3 className='text-xl font-semibold text-center max-w-[250px] leading-tight'>
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-7xl mx-auto bg-[#FDEBF0] rounded-[33px] p-8 md:p-15 mt-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden'>
        <div className='w-full md:w-[40%] z-10'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
            Few Reasons Why you <br /> Choose us?
          </h2>
          <p className='mb-8 max-w-lg text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <ul className='space-y-5 mb-10'>
            {features.map((item, idx) => (
              <li
                key={idx}
                className='flex items-center gap-4 text-gray-900 font-semibold'
              >
                <div className='w-6 h-6 bg-[#FAC4D2] rounded-full flex items-center justify-center'>
                  <Check className='w-4 h-4 text-primary' strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <ScheduleButton />
        </div>

        <div className='flex-1 relative  w-full flex items-center justify-center'>
          <div className='relative z-10 h-full w-full flex items-end justify-center'>
            <Image
              src='/images/choose.png'
              alt='Professional Assistant'
              width={1250}
              height={850}
              className=' object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartedEasy;
