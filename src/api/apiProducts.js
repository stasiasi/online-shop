import axiosInstance from './apiHelper';

export function getProducts(category) {
  return axiosInstance.get(`/products${category}`);
}
