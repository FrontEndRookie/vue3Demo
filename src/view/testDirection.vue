
<script setup >
import { storeToRefs } from 'pinia'
import { useState } from '../store'
    const main =  useState()
    const  { text } = storeToRefs(main)
    //修改state状态
    const countPlus = ()=>{
        text.value++     
        // testRefs.$patch(state=>state.fontS++)
    }
    //替换整个state
    // main.$state = {text:[123]}
    //重置state状态
    function resStore(){
        main.$reset()
    }
    //监听整个仓库变化
    main.$subscribe((mutation,state)=>{
        console.log("mu",mutation)
        console.log("sta",state)
    })
</script>   

<template>
    <p>
        {{ text }}{{main.countPlus}}
    </p>
    <button @click="countPlus">plus</button>
    <el-button type="primary" @click="resStore">reset</el-button>
</template>

