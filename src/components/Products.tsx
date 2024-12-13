import useProducts from "@/hooks/useProducts";

import { Button } from "./ui/button";
import ProductsSwiper from "./Product-Swiper";
import ProductCardSkeleton from "./CardSkelteon";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const {fetchProducts} = useProducts()
  const { isLoading, isError, error } = fetchProducts

  if (isError)
    return (
      <h1 className="text-2xl m-8 font-semibold text-destructive">
        {error.message}
      </h1>
    );
  return (
    <>
      <div className="h-fit">
        <div className="flex justify-center items-center mt-12">
          <h1 className="text-3xl font-bold">Beauty Products</h1>
        </div>
        {isLoading ? <ProductCardSkeleton /> : <ProductsSwiper />}
      </div>
      <div className="flex justify-center items-center h-fit">
        <Button className="text-xl mb-3" variant={"link"}>
          <Link to={'/allProducts'}>View All Products</Link>
        </Button>
      </div>
    </>
  );
};

export default ProductsPage;
