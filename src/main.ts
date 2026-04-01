import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 引入其他样式
import './styles/index.scss'
// 引入 Tailwind CSS
import './styles/tailwind.css'

const app = createApp(App)

app.use(createPinia()) // 启用 Pinia
app.use(router) // 启用 Router
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
