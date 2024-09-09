"use client"
import { getAllFeatureProduct } from "@/lib/getAllFeatureProduct";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const FeaturedProducts = async () => {
  const featureProducts = await getAllFeatureProduct();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-shadow themeColor1 text-center border w-72 mx-auto py-2 border-white px-2 border-dashed">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureProducts && featureProducts.featureProduct && featureProducts.featureProduct.map((product) => (
            <div key={product._id} className="bg-white shadow-md themeColor1 rounded-lg p-3 border border-gray-400">
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
                <Link className="bg-slate-800 text-white px-3 py-2 rounded" href="#">Buy Now</Link>
                <Link className="bg-slate-800 text-white px-3 py-2 rounded" href="#">Add to Cart</Link>
                <Link className="bg-slate-800 text-white px-3 py-2 rounded" href={`/product/${product._id}`}>More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
