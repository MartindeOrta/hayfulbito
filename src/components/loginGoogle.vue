<template>
  <div class="p-4">
    <button @click="loginWithGoogle" class="bg-red-500 text-white px-4 py-2 rounded">
      Iniciar sesión con Google
    </button>
  </div>
</template>

<script setup>
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../main';

async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Bienvenido, ${user.displayName}`);
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message);
  }
}
</script>