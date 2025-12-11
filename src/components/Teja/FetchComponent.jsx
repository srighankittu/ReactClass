import { useEffect, useState } from "react";

const FetchComponent = () => {
  const [user, setUser] = useState([]);

  async function fetchUsers() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setProducts(data.user);
    setLoading(false);
    console.log(user);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {User.map((U) => {
        return <div>{U.firstName}</div>;
      })}
    </>
  );
};

export default FetchComponent;