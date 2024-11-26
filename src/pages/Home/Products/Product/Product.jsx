import React from "react";

const Product = ({product}) => {
const {title,category,thumbnail} = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
