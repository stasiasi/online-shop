import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref(null);
  const getUserInfo = computed(() => userInfo.value);
  function login(info) {
    userInfo.value = info;
  }
  function logout() {
    userInfo.value = null;
  }
  return { userInfo, getUserInfo, login, logout };
});
