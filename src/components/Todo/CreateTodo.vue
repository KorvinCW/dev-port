<template>
	<div class="create-todo">
		<h2>Create Todo</h2>
		<div class="input-group">
			<input v-model="userId" type="number" placeholder="User ID" class="input-field" />
			<input v-model="title" placeholder="Title" class="input-field" />
			<button @click="addNewTodo" class="add-button">Add</button>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			userId: '',
			title: ''
		};
	},
	methods: {
		...mapActions(['addTodo']),
		addNewTodo() {
			if (!this.userId.match(/^\d+$/)) {
				alert('User ID should contain only digits.');
				return;
			}
			this.addTodo({
				userId: this.userId,
				title: this.title,
				completed: false,
				id: Date.now(),
			});

			this.userId = '';
			this.title = '';
		}
	},
};
</script>

<style scoped lang="scss">
.create-todo {
	width: 300px;
	padding: 20px;
	background-color: #f0f0f0;
	border-radius: 5px;

	h2 {
		margin: 0 0 15px 0;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 15px;

		.input-field {
			padding: 10px;
			border: none;
			border-radius: 5px;
			outline: none;
			appearance: none;
		}

		.add-button {
			background-color: #3498db;
			color: white;
			border: none;
			border-radius: 5px;
			padding: 10px;
			cursor: pointer;
		}
	}
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
}
</style>