import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
import './style.css'

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {

    projectId: "hayfulbito-a200a",
    storageBucket: "hayfulbito-a200a.firebasestorage.app",
    messagingSenderId: "138672255337",
    appId: "1:138672255337:web:f8dddc55e0048cc1638df8",
    measurementId: "G-LY8KKR468W",
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // tus datos de config
};

const appPlic = initializeApp(firebaseConfig);
export const auth = getAuth(appPlic);
export const db = getFirestore(appPlic);

const app = createApp(App);
app.use(router);
app.mount('#app');




