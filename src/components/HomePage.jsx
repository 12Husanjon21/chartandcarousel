import React from "react";
import PhoneUsageChart from "./PhoneUsageChart";
import ProductsCarousel from "./ProductsCarousel";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Phone Usage & Products</h1>
      <PhoneUsageChart />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <ProductsCarousel />
      </div>
    </div>
  );
};

export default HomePage;
