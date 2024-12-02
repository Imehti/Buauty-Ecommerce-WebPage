import React, { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import QuantityCounter from "@/components/QuantityCounter";
import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import useProducts from "@/hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/typedhooks";
import { addToCart } from "@/features/cart-slice";

const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id!, 10);

  const { GetProductById } = useProducts();
  const {
    data: product,
    isError,
    error,
    isLoading,
  } = GetProductById(productId);

  const cartItem = useAppSelector((state) =>
    state.cart.items.find((item) => item.id === productId)
  );

  // Local state to handle quantity before adding to the cart
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: localQuantity }));
      navigate("/cart");
    }
  };

  const incrementLocalQuantity = () => {
    setLocalQuantity((prev) => prev + 1);
  };

  const decrementLocalQuantity = () => {
    if (localQuantity > 1) {
      setLocalQuantity((prev) => prev - 1);
    }
  };

  if (isError) return <p>{error.message}</p>;
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-1">
        <div className="col-span-2 ml-12 p-12">
          <img
            className="w-[90%] h-[90%] object-fill"
            src={product?.image_link}
            alt={product?.name}
          />
        </div>
        <div className="flex flex-col items-start justify-start h-2/3 m-6 space-y-3">
          {/* Product Name */}
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <h1 className="text-xl font-bold">{product?.product_type}</h1>

          {/* Price */}
          <span className="text-lg text-gray-700">
            {product?.price}
            {product?.price_sign}
          </span>

          {/* Rating Stars */}
          <div className="flex space-x-1">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>

          {/* Product Description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            {product?.description}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-3">
            {!cartItem ? (
              // If not in cart, use local quantity logic
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-44 h-fit">
                <div className="flex justify-center items-center w-16 bg-gray-100 text-gray-700 text-sm font-medium border-r border-gray-300">
                  QTY
                </div>
                <button
                  disabled={localQuantity <= 1}
                  onClick={decrementLocalQuantity}
                  className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200 border-r border-gray-300"
                >
                  -
                </button>
                <div className="flex-1 flex justify-center items-center text-gray-900 text-lg font-semibold">
                  {localQuantity}
                </div>
                <button
                  onClick={incrementLocalQuantity}
                  className="w-8 h-8 flex justify-center items-center text-gray-700 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            ) : (
              // If in cart, use the QuantityCounter component
              <QuantityCounter id={productId} quantity={cartItem.quantity} />
            )}
            {!cartItem ? (
              <Button
                onClick={handleAddToCart}
                className="bg-green-600 text-white px-4 py-2"
              >
                Add To Cart
              </Button>
            ) : (
              <span className="text-green-600 font-semibold">
                Already in Cart
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
