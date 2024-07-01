import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { auth } from '../api/apiAuth';
import { getCurrentUser } from '../api/apiAuth';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('user', () => {
  const userInfo = ref(null);
  const isAuthenticated = ref(false);
  const router = useRouter();

  const user = computed(() => userInfo.value);
  const fullName = computed(() => {
    if (userInfo.value) {
      return `${userInfo.value.firstName} ${userInfo.value.lastName}`;
    }
    return '';
  });

  const currentUser = async () => {
    const token = localStorage.getItem('token');
    isAuthenticated.value = !!token;
    if (isAuthenticated.value) {
      const response = await getCurrentUser(token);
      userInfo.value = response.data;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await auth(username, password);
      userInfo.value = response.data;
      localStorage.setItem('token', response.data.token);
      isAuthenticated.value = true;
      router.push('/');
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    userInfo.value = null;
    localStorage.removeItem('token');
    isAuthenticated.value = false;
  };

  return { userInfo, isAuthenticated, user, fullName, currentUser, login, logout };
});
