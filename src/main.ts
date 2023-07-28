import { createApp } from 'vue'
// import './style.css'
import createRouter from './router/index.ts'
import App from './App.vue'
import '@/assets/style/global.scss'
import 'uno.css'
const app = createApp(App)
app.use(createRouter())
app.mount('#app')
