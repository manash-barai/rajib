
"use client"

import { useProductStore } from "@/usestore/store";
import ProductCards from "./ProductCards";
import { useEffect } from "react";

const FeaturedProducts = () => {
  const {featureProductGet,featureProducts}=useProductStore()

  useEffect(()=>{
    featureProductGet()
  },[featureProductGet])

  
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-shadow themeColor1 text-center border w-72 mx-auto py-2 border-white px-2 border-dashed">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-colds-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureProducts && featureProducts.featureProduct && featureProducts.featureProduct.map((product) => (
           <ProductCards key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
