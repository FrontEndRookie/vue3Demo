// import { createStore } from "vuex";
// import user from './modules/user'
// import persistedState from 'vuex-persistedstate'

// export default createStore({
//     state:{
//         stateOne:1
//     },
//     getters:{},
//     mutations:{
//         setStateOne(state,val){
//             state.stateOne = val
//         }
//     },
//     actions:{},
//     modules:{ user },
//     plugins:[persistedState({
//         key:'userVuexDate',
//         paths:['user']
//     })]
// })

//pinia
import { defineStore } from 'pinia'
export const useState = defineStore('useState',{
    state:()=>{
        return {
            count:0
        }
    },
    getters:{
        countPlus(){
            return this.count + 100
        }
    },
    actions:{
        countZero(){
            this.count = 0
        }
    },

    //开启数据缓存
    persist:{
        enabled: true,
        strategies:[{
            key: 'piniaPersist',
            storage: localStorage
        }]
    }
})