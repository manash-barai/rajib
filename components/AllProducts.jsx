

import { getAllFeatureProduct } from "@/lib/getAllFeatureProduct";
import Image from "next/image";
import Link from "next/link";

const AllProducts = async () => {
    const products = await products();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-shadow themeColor1 text-center border w-72 mx-auto py-2 border-white px-2 border-dashed">
          Featured Products
        </h2>
       
      </div>
    </section>
  );
};

export default AllProducts;

