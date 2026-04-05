import React from 'react';
import SectionHeader from './shared/SectionHeader';
import ServicesCard from './shared/ServicesCard';

const features = [
  {
    title: 'Manage Property Listings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image1.png',
  },
  {
    title: 'Manage Customer Bookings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image2.png',
  },
  {
    title: 'Schedule House Cleaning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image3.png',
  },
  {
    title: 'Monitor Guest Reviews',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image4.png',
  },
  {
    title: 'Track & Report Expenses',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image5.png',
  },
  {
    title: 'Guest Inquiry & Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: '/images/services/image6.png',
  },
];

const ServicesSection = () => {
  return (
    <section className='py-5 md:py-10'>
      <div className='container'>
        <SectionHeader
          title='Our'
          colorTitle='Service'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-7 md:mt-14'>
          {features.map((feature, index) => (
            <ServicesCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
