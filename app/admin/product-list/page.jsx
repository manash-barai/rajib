"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import LoadingBar from '@/components/LoadingBar';
import { useProductStore } from '@/usestore/store';

const Page = () => {
    const { loading, products, fetchProducts, deleteProduct } = useProductStore();
    const [productDeleteLoading, setProductDeleteLoading] = useState("");

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleDelete = async (productId) => {
        setProductDeleteLoading(productId);
        const loading = await deleteProduct(productId);
        if (loading) setProductDeleteLoading("");
    };

    return (
        <div className="min-h-screen py-4 px-4">
            <h1 className="text-2xl block mb-3 text-gray-700">Product List</h1>
            <hr className='border border-slate-600 w-20 mb-6' />
            <div className="flex flex-wrap gap-5 relative">
                {products.map((product) => (
                    <div key={product._id} className="relative">
                        <ProductCard
                            product={product}
                            onDelete={handleDelete}
                        />
                        {productDeleteLoading === product._id && (
                            <div className="absolute flex-1 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                                <LoadingBar />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
