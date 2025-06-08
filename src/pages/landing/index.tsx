import { useState } from "react";
import { Header } from "../../components/atoms/Header";
import { PetCard } from "../../components/atoms/PetCard";
import { pets } from "../../data/pets";
import type { PetStatus } from "../../types/pet";

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<PetStatus | "all">("all");

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || pet.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      {/* <div className="container mx-auto p-4 md:p-8"> */}
      <div className="mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="form-control flex-1">
            <input
              type="text"
              placeholder="Search pets..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="select select-bordered w-full md:w-48"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as PetStatus | "all")
            }
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="sold">Sold</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
