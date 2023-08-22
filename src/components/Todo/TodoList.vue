<template>
  <div class="container">
    <table class="todo-table">
      <thead>
        <tr>
          <th>UserId</th>
          <th>ID</th>
          <th>Title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.filteredList" :key="index" class="todo-row">
          <td>{{ item.userId }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.completed }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['filteredList'],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  max-height: 50vh;
  overflow-y: auto;

  .todo-table {
    border-collapse: collapse;
    width: 80%;
    max-height: 500px;
    overflow-y: auto;
    border: 1px solid darkgray;
    border-right: none;
    border-radius: 5px;

    th, td {
      border: 1px solid darkgray;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  }
}
</style>