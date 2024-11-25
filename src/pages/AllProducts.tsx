import React from "react";
import useAllProducts from "@/hooks/useAllProducts";
import ProductCards from "../components/Product-cards";

const AllProducts = () => {
  const { data: products , isLoading} = useAllProducts();
  if(isLoading) return <p>is loading</p>
  return (
    <>
    <div className="grid grid-cols-4 gap-10 p-10">

      {products?.map((product) => (
        <ProductCards
        key={product.id}
        name={product.name}
        price={product.price}
        price_sign={product.price_sign}
        image_link={product.image_link}
        product_type={product.product_type}
        />
      ))}
      </div>
    </>
  );
};

export default AllProducts;
