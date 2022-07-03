<template>
 <div>
     <button @click="testRouter">testRouter</button>
     //父子传值
     <son v-model:msg="fatherMessage" @fn="getSonData"/>
     {{fatherMessage}}

    <!-- teleport传送 -->
    <!-- 必须要在传送目标之后声明传送内容 -->
        <div class="testTeleport">
            测试teleport功能
        </div>

     <sonT>
         <!-- 1.作用域插槽会最后显示 -->
         <!-- 2. 动态插槽和具名插槽同名会被后者替换 -->
         <template #default="{data}">作用域插槽：{{data}}</template>
         <template #[dtcc]> <div>动态插槽</div> </template>
         <template #jm>
             <div>具名插槽</div>
         </template>
     </sonT>
    
    <!-- //异步组件要由suspense包裹 -->
    <!-- <Suspense>
        <template #default>
             async是带有异步请求的组件
             <async></async>
        </template>
        <template #fallback>
            加载中
        </template>
    </Suspense> -->

    <el-button @click="addBtn(2)">{{miNum}}</el-button>
 </div>
</template>
<script setup>

        //依赖注入
        let proIn = ref(0)
        provide('sendDate',proIn)
        provide('sendDate2',proIn)

        //MIXIN混入
        import {testMixin} from '../../mixins/mixin' 
        let { miNum, addBtn} = testMixin()

        // 异步组件  可以用于实现分包处理
        // const async = defineAsyncComponent(()=>import(''))
        import son from './sonComponents.vue'
        import sonT from './sonComponentsT.vue'
        //路由变化 -路由跳转、接收方式（useRoute,useRouter）和路由模式
        //跳转方式 vue2 为this.$router.push， vue3使用useRouter
        //方式1
        let test = new useRouter
        //方式2
        let test2 = useRouter()
        let testRouter = ()=>{
            test2.push('/learning')
        } 
        //接收方式 vue2 为this.$route.query vue3使用 useRoute
        let getRouter = new useRouter
        console.log(getRouter.query)

        //父子传值
        let fatherMessage = ref("testMessage")
        let getSonData = (val)=>{
            alert(val)
        }

        //动态插槽
        let dtcc = ref("jm")
</script>


