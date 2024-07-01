import { ref, computed } from 'vue'
const cartItems = ref(JSON.parse(localStorage.getItem('cartItems')) || []) 
export default function useCart() {
  const isCartPopupVisible = ref(false)
 

  const toggleCartPopup = () => {
    isCartPopupVisible.value = !isCartPopupVisible.value
  }
  const closePopupOutside = (event) => {
    if (!event.target.closest('.cart-popup')) {
      isCartPopupVisible.value = false;
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    console.log(existingItem);
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({ 
        id: product.id, 
        title: product.title, 
        price: product.price, 
        quantity: 1 
      })
    }
    console.log(cartItems.value);
    saveToLocalStorage()
  }

  const removeFromCart = (product) => {
    const index = cartItems.value.findIndex(item => item.id === product.id)
    if (index !== -1) {
      cartItems.value[index].quantity--;
      if (cartItems.value[index].quantity === 0) {
        cartItems.value.splice(index, 1);
      }
      saveToLocalStorage()
    }
  }

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const saveToLocalStorage = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value))
  }

  return {
    isCartPopupVisible,
    cartItems,
    toggleCartPopup,
    addToCart,
    removeFromCart,
    totalPrice,
    closePopupOutside
  }
}