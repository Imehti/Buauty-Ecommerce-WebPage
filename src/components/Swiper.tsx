import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Products } from "@/hooks/useProducts";
import { TeamMembersProps } from "./Team-Card";

interface SwiperProps<T> {
  data: T[] | undefined;
  renderSlide: (item: T) => JSX.Element;
  swiperConfig?: {
    spaceBetween?: number;
    slidesPerView?: number;
    navigation?: boolean;
    pagination?: {
      dynamicBullets?: boolean;
      dynamicMainBullets?: number;
    };
    scrollbar?: {
      draggable?: boolean;
    };
    breakpoints?: {
      [key: number]: {
        slidesPerView?: number;
        spaceBetween?: number;
      };
    };
  };
}

const ReusableSwiper = <T extends Products | TeamMembersProps>({
  data,
  renderSlide,
  swiperConfig,
}: SwiperProps<T>) => {
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
