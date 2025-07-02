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
import { db } from '../main'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Verificamos si ya existe el usuario en Firestore
    const userRef = doc(db, 'usuarios', user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // Si no existe, lo creamos
      await setDoc(userRef, {
        nombre: user.displayName,
        email: user.email,
        telefono: user.phoneNumber ?? '', // puede venir null
        fotoPerfil: user.photoURL,
        fechaRegistro: serverTimestamp(),
        rol: 'jugador',
        activo: true
      });
      console.log("✅ Usuario creado en Firestore");
    } else {
      console.log("🔄 Usuario ya registrado");
    }

    alert(`¡Bienvenido, ${user.displayName}!`);
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message);
  }
}

</script>