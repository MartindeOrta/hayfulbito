import { createRouter, createWebHistory } from 'vue-router';
import LoginGoogle from '../components/LoginGoogle.vue';
import CompletarPerfil from '../components/CompletarPerfil.vue';
// más componentes a medida que los agregás

const routes = [
  { path: '/', component: LoginGoogle },
  { path: '/completar-perfil', component: CompletarPerfil },
  { path: '/hayfulbito', component: LoginGoogle }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;