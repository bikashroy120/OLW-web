import Image from 'next/image';

const teamMembers = [
  { src: '/images/users/Avatar.png', alt: 'Team Member 1' },
  { src: '/images/users/Avatar (1).png', alt: 'Team Member 2' },
  { src: '/images/users/Avatar (2).png', alt: 'Team Member 3' },
];

const StillHaveQuestions = () => {
  return (
    <section className='py-16 bg-gray-50/50 font-dm-sans px-4'>
      <div className='max-w-5xl mx-auto text-center flex flex-col items-center'>
        <div className='flex -space-x-4 mb-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative rounded-full overflow-hidden border-2 border-white shadow-md transition-transform hover:-translate-y-1 ${index === 1 ? 'z-10' : 'z-0'}`}
              style={{ width: '48px', height: '48px' }}
            >
              <Image
                src={member.src}
                alt={member.alt}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>

        <h3 className='text-xl font-bold text-[#101828] mb-3 '>
          Still have Questions?
        </h3>

        <p className='text-[#9C9C9C] mb-10 text-[18px]'>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>

        <button className='bg-primary text-white px-7 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition shadow-lg shadow-primary/10 active:scale-95'>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default StillHaveQuestions;
