<template>
  <div class="container">
    <div class="login-form">
      <span class="login-form__title">Log in</span>
      <label for="username-input">Username</label>
      <input v-model="username" class="login-form__user-info" type="text" id="username-input" />
      <label for="password-input">Password</label>
      <input v-model="password" class="login-form__user-info" type="password" id="password-input" />
      <span v-if="hasError" class="login-form__error">The username or password is incorrect!</span>
      <button class="login-form__login" @click="login">Log in</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');
const hasError = ref(false);

const login = async () => {
  const res = await authStore.login(username.value, password.value);
  hasError.value = !res;
};
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100%;
  background-image: url('../assets/img/backgroundLog.png');
}

.login-form {
  padding: 50px 40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 24px;

  &__title {
    margin-bottom: 35px;

    @include font($size: 32px);
  }

  &__error {
    margin-bottom: 20px;
    text-align: center;
  }

  &__user-info {
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 10px;
    width: 330px;
    border-radius: 12px;
    border: 1px solid $primary-color-grey;

    @include font($weight: 400);
  }
  &__login {
    margin-top: 10px;
    height: 50px;
    width: 100%;
    border: none;
    border-radius: 32px;
    background-color: $primary-accent-color-light;
    cursor: pointer;

    @include font($font-color: $primary-color-light);

    &:hover {
      background-color: $primary-accent-color-dark;
    }
  }
}
</style>
