import { apiClient } from "./client";
import type { Pet } from "../types/pet";

export const getPetByStatus = async (status: string[]): Promise<Pet[]> => {
  const response = await apiClient.get<Pet[]>("/pet/findByStatus", {
    params: {
      status: status.join(","),
    },
  });
  return response.data;
};

export const getPetById = async (id: number): Promise<Pet> => {
  const response = await apiClient.get<Pet>(`/pet/${id}`);
  return response.data;
};

interface UpdatePetData {
  name?: string;
  status?: string;
}

export const updatePet = async (
  petId: number,
  data: UpdatePetData
): Promise<void> => {
  const params = new URLSearchParams();
  if (data.name) {
    params.append("name", data.name);
  }
  if (data.status) {
    params.append("status", data.status);
  }
  await apiClient.post(`/pet/${petId}`, params.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
