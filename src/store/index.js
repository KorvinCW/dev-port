import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersList: [],
    todosList: [],
  },

  mutations: {
    setUsers(state, users) {
      state.usersList = users;
    },
    setTodos(state, todos) {
      state.todosList = todos;
    },
    updateTodos(state, newTodo) {
      state.todosList.unshift(newTodo);
    },
  },

  actions: {
    async checksIfUserExists( context, loginData ) {
      return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          response.json()

          .then((users) => {
            const foundUser = users.find((user) => user.username === loginData.userName && user.phone.split(' ')[0] === loginData.phone);

            if (!foundUser) {
              reject('Login Error');
            } else {
              context.commit('setUsers', users);
              resolve(foundUser)
            } 
          })
        })
      })
    },

    async fetchUsers(context) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    
        if (!response.ok) {
          throw new Error('Something went wrong with usersList');
        }
    
        const users = await response.json();
    
        context.commit('setUsers', users);
      } catch (error) {
        alert(error.message);
      }
    },

    async fetchTodos(context) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    
        if (!response.ok) {
          throw new Error('Something went wrong with todosList');
        }
    
        const todos = await response.json();
    
        context.commit('setTodos', todos);
      } catch (error) {
        alert(error.message);
      }
    },

    async addTodo(context, params) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ params }),
        });
        
        if (response.ok) {
          context.commit('updateTodos', params);
        } else {
          throw new Error('Something went wrong with addTodo');
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
})
