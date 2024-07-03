<template>
  <div>
    <header class="header">
      <div class="header__user-info user">
        <div class="user__avatar">
          <img :src="userStore.userInfo.image" />
        </div>
        <span class="user__username">{{ userStore.fullName }}</span>
      </div>
      <div class="header__logout">
        <button
          class="header__button"
          @click="logOut()"
        >
          Log out
        </button>
      </div>
      <button
        class="header__button"
        @click="toggleCartPopup"
      >
        Cart
      </button>
    </header>
    <cart-popup
      v-if="isCartPopupVisible"
      @click="closePopupOutside"
    ></cart-popup>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import useCart from '../composables/useCart';
import CartPopup from '../views/CartView.vue';

const { toggleCartPopup, closePopupOutside, isCartPopupVisible } = useCart();

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
  }

  &__logout {
    margin: 0 20px;
    padding: 0 20px;
    border-right: 3px solid white;
    border-left: 3px solid white;
  }

  &__button {
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

    & img {
      width: 30px;
      height: 30px;
    }
  }

  &__username {
    margin-left: 10px;
    @include font($size: 20px, $font-color: $primary-color-light);
  }
}
</style>
