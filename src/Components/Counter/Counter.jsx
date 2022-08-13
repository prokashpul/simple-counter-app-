import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //  increment handler
  const increment = () => {
    setCount(count + 1);
  };
  //  increment handler
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="shadow-2xl p-10 rounded-2xl">
      <h2 className="text-4xl">Simple counter apps</h2>
      <div className="text-3xl text-red-500 text-center">{count}</div>
      <div className="flex justify-center gap-3 my-5">
        <button
          onClick={increment}
          className="h-10 w-36 rounded-xl cursor-pointer text-white text-xl bg-gray-500"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="h-10 w-36 rounded-xl cursor-pointer text-white text-xl bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
