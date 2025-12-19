import { useEffect, useState } from "react";
import Product from "./Product";

const FetchDataComponent = () => {
  // [{}, {}]
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [x, setX] = useState(0);

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
  }, [x]);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <p className="text-5xl">Products</p>
      <div className="border-solid border-2 w-[245px]">
        <input
          className="border-solid border-1"
          type="text"
          placeholder="Search.."
        ></input>
        <button>Search</button>
      </div>
      <div className="flex flex-wrap">
        {products.map((product) => {
          return (
            <>
              <Product
                key={product.id} //default
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.images[0]}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default FetchDataComponent;

// virtual DOM - copy of the real dom.
// vd 1 - vd
//2;
