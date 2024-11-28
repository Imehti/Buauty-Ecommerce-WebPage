import useProducts from "@/hooks/useProducts";
import ProductCards from "./Product-cards";
import ReusableSwiper from "./Swiper";
import { useEffect } from "react";

const ProductsSwiper = () => {
  const { data , refetch } = useProducts();

  useEffect(()=>{
    refetch()
  },[])

 const products=data?.slice(0,30)
  return (
    <ReusableSwiper
      data={products}
      renderSlide={(product) => (
        <ProductCards
        //id={product.id}
          name={product.name}
          product_type={product.product_type}
          price={product.price}
          price_sign={product.price_sign}
          image_link={product.api_featured_image}
        />
      )}
    />
  );
};

export default ProductsSwiper