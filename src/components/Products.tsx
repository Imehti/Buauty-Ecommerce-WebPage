import ProductsSwiper from "./Swiper";


const ProductsPage = () => {
    return ( 
        <>
      <div className="h-fit">
      <div className="flex justify-center items-center mt-12">
            <h1 className="text-3xl font-bold">
                Beauty Products
            </h1>
          
        </div>
        <ProductsSwiper />
      </div>

        </>
     );
}
 
export default ProductsPage;