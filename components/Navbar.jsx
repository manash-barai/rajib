"use client"
import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Bag from "./Bag";

const Navbar = () => {

  const [bagToggle, setBagToggle] = useState(false);
  const bagToggles = (e) => {
    e.stopPropagation();
    setBagToggle(!bagToggle);
  };
  return (
    <nav className="shadow themeColor1 text-white px-3">
       <Bag bagToggle={bagToggle} bagToggles={bagToggles} />
      <div className="max-w-7xl mx-auto flex justify-between py-2 items-center">
        <div className="search min-w-84 flex items-center gap-5">
          <Link href="/">Logo</Link>
          <input
            type="text"
            placeholder="Search"
            className="border px-7 rounded outline-none py-1"
          />
        </div>

        <div className="cart flex items-center gap-4">
          <div className="profile">
            <CgProfile size={27} />
          </div>
          <button type="button" onClick={()=>setBagToggle(true)}>

          <IoBagHandleOutline size={27} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
