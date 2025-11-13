import React, { useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([
    {
      name: "Jolof Rice",
      price: 1500,
      image: "/rice.webp",
    },
    {
      name: "Ankara Fabric",
      price: 5000,
      image: "/ankara.jpeg",
    },
    {
      name: "Suya",
      price: 1000,
      image: "/suya.webp",
    },
    {
      name: "Aso-Ebi",
      price: 15000,
      image: "/aso-ebi.jpeg",
    },
    {
      name: "Palm Wine",
      price: 1200,
      image: "/palmwine.webp",
    },
    {
      name: "Agbada",
      price: 25000,
      image: "/agbada.jpeg",
    },
    {
      name: "Chin-Chin",
      price: 500,
      image: "/chinchin.jpeg",
    },
    {
      name: "Puff-Puff",
      price: 300,
      image: "/puffpuff-nigerian.webp",
    },
  ]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2">
      {products.map((product) => {
        return (
          <div className="flex flex-col gap-2 rounded-lg bg-[#d1d1d1] p-4">
            <img
              src={product.image}
              className="rounded w-full aspect-square object-cover"
              alt=""
            />
            <p className="font-bold text-6">{product.name}</p>
            <span>₦{product.price.toLocaleString()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
