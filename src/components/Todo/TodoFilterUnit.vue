<template>
	<div>
		<input v-model="search" class="search-field" placeholder="Search">

		<select v-model="selectedFilter" class="select-field">
      <option v-for="filter in filters" :key="filter.value" :value="filter.value">{{ filter.label }}</option>
    </select>

		<select v-model="selectedUserId" class="select-field">
			<option value="all Users">All Users</option>
			<option v-for="userId in userIds" :key="userId" :value="userId">{{ userId }}</option>
		</select>
	</div>
</template>
  
<script>

export default {
	data() {
		return {
			search: '',
			selectedUserId: 'all Users',
			selectedFilter: 'all',
      filters: [
        { value: 'all', label: 'All' },
        { value: true, label: 'Completed'},
        { value: false, label: 'Uncompleted'},
      ],
		};
	},
	computed: {
    userIds() {
      return this.$store.state.todosList.reduce((result, item) => {
				if (!result.includes(item.userId)) {
					result.push(item.userId);
				}
				return result;
			}, []).sort((a, b) => a - b)
    },
  },
	watch: {
		search(newValue) {
			this.$emit('onFiltersChange', {
				search: newValue
			})
		},
		selectedFilter(newValue) {
			this.$emit('onFiltersChange', {
				selectedFilter: newValue
			})
		},
		selectedUserId(newValue) {
			this.$emit('onFiltersChange', {
				selectedUserId: newValue
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.search-field {
	padding: 5px;
	margin-right: 10px;
}
.select-field {
	margin-right: 10px;
  padding: 5px;
  font-weight: bold;

   option {
    font-weight: bold;
   }
}
</style>