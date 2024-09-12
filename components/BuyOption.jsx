"use client";
import React, { useState } from "react";
import Bag from "./Bag";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
const BuyOption = ({ product }) => {

  const router = useRouter(); 
  const [bagToggle, setBagToggle] = useState(false);
  const bagToggles = () => {
    setBagToggle(!bagToggle);
  };

  const addProductToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    alert("Product added to cart!");
    console.log(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };



  const handleBuyNow = () => {
    // Programmatically navigate to the payment page with product details
    router.push(`/payment?name=${product.name}&price=${product.newPrice}&image=${product.image1.url}`);
  };


  return (
    <div className="flex mt-5 gap-4">
      <Bag bagToggle={bagToggle} bagToggles={bagToggles} />
      <button
        className="py-2 px-3 border-dashed bg-gray-100"
        onClick={() => {
          addProductToCart();  
          bagToggles();       
        }}
      >
        ADD TO BAG
      </button>
      <button
        onClick={handleBuyNow}
        className="py-2 px-3 border-dashed bg-gray-700 text-white font-semibold"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default BuyOption;
