<template>
    <div class="container">
      <h1>Listado de Comunas</h1>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Municipio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comuna, index) in comunas" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ comuna.comu_codi }}</td>
            <td>{{ comuna.comu_nomb }}</td>
            <td>{{ comuna.muni_nomb }}</td>
            <td>
              <button @click="deleteComuna(comuna.id)" class="btn btn-danger">Eliminar</button>
              <button @click="editComuna(comuna.id)" class="btn btn-primary">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Comuna_name',
  data() {
    return {
      comunas: []
    };
  },
  mounted() {
    // ... (tu código existente)
  },
  methods: {
    async deleteComuna(id) {
      try {
        await Swal.fire({
          title: '¿Estás seguro?',
          text: "¿Quieres eliminar esta comuna?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar'
        });

        await axios.delete(`http://127.0.0.1:8000/api/comunas/${id}`);

        Swal.fire('Eliminado!', 'La comuna ha sido eliminada.', 'success');
        this.comunas = this.comunas.filter(comuna => comuna.id !== id);
      } catch (error) {
        Swal.fire('Error', 'Ocurrió un error al eliminar la comuna.', 'error');
        console.error(error);
      }
    },
    // ... (tu método editComuna)
  }
}
</script>