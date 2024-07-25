import useProducts from "@/hooks/useProducts";
import ProductsSwiper from "./Swiper";
import CardSkeleton from "./Card-Skeleton";

const ProductsPage = () => {

  const {isLoading,isError,error} =useProducts()

  if(isError) return <h1 className="text-2xl m-8 font-semibold text-destructive">{error.message}</h1>
  return (
    <>
      <div className="h-fit">
        <div className="flex justify-center items-center mt-12">
          <h1 className="text-3xl font-bold">Beauty Products</h1>
        </div>
        {isLoading ?<CardSkeleton />: <ProductsSwiper />}
      </div>
    </>
  );
};

export default ProductsPage;
