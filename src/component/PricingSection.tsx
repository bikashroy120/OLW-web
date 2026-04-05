'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Freebie',
    price: 0,
    description:
      'Ideal for individuals who need quick access to basic features.',
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: false },
      { text: 'Unlimited Sharing', included: false },
      { text: 'Upload graphics & video in up to 4k', included: false },
      { text: 'Unlimited Projects', included: false },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: 25,
    description:
      'Ideal for individuals who need advanced features and tools for client work.',
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 100,
    description:
      'Ideal for businesses who need personalized services and security for large teams.',
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: true },
      { text: 'Create teams to collaborate on designs', included: true },
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className='py-20 px-4 bg-white font-dm-sans'>
      <div className='container text-center'>
        <h2 className='text-[40px] font-bold text-[#191D23] mb-4'>
          Airbnb Assistent <span className='text-primary'>pricing</span>
        </h2>
        <p className='text-[#191D23] text-[20px] mb-9'>
          Choose a plan that's right for you
        </p>
        <div className='flex items-center justify-center gap-4 mb-16 relative'>
          <span
            className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}
          >
            Pay Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className='w-10 h-6 bg-[#04092152] rounded-full p-1 transition-colors relative'
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-4' : 'translate-x-0'}`}
            />
          </button>
          <span
            className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}
          >
            Pay Yearly
          </span>

          <div className='hidden md:block absolute left-[58%] top-0'>
            <span className='text-primary text-sm font-medium flex items-center gap-2'>
              <svg
                width='40'
                height='20'
                viewBox='0 0 40 20'
                fill='none'
                className='rotate-12'
              >
                <path
                  d='M1 18C10 18 20 5 38 2'
                  stroke='#e94c77'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
                <path
                  d='M35 8L39 1L31 3'
                  stroke='#e94c77'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              Save 25%
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl text-start p-8 border transition-all ${
                plan.isPopular
                  ? 'bg-primary text-white border-primary shadow-2xl-colored '
                  : 'bg-white text-gray-900 border-[#FAC4D2] shadow-sm'
              }`}
            >
              <h3 className='text-[24px] font-bold mb-2'>{plan.name}</h3>
              <p
                className={`text-base mb-8 ${plan.isPopular ? 'text-white/80' : 'text-[#64748B]'}`}
              >
                {plan.description}
              </p>

              <div className='mb-8 flex items-center gap-2'>
                <span
                  className={`text-[56px] font-bold text-[#191D23] ${plan.isPopular ? 'text-white' : 'text-[#191D23]'}  `}
                >
                  ${isYearly ? plan.price * 0.75 : plan.price}
                </span>
                <span
                  className={`text-lg ${plan.isPopular ? 'text-white/80' : 'text-gray-500'}`}
                >
                  {' '}
                  / Month
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-10 transition-colors ${
                  plan.isPopular
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}
              >
                Get Started Now
              </button>

              <ul className='space-y-4 text-left'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center gap-3 text-base'>
                    <div
                      className={`p-1 rounded-full ${
                        plan.isPopular
                          ? feature.included
                            ? 'bg-white/20'
                            : 'bg-transparent'
                          : feature.included
                            ? 'bg-primary/10'
                            : 'bg-gray-100'
                      }`}
                    >
                      {feature.included ? (
                        <Check
                          className={`w-4 h-4 ${plan.isPopular ? 'text-white' : 'text-primary'}`}
                        />
                      ) : (
                        <X className='w-4 h-4 text-gray-400' />
                      )}
                    </div>
                    <span className={!feature.included ? 'text-gray-400' : ''}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
