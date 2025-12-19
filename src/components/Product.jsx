import React from "react";

const Product = ({ title, description, price, image }) => {
  return (
    <div className="w-80 m-2 border-solid border-4 flex">
      <div>
        <img src={image}></img>
      </div>
      <div>
        <div>Name: {title}</div>
        <div>Description: {description}</div>
        <div>Price: {price}</div>
      </div>
    </div>
  );
};

export default Product;
