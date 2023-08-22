<template>
	<div>
    <TodoHeader />
    <TodoPageMain />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import TodoHeader from './TodoHeader.vue';
import TodoPageMain from './TodoPageMain.vue';

export default {
  components: {
    TodoHeader,
    TodoPageMain,
  },

  beforeMount() {
    this.fetchUsers();
    this.fetchTodos();
  },

  methods: {
    ...mapActions(['fetchUsers', 'fetchTodos']),
  },
}
</script>