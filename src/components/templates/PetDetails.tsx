import type { Pet } from "../../types/pet";

interface PetDetailsProps {
  pet: Pet;
}

export const PetDetails = ({ pet }: PetDetailsProps) => {
  return (
    <div className="shadow-xl card bg-base-100">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold card-title">{pet?.name}</h2>
          <div className="badge badge-secondary badge-lg">
            {pet?.category?.name}
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-wrap gap-2">
          {pet?.tags.map((tag) => (
            <div key={tag.id} className="badge badge-outline badge-lg">
              {tag?.name}
            </div>
          ))}
        </div>

        <div className="mt-4 shadow stats">
          <div className="stat">
            <div className="stat-title">Status</div>
            <div
              className={`stat-value ${
                pet?.status === "available"
                  ? "text-success"
                  : pet.status === "pending"
                  ? "text-warning"
                  : "text-error"
              }`}
            >
              {pet?.status}
            </div>
          </div>
        </div>

        <div className="justify-end mt-4 card-actions">
          <button className="btn btn-primary">Adopt Now</button>
          <button className="btn btn-outline">Contact Seller</button>
        </div>
      </div>
    </div>
  );
};
