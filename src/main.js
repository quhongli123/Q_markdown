// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.scss"

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')