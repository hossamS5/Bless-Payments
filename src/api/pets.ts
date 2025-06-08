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
