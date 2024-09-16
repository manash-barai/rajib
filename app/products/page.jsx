import React from 'react';
import { products as fetchProducts } from '@/lib/allProducts'; // Rename imported function to avoid conflict
import Image from 'next/image';
import Link from 'next/link';
import BuyOption from '@/components/BuyOption';
import ProductCards from '@/components/ProductCards';

const Page = async () => {

 
  const productList = await fetchProducts(1, 10);

  return (
    <div className='min-h-[80vh] mx-auto px-3 lg:px-28 bg-lime-100 py-4'>
      {productList && productList.length > 0 ? (
        <ul className=' grid grid-colds-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
          {productList.map((product) => (
            <ProductCards product={product} key={product._id} />
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Page;
