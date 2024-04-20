import { createRouter, createWebHistory } from 'vue-router'
import Login from '../src/components/Login.vue'
import Register from '../src/components/Register.vue'
import User from '../src/components/User.vue';
import Addsach from '@/components/Addsach.vue';
import Addnxb from '@/components/Addnxb.vue';
import Listsach from '@/components/Listsach.vue';
import Edit from '@/components/Edit.vue'
import Listnxb from '@/components/Listnxb.vue';
import Editnxb from '@/components/Editnxb.vue';
import Detailbook from '@/components/Detailbook.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/addsach',
    name: 'Addsach',
    component: Addsach
  },
  {
    path: '/addnxb',
    name: 'Addnxb',
    component: Addnxb
  },
  {
    path: '/books',
    name: 'Listsach ',
    component: Listsach
  },
  {
    path: '/edit/:id', 
    name: 'Edit',
    component: Edit
  },
  {
    path: '/nxbs',
    name: 'Listnxb ',
    component: Listnxb
  },
  {
    path: '/editnxb/:id', 
    name: 'Editnxb',
    component: Editnxb
  },
  {
    path: '/detail/:id', 
    name: 'detailbook',
    component: Detailbook
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router