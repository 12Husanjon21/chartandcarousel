import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-md bg-gray-300">
      <Carousel slideInterval={3000}>
        {products.slice(0, 20).map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-52 h-52 rounded-md bg-inherit object-contain"
            />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-md mt-1">${product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
