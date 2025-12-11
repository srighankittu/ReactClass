import { useEffect, useState } from "react";

const FetchDataComponent = () => {
  // [{}, {}]
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    //API
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setLoading(false);
    console.log(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => {
        return <div>{product.title}</div>;
      })}
    </>
  );
};

export default FetchDataComponent;
