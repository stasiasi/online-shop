import { ref, computed } from 'vue';

const cartItems = ref([]);

export default function useCart() {
  const isCartPopupVisible = ref(false);

  const toggleCartPopup = (value = !isCartPopupVisible.value) => {
    isCartPopupVisible.value = value;
  };

  const closePopupOutside = (event) => {
    if (!event.target.closest('.cart-popup')) {
      isCartPopupVisible.value = false;
    }
  };

  const addToCart = (product) => {
    cartItems.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    });
  };

  const removeFromCart = (product) => {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems.value.splice(index, 1);
    }
  };

  const increaseQuantity = (product) => {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems.value[index].quantity++;
    }
  };

  const decreaseQuantity = (product) => {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems.value[index].quantity--;
      if (cartItems.value[index].quantity === 0) {
        cartItems.value.splice(index, 1);
      }
    }
  };

  const totalPrice = computed(() => {
    return cartItems.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  });


  return {
    isCartPopupVisible,
    cartItems,
    toggleCartPopup,
    addToCart,
    removeFromCart,
    totalPrice,
    closePopupOutside,
    increaseQuantity,
    decreaseQuantity
  };
}
