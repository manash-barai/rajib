'use client';

import Image from "next/image";
import { imageLoader } from "../lib/imageLoader";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Remove TypeScript types
export default function TestimonialSlider({ testimonials }) {
  return (
    <>
      <section className="w-full py-4 mt-3">
        <div className="mx-auto lg:max-w-6xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials && testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 ">
                  <div className="flex flex-col py-0 rounded justify-center sm:p-6 border border-gray-400">
                    
                    <div className="flex gap-3 items-center">
                      <div className="inline-flex rounded-full relative w-16 h-16">
                        {testimonial.image && testimonial.image.url && 
                          <Image
                            loader={imageLoader}
                            className="h-10 w-10 rounded-full border shadow-lg"
                            layout="fill"
                            alt={testimonial.name}
                            src={testimonial.image.url}
                            loading="lazy"
                          />
                        }
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Name: {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 float-end">
                          {testimonial.createdAt
                            ? `Posted on: ${new Date(testimonial.createdAt).toLocaleDateString("en-IN")}`
                            : "Date not available"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
