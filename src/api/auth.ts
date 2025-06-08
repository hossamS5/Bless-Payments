import { apiClient } from "./client";

interface LoginResponse {
  token: string;
}

interface SignUpData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await apiClient.get<LoginResponse>("/user/login", {
    params: {
      username: data.username,
      password: data.password,
    },
  });
  return response.data;
};

export const signUp = async (data: SignUpData): Promise<void> => {
  await apiClient.post("/user/signup", data);
};

export const logout = async (): Promise<void> => {
  await apiClient.get("/user/logout");
};
