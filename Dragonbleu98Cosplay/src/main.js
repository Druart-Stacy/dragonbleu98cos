import { createApp } from 'vue'
import cosplays from './assets/cosplays.js' // 🟢 Modifié ici (sans accolades)
import './style.css'
import App from './App.vue'

console.log(cosplays)
createApp(App).mount('#app')
