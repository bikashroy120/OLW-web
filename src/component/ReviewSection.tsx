'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Star } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: 'Jenny Wilson',
    image: '/images/user1.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    name: 'Esther Howard',
    image: '/images/user2.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    name: 'Robert Fox',
    image: '/images/user3.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    image: '/images/user4.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    name: 'Robert Fox',
    image: '/images/user3.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
  {
    name: 'John Doe',
    image: '/images/user4.jpg',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
  },
];

const ReviewSection = () => {
  return (
    <section className='py-20 bg-[#f5f5f5]'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold'>
          Check Our Clients <span className='text-pink-500'>Review</span>
        </h2>
        <p className='text-gray-500 text-sm mt-3 max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Slider */}
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect='coverflow'
        centeredSlides
        slidesPerView={3}
        loop
        autoplay={{ delay: 2500 }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className=' max-w-full mx-auto'
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 rounded-2xl p-6 text-center bg-white
                ${
                  isActive
                    ? 'scale-110 shadow-xl opacity-100'
                    : 'scale-105 opacity-100'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${item.bg}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                </div>

                {/* Name */}
                <h3 className='mt-4 font-semibold text-lg'>{item.name}</h3>

                {/* Text */}
                <p className='text-gray-500 text-sm mt-2 leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Stars */}
                <div className='text-yellow-400 mt-3 text-sm'>★★★★☆</div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;
