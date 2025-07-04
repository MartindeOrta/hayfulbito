import { createRouter, createWebHistory } from 'vue-router';
import LoginGoogle from '../components/LoginGoogle.vue';
import CompletarPerfil from '../components/CompletarPerfil.vue';
import HomeView from '../views/HomeView.vue';
// más componentes a medida que los agregás

const routes = [
  { path: '/', component: HomeView},
  { path: '/completar-perfil', component: CompletarPerfil },
  { path: '/hayfulbito', component: HomeView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;