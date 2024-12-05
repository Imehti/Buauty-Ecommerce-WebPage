import React from "react";
import { useAppDispatch } from "@/hooks/typedhooks";
import { updateQuantity } from "@/features/cart-slice";
import { useRecoilValue } from "recoil";
import currentUserState from "@/selector/currentUser";

interface QuantityCounterProps {
  id: number;
  quantity: number;
}

const QuantityCounter = ({ id, quantity }: QuantityCounterProps) => {
  const dispatch = useAppDispatch();
  const user = useRecoilValue(currentUserState ); // Get the current user from Recoil

  const increment = () => {
    if (user) {
      dispatch(updateQuantity({ userId: user.uid, id, quantity: quantity + 1 }));
    }
  };

  const decrement = () => {
    if (quantity > 0 && user) {
      dispatch(updateQuantity({ userId: user.uid, id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-44 h-fit">
      <div className="flex justify-center items-center w-16 bg-gray-100 text-gray-700 text-sm font-medium border-r border-gray-300">
        QTY
      </div>
      <button
        disabled={quantity === 0}
        onClick={decrement}
        className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200 border-r border-gray-300"
      >
        -
      </button>
      <div className="flex-1 flex justify-center items-center text-gray-900 text-lg font-semibold">
        {quantity}
      </div>
      <button
        onClick={increment}
        className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;