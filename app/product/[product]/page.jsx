// app/product/[product]/page.jsx

import TestimonialSlider from "@/components/Testimonial";
import React from "react";
import { PiCurrencyInr } from "react-icons/pi";
import { CiShare2, CiDeliveryTruck } from "react-icons/ci";
import Quentity from "@/components/Quentity";
import BuyOption from "@/components/BuyOption";
import { customareFeedback } from "@/lib/customareFeedback";
import { singleProduct } from "@/lib/singleProduct";
import SinglepageImage from "@/components/SinglepageImage";

const Page = async ({ params }) => {
  const { product } = params;

  const customarFeedbackPromise = customareFeedback();
  const singleProductsPromise = singleProduct({ product });


  

  const [customarFeedback, singleProducts] = await Promise.all([
    customarFeedbackPromise,
    singleProductsPromise,
  ]);

  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <div className=" lg:flex gap-11">
        <div className="flex-1">
          <SinglepageImage SinglepageImage={singleProducts} />
        </div>

        <div className="w-full lg:w-96 border rounded px-3 py-1 flex flex-col mx-auto">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-medium">{singleProducts.name}</h1>
              <h2 className="text-2xl font-medium flex items-center">
                <PiCurrencyInr size={27} /> {singleProducts.newPrice}{" "}
                <span className="ml-4 text-xl mt-1 line-through text-gray-400">
                  {singleProducts.oldPrice}
                </span>
                <span className="ml-4 text-xl mt-1 text-gray-400">
                  OFF{" "}
                  {(
                    ((Number(singleProducts.oldPrice) -
                      Number(singleProducts.newPrice)) /
                      Number(singleProducts.oldPrice)) *
                    100
                  ).toFixed(2)}{" "}
                  %
                </span>
              </h2>
              <p className="text-gray-400 text-[13px]">Inclusive of all taxes</p>
            </div>
            <div>
              <CiShare2 size={32} />
            </div>
          </div>
          <h3 className="themeColor1 border inline-block border-white px-2 border-dashed mt-2 text-white">
            Free delivery
          </h3>
          <div className="themeColor1 py-5 mt-3">
            <p className="text-center text-white font-thin tracking-widest text-xl">
              {singleProducts.extraOffer}% Off Extra
            </p>
          </div>
          <div>
            <Quentity />
          </div>

          {singleProducts && (
            <div>
              <BuyOption product={singleProducts} />
            </div>
          )}

          <div className="mt-3">
            <div className="px-3 border flex gap-2 items-center py-2 border-gray-400">
              <CiDeliveryTruck
                color="white"
                className="bg-black rounded-full p-1"
                size={27}
              />
              <p className="text-[14px] text-gray-700">
                Get it delivered in 4-9 days
              </p>
            </div>

            <div className="px-3 border border-t-0 flex gap-2 items-center py-2 border-gray-400">
              <PiCurrencyInr
                color="white"
                className="bg-black rounded-full p-1"
                size={27}
              />
              <p className="text-[14px] text-gray-700">
                Get it delivered in 4-9 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-b pb-11 border-gray-400  flex justify-center flex-col">
        <h2 className="text-center text-2xl text-shadow themeColor1 border border-dashed border-white inline-block mx-auto py-2 text-white drop-shadow shadow px-3">
          Product Information
        </h2>
        <ul className="flex  flex-wrap gap-7   lg:justify-center justify-start px-3 mt-10 text-xl">
          <p className="text-gray-600">
            Brand:{" "}
            <span className="themeColor1 drop-shadow shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {singleProducts.brand}
            </span>
          </p>
          <p className="text-gray-600">
            Country:{" "}
            <span className="themeColor1 drop-shadow shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {singleProducts.country}
            </span>
          </p>
          <p className="text-gray-600">
            Life Cycle:{" "}
            <span className="themeColor1 drop-shadow shadow text-white text-shadow border border-dashed border-white px-3 py-1">
              {singleProducts.lifeCycle}
            </span>
          </p>
        </ul>
      </div>
      <div className="mt-11 flex justify-center flex-col">
        <h2 className="text-center text-2xl text-shadow themeColor1 border border-dashed border-white inline-block mx-auto py-2 text-white drop-shadow shadow px-3 mb-3">
          Product Description
        </h2>
        <p className="mt-3 text-gray-600">{singleProducts.description}</p>
      </div>

      <div className="recent mt-11">
        <TestimonialSlider testimonials={customarFeedback} />
      </div>
    </div>
  );
};

export async function generateMetadata({ params }) {
  const { product } = params;

  try {
    const singleProducts = await singleProduct({ product });

    return {
      title: singleProducts.name || "Default Title",
      description: singleProducts.description || "Default description",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Error",
      description: "Unable to fetch metadata",
    };
  }
}

export default Page;
