import React, { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import QuantityCounter from "@/components/QuantityCounter";
import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import useProducts from "@/hooks/useProducts";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/typedhooks";
import { addToCart } from "@/features/cart-slice";
import { useRecoilValue } from "recoil";
import currentUserState from "@/selector/currentUser";
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

  const user = useRecoilValue(currentUserState);
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItem =
    user && user.uid
      ? cartItems[user.uid]?.find((item) => item.id === productId)
      : null;

  // Local state to handle quantity before adding to the cart
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product && user && user !== null) {
      dispatch(
        addToCart({
          userId: user.uid,
          item: { ...product, quantity: localQuantity },
        })
      );
      navigate("/cart");
    } else {
      navigate("/login");
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
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 h-fit md:relative">
        <div className="md:absolute col-span-1 lg:col-span-2 ml-0 lg:ml-12 p-4 lg:p-12 top-0">
          <img
            className="w-full md:w-[60%] h-auto object-fill pt-8"
            src={product?.api_featured_image}
            alt={product?.name}
          />
          <div className="h-fit mt-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {product?.product_colors.slice(0, 20).map((item) => (
              <div className="flex space-x-3" key={item.colour_name}>
                <div
                  className={`w-6 h-6 rounded-full`}
                  style={{ backgroundColor: item.hex_value }}
                ></div>
                <span className="text-sm">{item.colour_name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:absolute flex flex-col items-start justify-start h-fit m-4 lg:m-6 space-y-8 left-[60%] top-[80%]">
          {/* Product Name */}
          <h1 className="text-xl lg:text-2xl font-bold">{product?.name}</h1>
          <h1 className="text-lg lg:text-xl font-bold">{product?.product_type}</h1>

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
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-3 p-4">
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
                className="bg-green-600 text-white px-4 py-2 mt-4 sm:mt-0"
              >
                Add To Cart
              </Button>
            ) : (
              <span className="text-green-600 font-semibold mt-4 sm:mt-0">
                <Link to={"/cart"}>Already in Cart</Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;