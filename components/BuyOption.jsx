"use client";
import React, { useState } from "react";
import Bag from "./Bag";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useProductStore } from "@/usestore/store";
const BuyOption = ({ product }) => {
  const {payment_product}=useProductStore()
  const router = useRouter(); 
  const [bagToggle, setBagToggle] = useState(false);
  const bagToggles = (e) => {
    e.stopPropagation();
    setBagToggle(!bagToggle);
  };

  const addProductToCart = (e) => {
    e.stopPropagation();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    alert("Product added to cart!");
   
    localStorage.setItem("cart", JSON.stringify(cart));
  };



  const handleBuyNow = (e) => {
    e.stopPropagation();
    // Programmatically navigate to the payment page with product details
    const data=[{name:product.name ||"",price:product.newPrice ||"",image:product.image1.url || ""}]
    localStorage.setItem('paymentProduct', JSON.stringify(data));
    router.push(`/payment`);
  };


  return (
    <div className="flex mt-5 gap-4">
      <Bag bagToggle={bagToggle} bagToggles={bagToggles} />
      <button
        className="py-2 px-3 rounded border-dashed bg-gray-100"
        onClick={(e) => {
          addProductToCart(e);  
          bagToggles(e);       
        }}
      >
        ADD TO BAG
      </button>
      <button
        onClick={handleBuyNow}
        className="py-2 px-3 border-dashed rounded bg-gray-700 text-white font-semibold"
      >
        BUY NOW
      </button>
    </div>
  );
};

export default BuyOption;
