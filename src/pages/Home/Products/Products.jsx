import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const axiosPublic = useAxiosPublic();

  const { data: products = [] } = useQuery({
    queryKey: ["_id"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  console.log(products);

  return (
    <>
      <h2 className="text-center my-2 text-xl font-bold">All Category</h2>
      <div className="grid mx-auto md:grid-cols-3 gap-2">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
