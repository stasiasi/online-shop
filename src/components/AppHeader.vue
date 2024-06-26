<template>
  <header v-if="userInfo" class="header">
    <div class="header__user-info user">
      <div class="user__avatar">
        <img :src="userInfo.image" width="30px" height="30px" />
      </div>
      <span class="user__username">{{ fullName }}</span>
    </div>

    <button class="header__logout" @click="logOut()">Log out</button>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const router = useRouter();
const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo)
const fullName = computed(() => {
  if (userInfo.value) {
    return `${userInfo.value.firstName} ${userInfo.value.lastName}`
  }
  return ''
})

const logOut = () => {
  userStore.logout();
  router.push('/');
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/mixins';

.header {
  display: flex;
  padding: 15px 25px;
  background-color: #4a5e2d;
  align-items: center;
  justify-content: end;

  &__user-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-right: 3px solid white;
  }

  &__logout {
    height: 40px;
    border: none;
    background-color: #4a5e2d;
    cursor: pointer;
    padding: 0 5px;
    @include font($font-color: $primary-color-light, $size: 20px);

    &:hover {
      border-radius: 10px;
      background-color: #1f2f1c;
    }
  }

  .user {
    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: white;
      border-radius: 50%;
    }
    &__username {
      margin: 0px 20px 0 10px;
      @include font($size: 20px, $font-color: $primary-color-light);
    }
  }
}
</style>
