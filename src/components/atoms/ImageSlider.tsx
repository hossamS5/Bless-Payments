import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageSliderProps {
  images: string[];
  className?: string;
}

export const ImageSlider = ({ images, className = "" }: ImageSliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className={`w-full rounded-lg ${className}`}
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
