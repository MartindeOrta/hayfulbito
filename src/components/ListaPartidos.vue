<template>
  <div>
    <h2>Lista de Partidos</h2>
    <table v-if="partidos.length" class="tabla-partidos">
      <thead>
        <tr>
          <th>Ciudad</th>
          <th>Dirección</th>
          <th>Fecha del Turno</th>
          <th>Provincia</th>
          <th>País</th>
          <th>¿Tiene Suplentes?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="partido in partidos" :key="partido.id">
          <td>{{ partido.Ciudad }}</td>
          <td>{{ partido.Direccion }}</td>
          <td>{{ partido.FechaTurno }}</td>
          <td>{{ partido.Provincia }}</td>
          <td>{{ partido.Pais }}</td>
          <td>{{ partido.TieneSuplentes ? 'Sí' : 'No' }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No hay partidos para mostrar.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../main';

const partidos = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'partidos'));
  partidos.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});
</script>

<style scoped>
.tabla-partidos {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.tabla-partidos th, .tabla-partidos td {
  border: 1px solid #e0e0e0;
  padding: 10px 8px;
  text-align: left;
}
.tabla-partidos th {
  background: #42b983;
  color: #fff;
}
.tabla-partidos tr:nth-child(even) {
  background: #f9f9f9;
}
h2 {
  color: #42b983;
  margin-bottom: 10px;
}
</style>
