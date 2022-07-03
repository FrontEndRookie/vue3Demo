
//pinia
import { defineStore } from 'pinia'
 const useState = defineStore('main',{/*  */
    state:()=>{
        return {
            text:100
        }
    },
    getters:{
        countPlus(){
            return this.text + 100
        }
    },
    actions:{
        countZero(){
            this.fontS = 0
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
export { useState }