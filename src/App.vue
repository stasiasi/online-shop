<template>
  <div>
    <component :is="layoutComponent"></component>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
import HeaderLayout from './layouts/TheHeaderLayout.vue';
import EmptyLayout from './layouts/TheEmptyLayout.vue';
import { computed, onMounted } from 'vue';
import { useAuthStore } from './stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const layoutComponent = computed(() => {
  return authStore.isAuthenticated ? HeaderLayout : EmptyLayout;
});

onMounted(() => {
  authStore.currentUser();
  if (authStore.isAuthenticated) {
    router.push('/');
  } else {
    router.push('/log');
  }
});
</script>

<style scoped></style>
