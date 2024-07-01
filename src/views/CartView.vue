<template>
  <div class="cart-popup-overlay">
    
    <div class="cart-popup">
      <h2>Cart</h2>
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p>{{ item.title }} - {{ item.price }} $ (x{{ item.quantity }})</p>
          <button @click="removeFromCart(item)">Delete</button>
        </div>
      </div>
      <p class="total-price">Total Cost: {{ totalPrice }} $</p>
    </div>
  </div>
</template>

<script setup>
import useCart from '../composables/useCart';

const { cartItems, removeFromCart, totalPrice } = useCart();

</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';
.cart-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cart-popup {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  width: 100%;
}

.cart-items {
  max-height: 300px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.total-price {
  font-weight: bold;
  margin-top: 20px;
}
</style>
