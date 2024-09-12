
import { getAllFeatureProduct } from "@/lib/getAllFeatureProduct";

import ProductCards from "./ProductCards";

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
           <ProductCards key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
