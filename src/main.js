import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//main.js
import Ele from 'element-plus';
import 'element-plus/dist/index.css'

createApp(App).use(router).use(Ele).mount('#app')


