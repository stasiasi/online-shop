<template>
  <header class="header">
    <div class="header__user-info user">
      <div class="user__avatar">
        <img :src="userStore.userInfo.image" width="30px" height="30px" />
      </div>
      <span class="user__username">{{ userStore.fullName }}</span>
    </div>
    <button class="header__logout" @click="logOut()">Log out</button>
    <button class="header__logout"  @click="toggleCartPopup">Cart</button>
  </header>
  <cart-popup v-if="isCartPopupVisible" @click="closePopupOutside"></cart-popup>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import useCart from '../composables/useCart'
import CartPopup from '../views/CartView.vue'

const { toggleCartPopup, closePopupOutside, isCartPopupVisible } = useCart()

const router = useRouter();
const userStore = useAuthStore();

const logOut = () => {
  userStore.logout();
  router.push('/log');
};
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.header {
  display: flex;
  padding: 15px 55px;
  background-color: #4a5e2d;
  align-items: center;
  justify-content: end;

  &__user-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-right: 3px solid white;
  }

  &__logout {
    height: 40px;
    border: none;
    background-color: $primary-accent-color-light;
    cursor: pointer;
    padding: 0 5px;
    @include font($font-color: $primary-color-light, $size: 20px);

    &:hover {
      border-radius: 10px;
      background-color: $primary-accent-color-dark;
    }
  }

  .user {
    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: $primary-color-light;
      border-radius: 50%;
    }
    &__username {
      margin: 0px 20px 0 10px;
      @include font($size: 20px, $font-color: $primary-color-light);
    }
  }
}
</style>
