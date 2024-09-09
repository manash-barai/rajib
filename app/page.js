import FeaturedProducts from '@/components/FeaturedProducts';
import HeroSection from '@/components/HeroSection';
import TestimonialSlider from '@/components/Testimonial';
import { customareFeedback } from '@/lib/customareFeedback';
import React from 'react';

const Page = async () => {
  const customarFeedback = await customareFeedback();
  
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts />
      <div>
        <h2 className="text-3xl font-bold text-white text-shadow text-center themeColor1 border w-72 mx-auto py-2 border-white px-2 border-dashed">
          Customer Feedback
        </h2>
        <TestimonialSlider testimonials={customarFeedback.feedBack} />
      </div>
    </div>
  );
};

export default Page;
