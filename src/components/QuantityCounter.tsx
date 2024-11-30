import React from "react";
import { decrement, increment } from "@/features/counter-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/typedhooks";

const QuantityCounter = () => {
  const quantity = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-44 h-fit">
        <div className="flex justify-center items-center w-16 bg-gray-100 text-gray-700 text-sm font-medium border-r border-gray-300">
          QTY
        </div>

        <button
        disabled={quantity===0}
          onClick={() => dispatch(decrement())}
          className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200 border-r border-gray-300"
        >
          -
        </button>

        <div className="flex-1 flex justify-center items-center text-gray-900 text-lg font-semibold">
          {quantity}
        </div>

        <button
          onClick={() => dispatch(increment())}
          className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantityCounter;
