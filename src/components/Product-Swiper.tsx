import useProducts from "@/hooks/useProducts";
import ProductCards from "./Product-cards";
import ReusableSwiper from "./Swiper";

const ProductsSwiper = () => {
  const { data: products } = useProducts();

  return (
    <ReusableSwiper
      data={products}
      renderSlide={(product) => (
        <ProductCards
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