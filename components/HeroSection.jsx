import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="  heroSection mx-auto py-16">

      <section className="mx-auto max-w-7xl  py-16 container  px-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-100">Discover the Best Products</h1>
          <p className="mt-4 text-lg text-gray-50">Shop the latest trends and find your perfect style.</p>
          <div className="mt-8">
            <Link href={'/products'} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">Shop Now</Link>
          </div>
        </div>
      </section>
        </div>
    );
  };
  
  export default HeroSection;
  