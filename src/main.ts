import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// import './assets/main.css'

//引入全局模板样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia()) // 启用 Pinia
app.use(router)        // 启用 Router

app.mount('#app')
