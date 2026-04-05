import React from 'react';

const ScheduleButton = () => {
  return (
    <button className='bg-primary text-white px-5 py-2.5 h-[50px] rounded-md text-sm font-semibold flex items-center gap-2 hover:bg-primary/90 transition'>
      Schedule A Meeting
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2.5}
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
  );
};

export default ScheduleButton;
