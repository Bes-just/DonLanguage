<template>
    <div>
        <el-button @click="showMessage" type="primary">登陆</el-button>
        <h2>{{userName}}</h2>
        <h2>{{password}}</h2>
    </div>
</template>

<script setup lang="ts">
import {ElMessage} from 'element-plus'
// import {inject} from 'vue'
// 保持pinia数据响应式
import {storeToRefs} from 'pinia'
import {userStore} from '@/store/modules/user'

const store = userStore()
const {userName,password} = storeToRefs(store)

console.log(store);
console.log(store.fullName);



// const echarts = inject('echarts')
// console.log(echarts);

const showMessage=()=>{
    ElMessage({type: 'success',message:'测试成功'})
    store.updateUserName('李四')
}
</script>

<style scoped>

</style>