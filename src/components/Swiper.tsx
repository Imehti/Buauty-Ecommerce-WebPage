import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useProducts from "@/hooks/useProducts";
import ProductCards from "./Product-cards";

const ProductsSwiper = () => {
  const { data: products } = useProducts();

  return (
    <div className="mt-24 m-12 flex justify-center">
      <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={4}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {products?.map((product) => (
          <div key={product.id}>
            <SwiperSlide>
              <ProductCards
                name={product.name}
                product_type={product.product_type}
                price={product.price}
                price_sign={product.price_sign}
                image_link={product.api_featured_image}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSwiper;
