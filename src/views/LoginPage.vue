<template>
	<div class="login-page">
    <form @submit.prevent="register" class="login-page-form">
			<div class="input-group">
				<input type="text" id="username" v-model="userName" placeholder="Username" class="input-field" />
				<input type="text" id="phone" v-model="phone" placeholder="Phone Number" class="input-field" />
			</div>
      <button type="submit" class="register">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
    return {
      userName: '',
			phone: null,
    };
  },
  methods: {
    ...mapActions(['checksIfUserExists']),
    register() {
      this.checksIfUserExists({
				userName: this.userName,
				phone: this.phone,
			}).then((loggedInUserData) => {
				this.setUserToStore(loggedInUserData);
        this.$router.push('/todo');
      }).catch((error) => {
				alert(error);
			});
    },

		setUserToStore(loggedInUserData) {
			const dataToStore = {
				name: loggedInUserData.name,
				company: loggedInUserData.company.name,
			};
			const userData = JSON.stringify(dataToStore);

			localStorage.setItem('loggedInUserData', userData);
		},
  },
};
</script>

<style scoped lang="scss">
.login-page { 
	display: flex;
	justify-content: center;

	.login-page-form {
		width: 300px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;
		border-radius: 5px;
		.input-group {
			display: flex;
			flex-direction: column;

			.input-field {
				padding: 10px;
				margin-bottom: 15px;
				border: none;
				border-radius: 5px;
				outline: none;
			}
		}
		.register {
			background-color: #428f1f;
			color: white;
			border: none;
			border-radius: 5px;
			padding: 10px;
			cursor: pointer;
		}
	}
}
</style>