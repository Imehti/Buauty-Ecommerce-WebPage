import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductsSwiper= () => {
  return (
   <div className='mt-24 m-12 flex justify-center'>
     <Swiper
     className="mySwiper"
      // install Swiper modules
      modules={[Navigation, Pagination,Scrollbar]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 4,
      }}
      scrollbar={{ draggable: true }}
   
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
   </div>
  );
};

export default ProductsSwiper;