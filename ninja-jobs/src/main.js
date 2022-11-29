import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // imports the index.js automatically

createApp(App).use(router).mount('#app')
