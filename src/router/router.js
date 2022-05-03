import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import learning from '../components/learning.vue';
import learningTwo from '../components/learningTwo.vue';
const route = [
    {
        path:'/hw',
        component:HelloWorld,
    },{
        path:'/learning',
        component:learning
    },{
        path:'/',
        component:learningTwo
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:route
})
export default router;
