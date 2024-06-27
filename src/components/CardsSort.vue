<template>
  <div class="menu">
    <select name="sort">
      <option value="1">По категориям</option>
      <option value="2">По рейтингу</option>
      <option value="3">Дешевые</option>
      <option value="4">Дорогие</option>
    </select>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.menu {
  padding: 15px 55px;
}
</style>
