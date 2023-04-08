import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
import L from 'leaflet'
//import Axios from 'axios';
const app = createApp(App)

//Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

import router from '@/router'
app.use(router)
app.use(store)
app.use(L)
app.mount('#app')