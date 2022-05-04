import { ref } from 'vue'
export const testMixin = ()=>{
    let miNum = ref(0)
    let addBtn = (params)=>{
        miNum.value += params
    }
    return { miNum, addBtn}
}