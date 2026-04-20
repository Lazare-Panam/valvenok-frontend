import axiosClient from "./axiosClient";
export interface ProductCategory {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  thumbnail: string;
  description: string;
  pricing: {
    min: number;
    max: number;
    currency: string;
  };
  variantInfo: {
    count: number;
    sizeRange: string;
  };
  keySpecs: {
    label: string;
    value: string;
  }[];
}

/**
 * Fetches products filtered by the categoryId slug
 */
export const fetchProductsByCategory = async (categoryId: string): Promise<ProductCategory[]> => {
  const { data } = await axiosClient.get<ProductCategory[]>(`/api/product/collection/${categoryId}`);
  return data;
};

/**
 * Example: Fetching a single product's full detail
 */
export const fetchProductDetail = async (id: string) => {
  const { data } = await axiosClient.get(`/api/product/${id}`)
  return data;
};

export interface RfqProductCardData {
  productId: string;
  name: string;
  manufacturer: string;
  categoryId: string;
  imageUrl: string;
  description: string;
}

export const fetchRfqProductsByCategory = async (categoryId: string): Promise<RfqProductCardData[]> => {
  const { data } = await axiosClient.get<RfqProductCardData[]>(`/api/product/rfqcollection/${categoryId}`);
  return data;
};

export const fetchRfqProductDetail = async (productId: string) => {
  const { data } = await axiosClient.get(`/api/product/rfqProduct/${productId}`);
  return data;
};