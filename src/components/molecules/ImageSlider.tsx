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
      {images?.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={
              url ||
              "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
            }
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e";
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
