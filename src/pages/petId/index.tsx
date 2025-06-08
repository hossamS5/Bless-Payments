import { useParams, useNavigate } from "react-router-dom";
import { ImageSlider } from "../../components/molecules/ImageSlider";
import { PetDetails } from "../../components/templates/PetDetails";
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../../api/pets";
import { useState } from "react";
import { PetUpdateForm } from "../../components/molecules/PetUpdateForm";
import Spinner from "../../components/atoms/Spinner";
import ErrorTemplate from "../../components/templates/ErrorTemplate";

const PetId = () => {
  const { id: petId } = useParams();
  const navigate = useNavigate();
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const {
    data: pet,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pet", petId],
    queryFn: () => getPetById(Number(petId)),
    enabled: !!petId,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorTemplate />;
  }

  if (!pet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-base-200">
        <div role="alert" className="max-w-md text-center alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Pet not found!</span>
        </div>
        <button onClick={() => navigate("/")} className="mt-4 btn btn-primary">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container flex-grow p-4 mx-auto">
      <div className="flex justify-end gap-2 mb-4">
        <button
          className="btn btn-secondary"
          onClick={() => setShowUpdateModal(true)}
        >
          Update Pet
        </button>
      </div>
      <div className="flex flex-col gap-6 p-6 rounded-lg shadow-xl lg:flex-row bg-base-100">
        <div className="lg:w-1/2">
          <ImageSlider images={pet.photoUrls} />
        </div>
        <div className="lg:w-1/2">
          <PetDetails pet={pet} />
        </div>
      </div>

      {/* Update Pet Modal */}
      {showUpdateModal && (
        <dialog id="update_pet_modal" className="modal" open>
          <div className="modal-box">
            <h3 className="text-lg font-bold">Update Pet Details</h3>
            <PetUpdateForm
              pet={pet}
              onClose={() => setShowUpdateModal(false)}
            />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setShowUpdateModal(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default PetId;
