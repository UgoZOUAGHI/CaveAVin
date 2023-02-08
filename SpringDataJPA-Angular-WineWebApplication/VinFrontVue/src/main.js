import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// import NavigationBar from './components/NavigationBar.vue'
// app.component('NavigationBar',NavigationBar)

import router from '@/router'
app.use(router)

app.mount('#app')