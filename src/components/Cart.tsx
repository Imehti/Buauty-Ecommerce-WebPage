import React from "react";
import { useAppDispatch, useAppSelector, } from "@/hooks/typedhooks";
import QuantityCounter from "./QuantityCounter";
import {  removeFromCart } from "@/features/cart-slice";
import { useRecoilValue } from "recoil";
import currentUserState from "@/selector/currentUser";

const Cart = () => {
  const user = useRecoilValue(currentUserState);
  const items = useAppSelector((state) => state.cart.items);
  const userItems=user?.uid ? items[user.uid] : []

  const dispatch = useAppDispatch();
  const totalPrice =Array.isArray(userItems) ? userItems.reduce(
    (acc, item) => acc + Number(item.quantity) * Number(item.price),
    0
  ) : 0;  

 

  return (
    <div className="container mx-auto p-4 h-fit">
      <h1 className="text-3xl font-serif text-center mb-6">Your Cart</h1>
      {Array.isArray(userItems) && userItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {Array.isArray(userItems) && userItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                className="w-32 h-32 object-cover mr-4"
                src={item.api_featured_image}
                alt={item.name}
              />
              <p className="flex-1 font-semibold">{item.name}</p>
              <span className="text-lg font-bold mr-4">
                {Number(item.price) * Number(item.quantity)}
                {item.price_sign}
              </span>
              <QuantityCounter id={item.id} quantity={item.quantity} />
              <button
                onClick={() =>
                  dispatch(
                    removeFromCart({ userId: user?.uid, itemId: item.id })
                  )
                }
                className="ml-4"
                aria-label="Remove item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}

          <div className="mt-4 text-right flex justify-end space-x-1">
            <p>Total Price :</p>
            <span>{totalPrice + "$"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
