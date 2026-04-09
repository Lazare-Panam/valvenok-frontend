import axiosClient from "./axiosClient";

export interface PurchaseOrderItemResponse {
  id: string;
  productCode: string;
  productDescription: string;
  quantity: number;
  unitPrice: number;
  cloudinaryImageId?: string;
}

export interface PurchaseOrderResponse {
  id: string;
  stripeSessionId: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  items: PurchaseOrderItemResponse[];
}

export const fetchOrdersApi = async (): Promise<PurchaseOrderResponse[]> => {
  const response = await axiosClient.get('api/orders');
  return response.data;
};