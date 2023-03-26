import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import Button from "primevue/button"
import ColorPicker from 'primevue/colorpicker';
import Sidebar from 'primevue/sidebar';

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(PrimeVue);

app.use(createPinia())
app.use(router)

app.component('Button', Button)
app.component('ColorPicker', ColorPicker)
app.component('Sidebar', Sidebar)

app.mount('#app')
