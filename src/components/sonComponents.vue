<template>
    <div class="testLess">
        <span @click="sendData">{{msg}}</span>
        <input type="text"  @change="vModel">
        <button @click="busEmit">bus兄弟传值</button>
    </div>
</template>
<script setup>
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
</script>
<style scoped lang="less">
    .testLess {
        color:pink;
        span{
            font-size: 20px;
        }
    }
</style>