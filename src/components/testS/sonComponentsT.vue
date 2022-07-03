<template>
    <div>
        {{mes}}
        <!-- //具名插槽 -->
        <slot name="jm"> </slot>
        <!-- //作用域插槽 -->
        <slot :data="{a:1}"></slot>
        <teleport to=".testTeleport">
            <div>
                成功传送teleport
            </div>
        </teleport>
    </div>
</template>
<script setup>
    import mitter from '../../plugins/bus'
    let mes = ref('')
    mitter.on('busSend',(val)=>{
        console.log(val)
        mes.value = val
    })
</script>
<style scoped lang="less">
</style>