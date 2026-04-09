import axiosClient from "./axiosClient";

export const createCheckoutSessionApi = async (): Promise<string> => {
  const response = await axiosClient.post('api/payment/create-checkout-session');
  return response.data.url;
};