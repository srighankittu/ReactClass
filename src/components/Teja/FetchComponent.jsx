import { useEffect, useState } from "react";

const FetchComponent = () => {
  const [pro, setPro] = useState([]);

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.pro);
    setLoading(false);
    console.log(pro);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {pro.map((product) => {
        return <div>{product.title}</div>;
      })}
    </>
  );
};

export default FetchComponent;