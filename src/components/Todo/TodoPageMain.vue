<template>
	<div class="todo-wrapper">
		<div class="params-todo">
			<TodoFilterUnit @onFiltersChange="onFiltersChange"/>
			<CreateTodo />
		</div>
		<TodoList :filteredList="filteredList"/>
	</div>
</template>

<script>
import TodoFilterUnit from './TodoFilterUnit.vue';
import CreateTodo from './CreateTodo.vue'
import TodoList from './TodoList.vue';

export default {
	components: {
		TodoFilterUnit,
		CreateTodo,
		TodoList,
	},

	data() {
		return {
			search: '',
			selectedUserId: 'all Users',
			selectedFilter: 'all',
		}
	},
	methods: {
		onFiltersChange(params) {
			for (let key in params) {
				this[key] = params[key]
			}
		}
	},
	computed: {
		filteredList() {
			return this.$store.state.todosList.filter((item) => {
				return (this.selectedUserId === 'all Users' ? true : item.userId === this.selectedUserId) 
				&& (this.selectedFilter === 'all' ? true : item.completed === this.selectedFilter) 
				&& item.title.includes(this.search);
			})
		}
	},
};
</script>

<style lang="scss" scoped>
.todo-wrapper {
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	box-sizing: border-box;
	margin: 0 auto;
	padding: 0 20px;
	background: #e3e3e3;
	.params-todo {
		display: flex;
		justify-content: space-between;
    align-items: baseline;
    margin-top: 15px;
	}
}
</style>