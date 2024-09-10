import React from 'react';
import { products as fetchProducts } from '@/lib/allProducts'; // Rename imported function to avoid conflict
import Image from 'next/image';
import Link from 'next/link';
import BuyOption from '@/components/BuyOption';

const Page = async () => {

 
  const productList = await fetchProducts(1, 10);

  return (
    <div className='min-h-[80vh] mx-auto px-28 bg-lime-100 py-4'>
      {productList && productList.length > 0 ? (
        <ul>
          {productList.map((product) => (
             <div key={product._id} className="bg-white w-80 shadow-md themeColor1 rounded-lg p-3 border border-gray-400">
             <div className="relative w-full h-48">
               <Image
                 src={product.image1.url}
                 alt={product.name}
                 layout="fill"
                 objectFit="cover"
                 objectPosition="center"
                 className="mb-4"

               />
             </div>

             <div className="bg-gray-800 p-4 my-2 rounded">
               <h3 className="text-lg font-thin text-gray-100 capitalize">
                 {product.name}
               </h3>
               <p className="text-gray-600">Price: {product.newPrice}/-</p>
             </div>
             <div className="flex gap-3">
               {/* <Link className="bg-slate-800 text-white px-3 py-2 rounded" href="/payment">Buy Now</Link>
               <Link className="bg-slate-800 text-white px-3 py-2 rounded" href="#">Add to Cart</Link> */}
              {product &&  <BuyOption product={product} />}


               <Link className="bg-slate-800 text-white px-3 py-2 rounded" href={`/product/${product._id}`}>More</Link>
             </div>
           </div>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Page;
