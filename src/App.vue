<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<style scoped></style>
