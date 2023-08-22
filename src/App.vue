<template>
  <div id="app">
    <router-view>
      <LoginPage />
    </router-view>
  </div>
</template>

<script>
import LoginPage from './views/LoginPage.vue';

export default {
  components: {
    LoginPage
  }
}
</script>


<style lang="scss">
</style>
