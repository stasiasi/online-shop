<template>
  <div class="goods-list">
    <product-preview
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
    </product-preview>
  </div>
</template>

<script setup>
import ProductPreview from '../components/ProductPreview.vue';
import { getProducts } from '../api/apiProducts';
import { onMounted, ref } from 'vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await getProducts();
    products.value = response.data.products;
  } catch (error) {
    console.log(error);
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
