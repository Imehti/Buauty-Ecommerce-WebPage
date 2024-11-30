import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import QuantityCounter from "@/components/QuantityCounter";
import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import useProducts from "@/hooks/useProducts";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/typedhooks";
import { addToCart } from "@/features/cart-slice";

const ProductDetailsPage = () => {
  const quantity = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch()


  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id!, 10);

  const { GetProductById } = useProducts();
  const {
    data: product,
    isError,
    error,
    isLoading,
  } = GetProductById(productId);

  const handleNavigate = () => {
    if (product && quantity > 0) {
      dispatch(addToCart({...product,quantity}))
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
            <QuantityCounter />
            <Button onClick={()=>handleNavigate()} className="bg-green-600 text-white px-4 py-2">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
