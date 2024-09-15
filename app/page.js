import FeaturedProducts from '@/components/FeaturedProducts';
import HeroSection from '@/components/HeroSection';
import TestimonialSlider from '@/components/Testimonial';
import Link from 'next/link';
import React from 'react';





const Page = async () => {

  
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts />


      <Link href={'/products'} className='px-4 py-2 mx-auto w-52 bg-slate-800 text-white' > View All  </Link>
      <div>
        <h2 className="text-3xl font-bold text-white text-shadow text-center themeColor1 border w-72 mx-auto py-1 text-md border-white px-2 border-dashed">
          Customer Feedback
        </h2>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Page;
