import axiosClient from "./axiosClient";

export const createCheckoutSessionApi = async (): Promise<string> => {
  const response = await axiosClient.post('/api/payment/create-checkout-session');
  return response.data.url;
};

export interface GuestCheckoutItemDto {
  productCode: string;
  productDescription: string;
  quantity: number;
  unitPrice: number;
  cloudinaryImageId?: string;
}

export interface GuestCheckoutDetails {
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
}

export interface GuestCheckoutRequest extends GuestCheckoutDetails {
  items: GuestCheckoutItemDto[];
}

export const createGuestCheckoutSessionApi = async (request: GuestCheckoutRequest): Promise<string> => {
  const response = await axiosClient.post('/api/payment/guest-checkout-session', request);
  return response.data.url;
};