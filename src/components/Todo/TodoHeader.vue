<template>
  <div class="user-info">
    <button @click="logout" class="logot-button">Logout</button>
    <div class="user-details">
      <span>{{ loggedInUser.name }} / </span>
      <span>{{ loggedInUser.company }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  beforeMount() {
    const loggedInUserData = localStorage.getItem('loggedInUserData');

    if (loggedInUserData) {
      this.loggedInUser = JSON.parse(loggedInUserData);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedInUserData');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  height: 35px;
  justify-content: space-between;
  background-color: lightgrey;
  
  .logot-button {
    margin-left: 20px;
  }
  
  .user-details {
    text-align: right;
    margin-right: 20px;
  }
}
</style>