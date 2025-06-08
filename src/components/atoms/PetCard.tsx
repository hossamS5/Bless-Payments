import type { Pet } from "../../types/pet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PetCardProps {
  pet: Pet;
}

export const PetCard = ({ pet }: PetCardProps) => {
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-64"
        >
          {pet.photoUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`${pet.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`badge badge-lg absolute top-[14px] text-sm px-5 left-[-20px] z-10 -rotate-45 ${
            pet.status === "available"
              ? "badge-success"
              : pet.status === "pending"
              ? "badge-warning"
              : "badge-error"
          }`}
        >
          {pet.status}
        </div>
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-2xl font-bold">{pet.name}</h2>
          <div className="badge badge-secondary badge-lg">
            {pet.category.name}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {pet.tags.map((tag) => (
            <div key={tag.id} className="badge badge-outline badge-md">
              {tag.name}
            </div>
          ))}
        </div>
        <div className="card-actions justify-between mt-4">
          {/* <div
            className={`badge badge-lg ${
              pet.status === "available"
                ? "badge-success"
                : pet.status === "pending"
                ? "badge-warning"
                : "badge-error"
            }`}
          >
            {pet.status}
          </div> */}
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};
