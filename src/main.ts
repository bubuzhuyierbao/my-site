import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 引入 Tailwind CSS
import './styles/tailwind.css'
// 引入其他样式
import './styles/index.scss'
import './styles/reset.scss'

const app = createApp(App)

app.use(createPinia()) // 启用 Pinia
app.use(router) // 启用 Router

app.mount('#app')
