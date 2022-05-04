<template>
    <div class="testLess">
        <span @click="sendData">{{msg}}</span>
        <input type="text"  @change="vModel">
        <button @click="busEmit">bus兄弟传值</button>

        <!-- vuex -->
        <!-- <el-button @click="testVuexPersist">{{getStoreDate}}</el-button> -->

        <!-- pinia -->
        <el-button @click="countZero">{{count}}</el-button>
        <!-- <el-button @click="store.$reset">{{count}}</el-button> -->
    </div>
</template>
<script setup>
    import { inject } from "@vue/runtime-core"
import mitter from "../plugins/bus"
    // import { defineProps } from 'vue'
    defineProps({
        msg:{
            type:String,
            default:"son"
        }
    })
    //子传父
    const emit = defineEmits(['fn', 'update:msg'])
    let sendData = ()=>{
    }
    let vModel = (val)=>{
        console.log(val)
        //单向绑定
        emit('fn',val.target.value)
        //双向绑定
        emit('update:msg',val.target.value)
    }

    //兄弟传值
    let busEmit = ()=>{
        mitter.emit('busSend',"组件A的值")
    }

    //
    console.log(inject('sendDate').value)

    //vuex
    // import { useStore } from 'vuex'
    // let testStore = useStore()
    // console.log(testStore.state.stateOne)
    // console.log(testStore.state.user.moduleStateOne)
    // let testVuexPersist=()=>{
    //     testStore.commit('setModuleStateOne',200)
    // }
    // let getStoreDate = computed(()=>testStore.state.user.moduleStateOne)

    //pinia
    import { useState } from '../store'

    //模块化只需新增js文件 ,storeName为newName.js export的变量名字
    // 如 import { storeName } from '../store/newName.js'

    //pinia持久化存储
    //cnpm i pinia-plugin-persist --save
    import { storeToRefs } from 'pinia'
    const store = useState()
    let { count, countPlus } = storeToRefs(store)
    console.log(count)
    //修改方法1 
    count.value = 100
    console.log(count)
    //修改方法2
    store.$patch(state=>{
        state.count = 200
    })
    console.log(countPlus)
    let countZero = ()=>{
        //调用action
        // store.countZero()

        //恢复默认
        store.$reset()
    }
</script>
<style scoped lang="less">
    .testLess {
        color:pink;
        span{
            font-size: 20px;
        }
    }
</style>