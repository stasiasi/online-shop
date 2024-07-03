<template>
  <div class="cart-popup-overlay">
    <div class="cart-popup">
      <p class="cart-popup__title">Cart</p>
      <div class="cart-popup__items">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="cart-popup__item item"
        >
          <div class="item__info">
            <span class="item__title">{{ item.title }}</span>
            <span>{{ item.price * item.quantity }} $</span>
          </div>
          <div class="item__quantity-control">
            <button
              @click="decreaseQuantity(item)"
              class="item__quantity-btn"
            >
              -
            </button>
            <span class="item__quantity">{{ item.quantity }}</span>
            <button
              @click="increaseQuantity(item)"
              class="item__quantity-btn"
            >
              +
            </button>
          </div>
          <button
            @click="removeFromCart(item)"
            class="item__delete"
          >
            Delete
          </button>
        </div>
      </div>
      <p class="cart-popup__total-price">
        Total сost: {{ totalPrice.toFixed(2) }} $
      </p>
    </div>
  </div>
</template>

<script setup>
import useCart from '../composables/useCart';

const {
  cartItems,
  removeFromCart,
  totalPrice,
  increaseQuantity,
  decreaseQuantity
} = useCart();
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.cart-popup {
  background-color: $primary-color-light;
  padding: 20px;
  border-radius: 8px;
  width: 600px;

  &__title {
    @include font(
      $font-color: $primary-accent-color-dark,
      $size: 28px,
      $weight: 600
    );
    margin-bottom: 30px;
  }

  &__items {
    max-height: 300px;
    overflow-y: auto;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__total-price {
    @include font(
      $font-color: $primary-accent-color-dark,
      $size: 24px,
      $weight: 600
    );
    margin-top: 30px;
  }
}

.item {
  &:not(:last-child) {
    border-bottom: 2px solid $primary-color-grey;
    padding-bottom: 15px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  &__title {
    @include font($size: 18px, $weight: 600);
  }

  &__quantity {
    @include font($size: 20px, $weight: 400);
  }

  &__quantity-control {
    width: 100px;
    display: flex;
    justify-content: space-between;
  }

  &__quantity-btn {
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 8px;
    background-color: $primary-accent-color-light;
    cursor: pointer;

    @include font($font-color: $primary-color-light);

    &:hover {
      background-color: $primary-accent-color-dark;
    }
  }

  &__delete {
    padding: 5px 10px;
    margin-right: 10px;
    border: none;
    border-radius: 8px;
    background-color: $primary-accent-color-light;
    cursor: pointer;

    @include font($font-color: $primary-color-light);

    &:hover {
      background-color: $primary-accent-color-dark;
    }
  }
}

.cart-popup-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
