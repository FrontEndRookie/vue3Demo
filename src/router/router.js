import { createRouter,createWebHistory } from "vue-router";

const route = [
   {
        path:'/',
        component:()=>import('../view/testDirection.vue')
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:route
})
export default router;
