import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/Todo/TodoPage.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !localStorage.getItem('loggedInUserData')) {
    next('/');
  } else {
    next();
  }
});

export default router
