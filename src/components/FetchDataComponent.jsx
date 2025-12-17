import { useEffect, useState } from "react";
import Product from "./Product";

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

  function removeItem(id) {
    //products = [null, {},..] 30
    //products = [{}, {},..] 29
    //product = {id:1, title:""};

    let filteredProducts = products.filter((product) => {
      if (product.id !== id) return product;
    });

    // filteredProducts
    setProducts(filteredProducts);
  }

  if (loading) return <div>loading...</div>;

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <Product
            key={product.id} //default
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.images[0]}
          />
        );
      })}
    </>
  );
};

export default FetchDataComponent;

// virtual DOM - copy of the real dom.
// vd 1 - vd
2;
