import axiosClient from "./axiosClient";

export interface DealLineItem {
  name: string;
  description?: string;
  unitPrice?: number;
  quantity: number;
}

export interface DealProperties {
  dealName: string;
  amount?: string;
  dealStage: string;
}

export interface Deal {
  id: string;
  properties: DealProperties;
  lineItems: DealLineItem[];
}

export const fetchDealsApi = async (email: string): Promise<Deal[]> => {
  const response = await axiosClient.get(`api/hubspot/deals`, {
    params: { email },
  });
  return response.data;
};