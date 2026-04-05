import Image from 'next/image';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const ServicesCard = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className='bg-white p-8 rounded-2xl border border-[#FAC4D2] flex flex-col items-start text-left transition-all hover:drop-shadow-xl hover:border-white'>
      <div className='mb-8 relative w-16 h-16'>
        <Image src={icon} alt={title} fill className='object-contain h-auto' />
      </div>

      <h3 className='text-[24px] md:w-[70%] font-bold text-[#1E1E1E] mb-4  leading-tight'>
        {title}
      </h3>
      <p className='text-gray-500 text-sm leading-relaxed mb-7 font-dm-sans'>
        {description}
      </p>

      <button className='px-6 py-2 border border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300'>
        Read More
      </button>
    </div>
  );
};

export default ServicesCard;
