import React from "react";

const Product = ({ title, description, price, image }) => {
  return (
    <div>
      {title}-{price}-{description}
      <img src={image}></img>
    </div>
  );
};

export default Product;
