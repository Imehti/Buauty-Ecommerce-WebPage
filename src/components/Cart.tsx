import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/typedhooks";
import QuantityCounter from "./QuantityCounter";
import { removeFromCart } from "@/features/cart-slice";
import { useRecoilValue } from "recoil";
import currentUserState from "@/selector/currentUser";

const Cart = () => {
  const user = useRecoilValue(currentUserState);
  const items = useAppSelector((state) => state.cart.items);
  const userItems = user?.uid ? items[user.uid] : [];
  let userId: string;
  if (user && user !== undefined) userId = user.uid;

  const dispatch = useAppDispatch();
  const totalPrice = Array.isArray(userItems)
    ? userItems.reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      )
    : 0;

  return (
    <div className="container mx-auto p-4 h-fit">
      <h1 className="text-3xl font-serif text-center mb-6">Your Cart</h1>
      {Array.isArray(userItems) && userItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {Array.isArray(userItems) &&
            userItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col space-y-2 sm:flex-row items-center border-b py-4 sm:py-6 sm:px-4"
              >
                <img
                  className="w-32 h-32 object-cover mb-4 sm:mb-0 sm:mr-4"
                  src={item.api_featured_image}
                  alt={item.name}
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg sm:text-xl">
                    {item.name}
                  </p>
                  <span className="text-lg font-bold block sm:inline mr-4">
                    Price:{Number(item.price) * Number(item.quantity)}{" "}
                    {item.price_sign}
                  </span>
                </div>
                <div className="flex justify-center sm:items-center sm:flex-row md:justify-between sm:w-auto w-full mt-2 sm:mt-0">
                  <QuantityCounter id={item.id} quantity={item.quantity} />
                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart({ userId: userId, itemId: item.id })
                      )
                    }
                    className="ml-4 mt-2 sm:mt-0 text-red-600 hover:text-red-800"
                    aria-label="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

          <div className="mt-6 text-right">
            <p className="text-lg sm:text-xl font-semibold">Total Price:</p>
            <span className="text-xl sm:text-2xl font-bold">{totalPrice}$</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
