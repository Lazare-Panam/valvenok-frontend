import axiosClient from './axiosClient';
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
  closedate?: string;
  tracking_number_waybill?: string;
  delivery_date?: string;
}

export interface Deal {
  id: string;
  properties: DealProperties;
  lineItems: DealLineItem[];
}
export const fetchDealsByNameApi = async (dealName: string): Promise<Deal[]> => {
  const res = await axiosClient.get('api/hubspot/deals/by-name', {
    params: { dealName },
  });
  return res.data;
};

export const fetchDealsByEmailApi = async (email: string): Promise<Deal[]> => {
  const res = await axiosClient.get('api/hubspot/deals/by-email', {
    params: { email },
  });
  return res.data;
};