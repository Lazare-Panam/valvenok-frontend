// api/authApi.ts
import axiosClient from "./axiosClient";
export interface RegisterRequestDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}
export const registerUser = async (data: RegisterRequestDto) => {
  // Routes to [Route("api/[controller]")] -> UserController -> [HttpPost("register")]
  const response = await axiosClient.post("api/User/register", data);
  return response.data;
};

export const loginUser = async (data: LoginRequestDto) => {
 
  const response = await axiosClient.post("api/User/login", data);
  return response.data;
};
export const logoutUser = async (): Promise<void> => {
  await axiosClient.post('api/user/logout');
};