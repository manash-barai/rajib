"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa6";
import { useRouter } from "next/navigation"; 
import { useProductStore } from '@/usestore/store';

const Bag = ({ bagToggle, bagToggles }) => {
  

  const [cartSetting, setCartSetting] = useState([]);
  const router = useRouter(); 

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartSetting(cart);
  }, [bagToggle]);

  // Group products by _id and calculate quantity and total price
  const groupedProducts = cartSetting.reduce((acc, product) => {
    if (acc[product._id]) {
      acc[product._id].quantity += 1;
    } else {
      acc[product._id] = { product, quantity: 1 };
    }
    return acc;
  }, {});

  const subtotal = Object.values(groupedProducts).reduce((total, { product, quantity }) => total + product.newPrice * quantity, 0);

  const removeProductFromCart = (productId) => {
    const updatedCart = cartSetting.filter(product => product._id !== productId);
    setCartSetting(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const pushToPayment = async(e) => {
    e.preventDefault();  // Prevent any default behavior

    // Collect all products and their quantities
    const productsToSave = Object.values(groupedProducts).map(({ product, quantity }) => ({
      name: product.name || "",
      price: product.newPrice || "",
      image: product.image1.url || "",
      quantity: quantity,
    }));
    
    // Save the product details in local storage
    localStorage.setItem('paymentProduct', JSON.stringify(productsToSave));
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Always navigate to /payment
    router.push(`/payment`);
  };
  
  return (
    <div
      style={{ background: "rgba(0,0,0,0.7)" }}
      className={`w-full top-0 ${bagToggle ? 'start-0' : '-start-[2000px]'} z-40 fixed h-[100vh] flex justify-end transition-transform duration-300`}
      onClick={bagToggles}
    >
      <div className='w-[340px] bg-white py-4 px-4 flex flex-col justify-between'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <FaCartArrowDown size={25} color='rgb(47, 60, 77)' />
              <p className='text-xl font-semibold text-slate-700'>My Bag</p>
            </div>
            <button className='themeColor1 text-white rounded-full px-3 py-1' onClick={bagToggles}>X</button>
          </div>

          <div className="mt-4">
            {Object.values(groupedProducts).map(({ product, quantity }) => (
              <div key={product._id} className="flex border text-slate-600 border-slate-800 justify-between mb-4">
                <Image src={product.image1.url} alt={product.name} width={50} height={50} />
                <div className="flex-1 ml-3">
                  <p className="text-md font-medium">Title: {product.name}</p>
                  <p> Price :  {quantity} * ₹{product.newPrice}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p>₹{product.newPrice * quantity}</p>
                  <button className='bg-red-500 h-full text-white px-2' onClick={(e) => { e.stopPropagation(); removeProductFromCart(product._id); }}>X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='flex justify-between mb-3'>
            <p className='text-slate-700 text-md font-thin'>Subtotal: ({cartSetting.length} items)</p>
            <p>₹{subtotal}</p>
          </div>

          <Link className='px-5 py-2 text-black border border-slate-500' href="#">View Bag</Link>
          <div className='mt-3'>
            <button className='bg-slate-800 py-2 w-full text-white' onClick={pushToPayment}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
