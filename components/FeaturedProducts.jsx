import ProductCards from "./ProductCards";

// Named export for fetching the feature products
export async function featureProductGet() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}api/feature-product`,
    {
      method: "GET",
      next: {
        revalidate: 60000, // Optional: Revalidate every 60 seconds
      },
    }
  );
  
  // Await response.json()
  const featureProducts = await response.json();
  return featureProducts;
}

// Default export for the FeaturedProducts component
export default async function FeaturedProducts() {
  const featureProducts = await featureProductGet(); // Call the fetch function and get the products

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-white text-shadow themeColor1 text-center border w-72 mx-auto py-2 border-white px-2 border-dashed">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureProducts &&
            featureProducts.featureProduct &&
            featureProducts.featureProduct.map((product) => (
              <ProductCards key={product._id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
}
