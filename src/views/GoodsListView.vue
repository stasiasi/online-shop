<template>
  <div class="goods-list">
    <product-preview v-for="product in products" :key="product.id" :product="product">
    </product-preview>
  </div>
</template>

<script setup>
import { getProducts } from '../api/apiProducts';
import ProductPreview from '../components/ProductPreview.vue';
//import CardSort from '../components/CardsSort.vue';
import { useProductStore } from '../stores/product';
import { onMounted, computed } from 'vue';

const productStore = useProductStore();
const products = computed(() => productStore.productInfo.products);

onMounted(async () => {
  const response = await getProducts();
  if (response.status === 200) {
    productStore.set(response.data);
  }
});
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';
.goods-list {
  padding: 15px 50px;
  display: grid;
  justify-items: center;
  row-gap: 30px;
  column-gap: 5px;
  align-items: center;
  grid-template-columns: repeat(5, 18%);
  justify-content: space-around;
}
</style>
