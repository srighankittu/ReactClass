import { useEffect, useState } from "react";

const DemoHooks = () => {
  const [count, setCount] = useState(1);

  function temp() {
    console.log("this executes first");
    setCount(count);
  }

  useEffect(() => {
    temp();
  }, []);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count * 3);
        }}
      >
        Multiply
      </button>
    </div>
  );
};

export default DemoHooks;
