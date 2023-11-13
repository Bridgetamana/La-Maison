import { useState } from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Fikayo Tomori',
      profession: 'Footballer',
      image: 'https://media.istockphoto.com/id/1286810719/photo/smiling-cheerful-young-adult-african-american-ethnicity-man-looking-at-camera-standing-at.jpg?s=612x612&w=0&k=20&c=b9sWYITIZ_yjXB3m-Xftj-latPXQDhb5Roa0pA0JaNY=',
      feedback: "I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies",
    },
    {
      name: 'Anne Harlow',
      profession: 'Actress',
      image: 'https://media.istockphoto.com/id/1280113805/photo/smiling-young-woman-beauty-close-up-portrait.webp?b=1&s=170667a&w=0&k=20&c=RE3mToPREvy-KeYvOCXGX6r6znzdrQP0khIFJbU0Lpc=',
      feedback: "I am very impressed with the service of la Maison. I'd definitely recommend them to my buddies",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='bg-black text-white p-8 mt-6'>
      <div className='md:mx-10 lg:mx-24 flex justify-between'>
        <div>
          <span className='flex items-center'>
            <hr className='w-12 h-1 mr-4 bg-white border-0' />
            <p className='md:text-lg'>TESTIMONIALS</p>
          </span>
          <h2 className=' text-lg md:text-2xl'>What Our Clients Say About Us</h2>
        </div>
        <div >
          <button onClick={handlePrev} className='md:px-8 px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className='md:mx-10 lg:mx-24 flex mt-8'>
        <span className='flex gap-8'>
          <div className='md:w-1/3'>
            <img src={testimonialsData[activeTestimonial].image} alt={testimonialsData[activeTestimonial].name} className='' />
          </div>
          <span className='space-y-4'>
            <h3 className='text-2xl text-gray-50'>{testimonialsData[activeTestimonial].name}</h3>
            <p className='text-gray-300 text-xl'>{testimonialsData[activeTestimonial].feedback}</p>
            <ul>
              <li className='list-disc list-inside'>{testimonialsData[activeTestimonial].profession}</li>
            </ul>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
