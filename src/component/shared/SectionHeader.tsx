import React from 'react';

const SectionHeader = ({
  title,
  colorTitle,
  subTitle,
}: {
  title: string;
  colorTitle: string;
  subTitle: string;
}) => {
  return (
    <div className=' max-w-[738px] mx-auto'>
      <h2 className=' text-[20px] md:text-[30px] text-center font-bold'>
        {title} <span className='text-primary'>{colorTitle}</span>
      </h2>
      <p className=' mt-3.5 text-center text-[14px] font-medium'>{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
