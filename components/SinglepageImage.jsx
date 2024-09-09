'use client';
import Image from 'next/image';
import React, { useState } from 'react';

// Convert TypeScript type to JavaScript prop type
const SinglepageImage = ({ SinglepageImage }) => {
  // Use the first available image as the default main image
  const initialImage = SinglepageImage.image1?.url || '';
  const [mainImage, setMainImage] = useState(initialImage);

  return (
    <div>
      <div className="img flex gap-8">
        <div className="imgSort via-fuchsia-100 flex flex-col gap-2">
          <div
            className="shadow relative w-24 h-24 cursor-pointer"
            onClick={() => setMainImage(SinglepageImage.image1?.url || initialImage)}
          >
            <Image
              className="border p-3"
              src={SinglepageImage.image1?.url || ''}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              alt={SinglepageImage._id || ''}
            />
          </div>

          {SinglepageImage.image2 && (
            <div
              className="shadow relative w-24 h-24 cursor-pointer"
              onClick={() => setMainImage(SinglepageImage.image2?.url || initialImage)}
            >
              <Image
                className="border p-3"
                src={SinglepageImage.image2.url}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                alt={SinglepageImage._id || ''}
              />
            </div>
          )}

          {SinglepageImage.image3 && (
            <div
              className="shadow relative w-24 h-24 cursor-pointer"
              onClick={() => setMainImage(SinglepageImage.image3?.url || initialImage)}
            >
              <Image
                className="border p-3"
                src={SinglepageImage.image3.url}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                alt={SinglepageImage._id || ''}
              />
            </div>
          )}

          {SinglepageImage.image4 && (
            <div
              className="shadow relative w-24 h-24 cursor-pointer"
              onClick={() => setMainImage(SinglepageImage.image4?.url || initialImage)}
            >
              <Image
                className="border p-3"
                src={SinglepageImage.image4.url}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                alt={SinglepageImage._id || ''}
              />
            </div>
          )}
        </div>

        <div className="imgBig border flex-1 h-[500px] relative rounded shadow">
          <Image
            className="p-2"
            src={mainImage}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SinglepageImage;
