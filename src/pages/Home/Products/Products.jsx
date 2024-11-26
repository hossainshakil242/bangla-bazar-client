import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  console.log(products);

  return (
    <>
    <h2 className="text-center my-2 text-xl font-bold">All Category</h2>
      <div className="grid mx-auto md:grid-cols-3 gap-2">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
