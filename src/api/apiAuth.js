import axiosInstance from './apiHelper';

export function logIn(username, password) {
  return axiosInstance.post(`/auth/login`, {
    username: username,
    password: password
  });
}
