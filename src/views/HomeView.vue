<template>
    <div class="p-4">
      <div v-if="usuario">
        <p>Bienvenido, {{ usuario.displayName }}</p>
        <ListaPartidos /> <!-- tu componente de partidos -->
        <button @click="logout" class="bg-gray-500 text-white px-4 py-2 rounded mt-4">Cerrar sesión</button>
      </div>
      <div v-else>
        <LoginGoogle />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { auth } from '../main';
  import { onAuthStateChanged, signOut } from 'firebase/auth';
  import LoginGoogle from '../components/LoginGoogle.vue';
  import ListaPartidos from '../components/ListaPartidos.vue';
  
  const usuario = ref(null);
  
  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      usuario.value = user;
    });
  });
  
  function logout() {
    signOut(auth).then(() => {
      usuario.value = null;
      localStorage.removeItem('usuario'); // si lo usás
    });
  }
  </script>
  