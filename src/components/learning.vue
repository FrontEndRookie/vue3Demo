<template>
 <div>
     <!-- vue2中v-for ref会自动填充数组/vue3需要手动通过方法添加 -->
    <div v-for="item in 5" :key="item" >{{item}}</div>
    <div @click="add">{{res}}</div>
    <div>{{resC}}--{{msgChange}}--{{msgChange2}}--{{msgChange3.c}}</div>
    <input type="text" v-model="cc">
    <input type="text" v-model="dd">
 </div>
</template>
// 语法糖写法
<script setup>
            let res = reactive({
                A:1,
                B:2,
                C:{a:1},
                resC:3
            })
            //torefs用于响应式结构
            let { resC } = toRefs(res)

            //计算属性写法1
            let msgChange = computed(()=>{
                return resC.value-1
            })
            //计算属性写法2
            let msgChange2 = computed({
                get(){
                    return 111
                },
                set(newVal){
                    console.log("setter")
                    resC.value=333
                }
            })
            //计算属性写法3
            let msgChange3 = reactive({
                c:computed(()=>{
                    return ++resC.value
                })
            })

            //watch
            let testW = ref(1)
            watch(testW,(nv,ov)=>{
                console.log(nv,ov)
            },{immediate:true})

            //watch监听多个数据
            watch([testW,resC],(nv,ov)=>{
                console.log(nv,ov)
            },{immediate:true})
            resC.value = 4
            msgChange2.value = 222

            //监听对象中的属性
            watch(()=>res.a,(nv,ov)=>{
                console.log(nv,ov)
            })

            //立即执行的监听
            let cc = ref(1)
            let dd = ref(12)
            watchEffect(()=>{
                console.log(dd.value)
                console.log(cc.value)
            })
            let add = ()=>{
                res.C.a=3
            }
            onMounted(()=>{
                console.log("onmunted")
            })
</script>


