import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
//element
import Ele from 'element-plus';
import 'element-plus/dist/index.css'
import directive from './directive';
//vuex
// import store from './store' 
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const piniaPersist = createPinia().use(piniaPluginPersist)
createApp(App).use(piniaPersist).use(router).use(Ele).use(directive).mount('#app')


