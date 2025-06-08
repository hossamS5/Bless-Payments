import { useParams, useNavigate } from "react-router-dom";
import { ImageSlider } from "../../components/atoms/ImageSlider";
import { PetDetails } from "../../components/atoms/PetDetails";
import { useQuery } from "@tanstack/react-query";
import { getPetById } from "../../api/pets";
import Spinner from "../../components/atoms/Spinner";
import ErrorTemplate from "../../components/atoms/ErrorTemplate";

const PetId = () => {
  const { id: petId } = useParams();
  const navigate = useNavigate();

  const {
    data: pet,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pet", petId],
    queryFn: () => getPetById(Number(petId)),
    enabled: !!petId, // Only run the query if petId is available
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorTemplate />;
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center p-4">
        <div role="alert" className="alert alert-warning max-w-md text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
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
        <button onClick={() => navigate("/")} className="btn btn-primary mt-4">
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex-grow">
      <div className="flex flex-col lg:flex-row gap-6 bg-base-100 p-6 rounded-lg shadow-xl">
        <div className="lg:w-1/2">
          <ImageSlider images={pet.photoUrls} />
        </div>
        <div className="lg:w-1/2">
          <PetDetails pet={pet} />
        </div>
      </div>
    </div>
  );
};

export default PetId;
