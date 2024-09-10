"use client";
import React, { useState } from "react";
import Bag from "./Bag";
import Link from "next/link";

const BuyOption = ({ product }) => {
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

  return (
    <div className="flex mt-5 gap-4">
      <Bag bagToggle={bagToggle} bagToggles={bagToggles} />
      <button
        className="py-2 px-3 border-dashed bg-gray-100"
        onClick={() => {
          addProductToCart();  // Correctly call the function
          bagToggles();        // Correctly call the function
        }}
      >
        ADD TO BAG
      </button>
      <Link href={"/payment"} className="py-2 px-3 border-dashed bg-gray-700 text-white font-semibold">
        BUY NOW
      </Link>
    </div>
  );
};

export default BuyOption;
