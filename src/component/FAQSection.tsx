'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // npm install lucide-react

const faqs = [
  {
    question: 'Is there a free trial available?',
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Our cancellation policy is flexible. You can cancel your subscription at any time without any hidden fees.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can add custom information like your company VAT ID or address directly from the billing section of your dashboard.',
  },
  {
    question: 'How does billing work?',
    answer:
      'We bill at the beginning of each billing cycle (monthly or yearly). You will receive an automated invoice via email for every transaction.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      "You can change your account email from the 'Profile Settings' page. You will need to verify the new email address for security reasons.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // ডিফল্টভাবে প্রথম প্রশ্নটি খোলা থাকবে

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-5 md:py-10 font-dm-sans px-4'>
      <div className='max-w-4xl mx-auto  p-8 md:p-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Frequently asked <span className='text-primary'>questions</span>
          </h2>
          <p className=' text-[20px]'>
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className='space-y-2'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-[#BF214A47] transition-all ${isOpen ? 'pb-6' : 'pb-0'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full py-6 flex justify-between items-center text-left group'
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-primary'}`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus/Minus Icon */}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isOpen ? 'border-primary  text-primary' : 'border-primary text-primary'}`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={3} />
                    ) : (
                      <Plus size={16} strokeWidth={3} />
                    )}
                  </div>
                </button>

                {/* Answer Area (Animated) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className='text-[#606060] font-normal pr-8'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
