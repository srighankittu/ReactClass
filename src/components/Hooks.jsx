import { useEffect, useState } from "react";

const Hooks = () => {
  //What is a hook?
  // A simple js function that is given to us by react library
  // useState retuns an array [variable_name, setterFunction]

  const [count, setCount] = useState(0); //state variable!
  const [x, setX] = useState(1);

  function temp() {
    console.log("inside temp");
    setCount(count + 1); // setter
  }

  useEffect(() => {
    temp();
  }, []);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          let data = count + 1;
          setCount(data);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        inc X
      </button>
    </div>
  );
};
//functions
//arrow functions
//anonymous function
export default Hooks;
