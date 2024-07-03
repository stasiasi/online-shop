<template>
  <div class="product-card">
    <hr />
    <div class="product">
      <div>
        <img
          :src="product.images[0]"
          class="product__image"
        />
        <button
          @click="addToCart(product)"
          class="product__add-to-cart"
        >
          Add to cart
        </button>
      </div>
      <div class="product__info info">
        <span class="info__title">{{ product.title }}</span>
        <div class="info__feature">
          <span class="info__description">Description</span>
          <span>{{ product.description }}</span>
        </div>
        <div
          class="info__feature"
          v-if="product.brand"
        >
          <span class="info__description">Brand</span>
          <span>{{ product.brand }}</span>
        </div>
        <div class="info__feature">
          <span class="info__description">Category</span>
          <span>{{ product.category }}</span>
        </div>
        <div>
          <div
            v-for="tag in product.tags"
            :key="tag.id"
            class="product__tag"
          >
            <span># {{ tag }}</span>
          </div>
        </div>
        <div class="info__rating rating">
          <img
            v-for="n in Math.round(product.rating)"
            :key="n"
            src="../assets/img/star.svg"
            class="rating__star"
          />
          <span class="rating__info">{{ product.rating }}</span>
        </div>
        <span class="info__price">{{ product.price }} $</span>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup>
import useCart from '../composables/useCart';
const { addToCart } = useCart();

defineProps({
  product: {
    type: Object
  }
});
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.product-card {
  padding: 55px;
}

.product {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;

  &__image {
    width: 400px;
  }

  &__tag {
    display: inline;
    background-color: $primary-accent-color-light;
    border-radius: 3px;
    padding: 3px 5px;
    margin-right: 5px;
    cursor: pointer;

    @include font($font-color: $primary-color-light, $weight: 300);

    &:hover {
      background-color: $primary-accent-color-dark;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__add-to-cart {
    margin: 10px 0;
    width: 400px;
    padding: 5px;
    border: none;
    background-color: $primary-accent-color-light;
    cursor: pointer;

    @include font($font-color: $primary-color-light);

    &:hover {
      background-color: $primary-accent-color-dark;
    }
  }
}

.info {
  &__title {
    @include font($size: 28px, $weight: 600);
    margin-bottom: 10px;
  }
  &__price {
    @include font($size: 24px, $weight: 600);
    margin-bottom: 10px;
  }
  &__description {
    @include font($size: 16px, $weight: 400, $font-color: $primary-color-grey);
  }
  &__feature {
    display: flex;
    flex-direction: column;
  }
}

.rating__star {
  margin-right: 3px;
  height: 18px;
}

.rating__info {
  margin-left: 5px;
  @include font($size: 20px, $weight: 400);
}
</style>
