"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const AdminNav = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Set the initial height
    setWindowHeight(window.innerHeight);

    // Update the height when the window is resized
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ul
      className={`w-60 bg-gray-300 flex flex-col gap-2 p-5 min-w-60  ${
        windowHeight < 10 ? 'sticky start-0 top-12' : 'top-0'
      }`}
      style={{ height: '100vh' }} // Set the height to 50% of the viewport height
    >
      <li
        className={`px-5 py-1 ${
          pathname === '/admin/user' ? 'bg-slate-500' : 'bg-slate-700'
        } text-white border border-slate-400 rounded`}
      >
        <Link href="/admin/user" passHref>
          User List
        </Link>
      </li>
      <li
        className={`px-5 py-1 ${
          pathname === '/admin/product-upload' ? 'bg-slate-500' : 'bg-slate-700'
        } text-white border border-slate-400 rounded`}
      >
        <Link href="/admin/product-upload" passHref>
          Product Upload
        </Link>
      </li>
      <li
        className={`px-5 py-1 ${
          pathname === '/admin/product-list' ? 'bg-slate-500' : 'bg-slate-700'
        } text-white border border-slate-400 rounded`}
      >
        <Link href="/admin/product-list" passHref>
          Product List
        </Link>
      </li>
      <li
        className={`px-5 py-1 ${
          pathname === '/admin/order-list' ? 'bg-slate-500' : 'bg-slate-700'
        } text-white border border-slate-400 rounded`}
      >
        <Link href="/admin/order-list" passHref>
          Order List
        </Link>
      </li>
      <li
        className={`px-5 py-1 ${
          pathname === '/admin/feedback' ? 'bg-slate-500' : 'bg-slate-700'
        } text-white border border-slate-400 rounded`}
      >
        <Link href="/admin/feedback" passHref>
          Feed Back
        </Link>
      </li>
    </ul>
  );
};

export default AdminNav;
