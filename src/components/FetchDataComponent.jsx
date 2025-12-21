import { useContext, useEffect, useRef, useState } from "react";
import Product from "./Product";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import UserName from "./UserName";
import EnhancedProduct from "./EnhancedProduct";

const FetchDataComponent = () => {
  // [{}, {}]
  const [products, setProducts] = useState([]);
  const [filteredPrducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef(null);
  const { user, setUser } = useContext(AppContext);
  // const [search, setSearch] = useState("");
  // useState, useEffect, useRef
  // useMemo, useCallback --> little js depth

  // let, var, const, strings, string operations, array, array operatison, map filter and reduece, objects
  // Controlled and uncontrollede
  // controlled --> behaviour of that changes with props, when props are changing the behaviour of the component will also change
  // uncontroolled --> uncontrolled conponent
  // prop drilling
  // Higher order component --> They take a component as an input, and give another component as an output
  // HOC,
  // Learn more about routing
  //prop drilling  -->

  // new project
  // swiggy open APIs
  // redux -->

  async function fetchProducts() {
    //API
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products); //[{}. {}]
    setFilteredProducts(data.products);
    setLoading(false);
    console.log(products);
  }

  function searchFilter() {
    let filteredPrducts = products.filter((product) => {
      let searchVal = searchRef.current.value;
      if (product.title.includes(searchVal)) return product;
    });
    console.log(filteredPrducts);

    setFilteredProducts(filteredPrducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <p className="text-5xl">Products</p>

      <Link to="about">About</Link>
      <div className="border-solid border-2 w-[245px]">
        <input
          className="border-solid border-1"
          type="text"
          placeholder="Search.."
          ref={searchRef}
        ></input>
        <button onClick={searchFilter}>Search</button>
      </div>
      <div className="border-solid border-2 w-[245px]">
        <input
          className="border-solid border-1"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button>Search</button>
      </div>
      <Link to="user">User</Link>
      <div className="flex flex-wrap">
        {filteredPrducts.map((product) => {
          return (
            <EnhancedProduct
              key={product.id} //default
              product={product}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.images[0]}
            />
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
//useContext --> react hook
