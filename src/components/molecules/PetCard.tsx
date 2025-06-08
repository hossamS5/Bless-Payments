import type { Pet } from "../../types/pet";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  function shortenName(name: string, length: number) {
    if (!name) return "";
    return name.length > length ? name.slice(0, length) + "..." : name;
  }

  return (
    <div className="overflow-hidden transition-shadow duration-300 shadow-xl card max-w-96 bg-base-100 hover:shadow-2xl">
      <figure className="relative">
        <ImageSlider images={pet?.photoUrls} className="h-64" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between gap-1">
          <h2 className="text-2xl font-bold card-title">
            {shortenName(pet?.name || "", 14)}
          </h2>
          <div className="badge badge-secondary badge-lg whitespace-nowrap">
            {shortenName(pet?.category?.name || "", 8)}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {pet.tags.map((tag) => (
            <div key={tag.id} className="badge badge-outline badge-md">
              {shortenName(tag?.name || "", 8)}
            </div>
          ))}
        </div>
        <div className="justify-between mt-4 card-actions">
          <div
            className={`badge badge-lg text-xs capitalize shadpw-sm text-gray-600 ${
              pet?.status === "available"
                ? "badge-success"
                : pet?.status === "pending"
                ? "badge-warning"
                : "badge-error"
            }`}
          >
            {pet.status}
          </div>

          <Link to={`/pet/${pet?.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
