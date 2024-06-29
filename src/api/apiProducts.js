import axiosInstance from './apiHelper';

export function getProducts() {
  return axiosInstance.get(`/products?limit=0&skip=42`);
}
