"use client";
import Image from "next/image";
import React, { useState } from "react";

// Convert TypeScript type to JavaScript prop type
const SinglepageImage = ({ SinglepageImage }) => {
  // Use the first available image as the default main image
  const initialImage = SinglepageImage.image1?.url || "";
  const [mainImage, setMainImage] = useState(initialImage);

  return (
    <div className="img flex flex-col-reverse lg:flex-row sm:flex-col-reverse md:flex-col-reverse gap-8">
      <div className=" via-fuchsia-100  gap-2 flex lg:block justify-center">
        <div
          className="shadow border mb-7 lg:mb-0 relative w-24 h-24 cursor-pointer  "
          onClick={() =>
            setMainImage(SinglepageImage.image1?.url || initialImage)
          }
        >
          <Image
            className="border p-3"
            src={SinglepageImage.image1?.url || ""}
            fill
            objectFit="contain"
            quality={100}
            alt={SinglepageImage._id || ""}
          />
        </div>

        {SinglepageImage.image2 && (
          <div
            className="shadow relative w-24 h-24 cursor-pointer"
            onClick={() =>
              setMainImage(SinglepageImage.image2?.url || initialImage)
            }
          >
            <Image
              className="border p-3"
              src={SinglepageImage.image2.url}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              alt={SinglepageImage._id || ""}
            />
          </div>
        )}

        {SinglepageImage.image3 && (
          <div
            className="shadow relative w-24 h-24 cursor-pointer"
            onClick={() =>
              setMainImage(SinglepageImage.image3?.url || initialImage)
            }
          >
            <Image
              className="border p-3"
              src={SinglepageImage.image3.url}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              alt={SinglepageImage._id || ""}
            />
          </div>
        )}

        {SinglepageImage.image4 && (
          <div
            className="shadow relative w-24 h-24 cursor-pointer"
            onClick={() =>
              setMainImage(SinglepageImage.image4?.url || initialImage)
            }
          >
            <Image
              className="border p-3"
              src={SinglepageImage.image4.url}
              fill
              objectFit="contain"
              quality={100}
              alt={SinglepageImage._id || ""}
            />
          </div>
        )}
      </div>

      <div className="h-[600px] w-full relative rounded">
        <Image
          src={mainImage}
          className="border shadow"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
          alt=""
        />
      </div>
    </div>
  );
};

export default SinglepageImage;
