'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import SectionHeader from './shared/SectionHeader';

const testimonials = [
  {
    name: 'Jenny Wilson',
    image: '/images/users/Ellipse 21 (2).png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Esther Howard',
    image: '/images/users/Ellipse 21.png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Robert Fox',
    image: '/images/users/Ellipse 21 (1).png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Jenny Wilson',
    image: '/images/users/Ellipse 21 (2).png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Esther Howard',
    image: '/images/users/Ellipse 21.png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Robert Fox',
    image: '/images/users/Ellipse 21 (1).png',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function ReviewSection() {
  return (
    <section className='py-20 '>
      <div className=' mb-7'>
        <SectionHeader
          title='Check Our Clients'
          colorTitle='Review'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        />
      </div>
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
          depth: 0,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className=' mx-auto '
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all mx-2 duration-500 my-4 rounded-2xl border p-6 flex flex-col justify-between]
                ${isActive ? 'bg-white border-gray-200 shadow-md' : 'bg-[#F6F6F6] border-[#F6F6F6]'}`}
              >
                <div className=' flex items-center w-full gap-4'>
                  <div className='relative w-20 h-20 rounded-full overflow-hidden  flex-shrink-0'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  <div className=' flex flex-col'>
                    <h3 className='mt-4 font-semibold text-lg'>{item.name}</h3>
                    <p className='text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3'>
                      {item.review}
                    </p>
                    <div className='text-yellow-400 mt-4 text-sm'>★★★★☆</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
