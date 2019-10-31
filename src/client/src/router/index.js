import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from '../views/Note.vue'
import Todo from '../views/Todo.vue'
import Tag from '../views/Tag.vue'
import Setting from '../views/Setting.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/note',
    name: 'note',
    component: Note
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
