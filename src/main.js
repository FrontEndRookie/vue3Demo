import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//element
import Ele from 'element-plus';
import 'element-plus/dist/index.css'

//vuex
// import store from './store' 
import {createPinia} from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const piniaPersist = createPinia().use(piniaPluginPersist)
createApp(App).use(router).use(Ele).use(piniaPersist).mount('#app')


