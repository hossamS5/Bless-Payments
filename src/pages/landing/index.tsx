import { useState } from "react";
import PetCard from "../../components/molecules/PetCard";
import { useQuery } from "@tanstack/react-query";
import { getPetByStatus } from "../../api/pets";
import Spinner from "../../components/atoms/Spinner";
import ErrorTemplate from "../../components/templates/ErrorTemplate";

const Landing = () => {
  const [selectedStatus, setSelectedStatus] = useState<string[]>(["available"]);

  const {
    data: pets,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pets", selectedStatus],
    queryFn: () => getPetByStatus(selectedStatus),
  });

  const handleStatusChange = (status: string) => {
    setSelectedStatus((prevStatus) =>
      prevStatus.includes(status)
        ? prevStatus.filter((s) => s !== status)
        : [...prevStatus, status]
    );
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorTemplate />;
  }

  return (
    <div className="p-4 mx-auto md:p-8">
      <div className="flex justify-center gap-2 mb-6">
        <button
          className={`btn ${
            selectedStatus.includes("available") ? "btn-primary" : "btn-ghost"
          }`}
          onClick={() => handleStatusChange("available")}
        >
          Available
        </button>
        <button
          className={`btn ${
            selectedStatus.includes("pending") ? "btn-primary" : "btn-ghost"
          }`}
          onClick={() => handleStatusChange("pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${
            selectedStatus.includes("sold") ? "btn-primary" : "btn-ghost"
          }`}
          onClick={() => handleStatusChange("sold")}
        >
          Sold
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pets?.map((pet, index) => (
          <div key={index}>
            <PetCard pet={pet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
