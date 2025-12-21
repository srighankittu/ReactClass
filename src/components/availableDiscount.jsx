import React from "react";
//Product
const availableDiscount = (Wrapper) => {
  return function EnhancedProduct(props) {
    const { product } = props;
    const stockWarning =
      product?.stock > 50 ? "Stock available" : "Low Stock - Order Soon";
    return (
      <div className="border border-solid">
        <span>{stockWarning}</span>
        <Wrapper {...props} />
      </div>
    );
  };
};

export default availableDiscount;
