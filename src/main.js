import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faPhone, 
  faUser, 
  faEdit, 
  faTrash, 
  faStar,
  faPlus,    // Agregado
  faMinus    // Agregado
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Agregar los iconos a la librería
library.add(faPhone);
library.add(faUser);
library.add(faEdit);
library.add(faTrash);
library.add(faStar);
library.add(faPlus);
library.add(faMinus);

// Crear la aplicación Vue
const app = createApp(App);

// Registrar el componente de Font Awesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usar el router y montar la aplicación
app.use(router);
app.mount('#app');