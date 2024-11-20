<template>
    <div class="container text-start">
    <h1 class="text-primary fw-bold"> Editar</h1>
    <div class="card">
    <div class="card-header fw-bold">
    Comuna
    </div>
    <div class="card-body">
    <form @submit.prevent="updateComuna">
    
    <div class="row mb-3">
    
    <label for="comu_cod1" class="form-1abel">Codigo</label>
    
    <div class="input-group">
        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
        <input type="text" class="form-control" id="comu codi" placeholder="código comuna" disabled v-model='comuna.comu_codi'>
    </div>
    </div>
    
    <div class="row mb-3">
    
    <label for="comu_nomb" class="form-label"> Nombre: </label>
    <div class="input-group">
    <div class="input-group-text"> <font-awesone-icon icon="building" /></div>
    <input type="text" class="form-control" id="comu_nomb" placeholder= "Código comuna"
    “v-model='comuna.comu_nomb'>
    
    </div>
    </div>

    <div class="row mb-3">
        <label for="muni_codi" class="form-label"> Municipio : </label>
        <div class="input-group">
            <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
            <select class="form-select" v-model="comuna.muni_codi">
                <option v-for="municipio in municipios" v-bind:value="municipio.muni_codi">{{ municipio.muni_nomb }}</option>

            </select>
        </div>

    </div>
    <button class="btn btn-primary" type="submit">Actualizar</button>
    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>

    </form>
    </div>
    </div>
    </div>
    </template>

    <script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { onMounted } from 'vue'

export default {
    name: 'EditarComuna',
    data(){
        return{
            comuna: {
      comuna_codi: '',
      mun_codi: '',
      mun_nomb: ''
            },
            municipios: []
        }
    },

    methods: {
        cancelar(){
            this.$router.push({name: 'Comunas'})
        },

        async updateComuna(){
            const res = await axios.put('http://127.0.0.1:8000/api/comunas/$this.comuna.comu_codi', this.comuna)
            if (res.status == 200){
                this.$router.push({name: 'Comunas'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Comuna has been updated',
                    showConfirmButton: false,
                    timer: 2000,
                })
            }
        }
    },
}

mounted() {
  const comunaId = this.$route.params.id;
  if (comunaId) {
    axios.get(`http://127.0.0.1:8000/api/comunas/${comunaId}`)
      .then(response => {
        this.comuna = response.data;
      })
      .catch(error => {
        console.error("Error al cargar comuna", error);
    })
}
</script>