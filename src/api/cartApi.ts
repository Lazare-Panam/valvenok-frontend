import axiosClient from "./axiosClient";

export interface CartItemDto {
  productCode: string;
  productDescription: string;
  quantity: number;
  unitPrice: number;
  cloudinaryImageId?: string;
}

export const addToCartApi = async (data: CartItemDto) => {
  // Matches [HttpPost("addToCart")] in your CartController
  const response = await axiosClient.post("api/cart/addToCart", data);
  return response.data;
};

export const fetchCartApi = async () => {
  // Matches [HttpGet("getCart")]
  const response = await axiosClient.get("api/cart/getCart");
  return response.data;
};
export const removeFromCartApi = async (cartItemId: string) => {
  const response = await axiosClient.delete(`api/cart/removeFromCart/${cartItemId}`);
  return response.data;
};