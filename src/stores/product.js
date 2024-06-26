import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', () => {
  const productInfo = ref([]);

  const getUserInfo = computed(() => productInfo.value);
  const set = (info) => {
    productInfo.value = info;
  };
  return { productInfo, getUserInfo, set };
});
