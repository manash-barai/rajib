import React from 'react';
import Image from 'next/image';

const ProductCard = ({ product, onDelete }) => {
  const handleDelete = () => {
    if (product._id) {
      onDelete(product._id);
    }
  };

  return (
    <div className="max-w-sm bg-black w-72 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="relative h-48 bg-black rounded-t">
        <Image
          src={product.image1?.url || '/placeholder.jpg'}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5 text-[14px]">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Price: ${product.newPrice} <br />
          <span className="line-through">Old Price: ${product.oldPrice}</span> <br />
          Country: {product.country} <br />
          Brand: {product.brand} <br />
          Created Date: {new Date(product.createdAt).toLocaleDateString('en-IN')} <br />
          Product Type: {product.featureProduct ? 'Feature' : 'Regular'}
        </p>
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          Delete
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
