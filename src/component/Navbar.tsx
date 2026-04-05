'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScheduleButton from './shared/ScheduleButton';

const navLinks = [
  { name: 'Home', href: '#', active: true },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Resources', href: '#' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=' fixed top-0 left-0 w-full z-50'>
      <nav className='bg-white w-full border-b border-gray-100 shadow-2xl  font-dm-sans'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/'>
                <Image
                  src='/images/logo.png'
                  alt='Logo'
                  width={125}
                  height={45}
                  priority
                />
              </Link>
            </div>

            {/* ===========Desktop nav======= */}
            <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base font-medium transition-colors ${
                    link.active
                      ? 'text-primary relative after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-primary'
                      : 'text-brand-gray hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className='hidden md:flex items-center'>
              <ScheduleButton />
            </div>

            {/* ========== mobile  nav ===== */}
            <div className='flex md:hidden items-center'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-brand-gray p-2 rounded-md hover:bg-gray-100'
              >
                {isMenuOpen ? (
                  // Close Icon
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ৫. Mobile nav trle */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t border-gray-100'>
            <div className='px-4 pt-2 pb-4 space-y-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-[18px] font-medium ${
                    link.active
                      ? 'bg-primary/10 text-primary'
                      : 'text-brand-gray hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className='pt-2'>
                <button className='w-full bg-primary text-white px-5 py-3 rounded-md text-base font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition'>
                  Schedule A Meeting
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
