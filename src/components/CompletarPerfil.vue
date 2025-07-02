<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Completa tu perfil</h2>

    <input v-model="nombre" placeholder="Nombre" class="input" required />
    <input v-model="apellido" placeholder="Apellido" class="input" required />
    <input v-model="apodo" placeholder="Apodo (username)" class="input" required />
    <input v-model="telefono" placeholder="Teléfono (opcional)" class="input" />
    <input v-model="edad" type="number" placeholder="Edad (opcional)" class="input" />

    <button @click="guardarPerfil" class="btn mt-4">Guardar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../main';
import { db } from '../main';
import { useRouter } from 'vue-router';

const nombre = ref('');
const apellido = ref('');
const apodo = ref('');
const telefono = ref('');
const edad = ref('');
const router = useRouter();

async function guardarPerfil() {
  const user = auth.currentUser;
  if (!nombre.value || !apellido.value || !apodo.value) {
    alert('Por favor, completá los campos requeridos');
    return;
  }

  await setDoc(doc(db, 'usuarios', user.uid), {
    nombre: nombre.value,
    apellido: apellido.value,
    apodo: apodo.value,
    telefono: telefono.value,
    edad: edad.value,
    email: user.email,
    fotoPerfil: user.photoURL,
    fechaRegistro: serverTimestamp(),
    rol: 'jugador',
    activo: true
  });

  alert('Perfil guardado correctamente');
  router.push('/inicio');
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  background-color: #16a34a;
  color: white;
  padding: 10px;
  border-radius: 6px;
  width: 100%;
}
</style>
