import Vue from 'vue'
import VueRouter from 'vue-router'

import Note from '../views/Note.vue'
import Todo from '../views/Todo.vue'
import Tag from '../views/Tag.vue'
import Setting from '../views/Setting.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const authenticated = redirect => {
  return (_to, _from, next) => {
    const condition = true
    if (condition) {
      next(redirect)
    }
  }
}

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
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
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeRoute: authenticated('/')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeRoute: authenticated('/')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
