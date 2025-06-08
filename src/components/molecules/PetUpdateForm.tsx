import type { Pet, PetStatus } from "../../types/pet";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePet } from "../../api/pets";
import { FormInput } from "../atoms/FormInput";
import { useEffect } from "react";

interface PetUpdateFormData {
  name: string;
  status: PetStatus;
}

interface PetUpdateFormProps {
  pet: Pet;
  onClose: () => void;
}

export const PetUpdateForm = ({ pet, onClose }: PetUpdateFormProps) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PetUpdateFormData>({
    defaultValues: {
      name: pet.name,
      status: pet.status,
    },
  });

  useEffect(() => {
    reset({ name: pet.name, status: pet.status });
  }, [pet, reset]);

  const updatePetMutation = useMutation({
    mutationFn: (data: PetUpdateFormData) => updatePet(pet.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet", String(pet.id)] });
      onClose();
    },
  });

  const onSubmit = (data: PetUpdateFormData) => {
    updatePetMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        label="Pet Name"
        name="name"
        register={register}
        errors={errors}
        required
      />
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Status</span>
        </label>
        <select
          className="w-full select select-bordered"
          {...register("status", { required: "Status is required" })}
        >
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
        {errors.status && (
          <span className="mt-1 text-sm text-error">
            {errors.status.message}
          </span>
        )}
      </div>
      <div className="modal-action">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={updatePetMutation.isPending}
        >
          {updatePetMutation.isPending ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Update Pet"
          )}
        </button>
        <button type="button" className="btn" onClick={onClose}>
          Cancel
        </button>
      </div>
      {updatePetMutation.isError && (
        <div className="mt-4 alert alert-error">
          <span>Error updating pet. Please try again.</span>
        </div>
      )}
    </form>
  );
};
