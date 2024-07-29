import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Products } from "@/hooks/useProducts";
import { TeamMembersProps } from "./Team-Card";

interface SwiperProps {
  data: Products[] | undefined | TeamMembersProps[];
  renderSlide: (item: any) => JSX.Element;
  swiperConfig?: {
    spaceBetween?: number;
    slidesPerView?: number;
    navigation?: boolean;
    pagination?: any;
    scrollbar?: any;
    breakpoints?: any;
  };
}

const ReusableSwiper = ({ data, renderSlide, swiperConfig }: SwiperProps) => {
  const defaultConfig = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
    scrollbar: { draggable: true },
    breakpoints: {
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
    },
  };

  const config = { ...defaultConfig, ...swiperConfig };

  return (
    <div className="mt-24 m-12 flex justify-center">
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar]}
        {...config}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReusableSwiper;
