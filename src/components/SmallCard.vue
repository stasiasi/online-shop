<template>
  <div class="goods-card">
    <div class="goods-card__photo">
      <img :src="product.images[0]" />
    </div>
    <div class="goods-card__content">
      <span class="goods-card__info">{{ product.title }}</span>
      <span class="goods-card__info goods-card__info_small">{{ product.brand }}</span>
      <span class="goods-card__info">{{ product.price }} $</span>
      <div class="goods-card__rating rating">
        <img
          v-for="n in Math.round(product.rating)"
          :key="n"
          src="../assets/img/star.svg"
          class="rating__star"
        />
        <span class="rating__info">{{ product.rating }}</span>
      </div>
    </div>
    <button class="goods-card__add-to-cart">Add to cart</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object
  }
});
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.goods-card {
  display: flex;
  flex-direction: column;
  height: 440px;
  width: 220px;

  &__content {
    display: flex;
    flex-direction: column;
    height: 150px;
  }

  &__photo {
    width: 220px;
    height: 220px;
    margin-bottom: 20px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__info {
    @include font($size: 18px, $weight: 600);
    margin-bottom: 5px;
    &_small {
      @include font($size: 14px, $weight: 400, $font-color: $primary-color-grey);
    }
  }

  &__add-to-cart {
    margin: 10px 0;
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

.rating__star {
  margin-right: 3px;
  height: 15px;
}

.rating__info {
  margin-left: 5px;
  @include font($size: 16px);
}
</style>
