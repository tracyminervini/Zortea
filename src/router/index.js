import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Cadastrar from '../views/Cadastrar.vue'
import CadastroCompleto from '../views/CadastroCompleto.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: Cadastrar
  },
  {
    path: '/cadastrocompleto:email',
    name: 'CadastroCompleto',
    component: CadastroCompleto
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router



