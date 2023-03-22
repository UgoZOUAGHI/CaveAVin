import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
//import Axios from 'axios';
const app = createApp(App)

//Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

import router from '@/router'
app.use(router)
app.use(store)
app.mount('#app')