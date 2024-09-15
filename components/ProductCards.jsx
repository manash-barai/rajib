"use client"
import React from 'react'
import { useRouter } from "next/navigation"; 
import Image from 'next/image';
import BuyOption from './BuyOption';

const ProductCards = ({product}) => {
    const router = useRouter(); 

  return (
    <div  className="bg-white cursor-pointer  shadow-md themeColor1 rounded-lg p-3 border border-gray-400" onClick={()=>router.push(`/product/${product._id}`)}>
    <div className="relative w-full h-56">
      <Image
        src={product.image1.url}
        alt={product.name}
        layout="fill"
        objectFit=""
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
      <BuyOption product={product} />
      
     
    </div>
  </div>
  )
}

export default ProductCards
