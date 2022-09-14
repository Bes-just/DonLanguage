<template>
    <el-container class="layout">
        <el-aside width="200px" class="aside">Aside</el-aside>
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">
                <!-- 二级视图 -->
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue';
const str = ref<string>('测试数据')
console.log(str.value);

onMounted(() => {
    axios.get(`/api/getUsers`).then(res => {
        console.log(res.data);
    })
})
</script>

<style scoped lang="scss">
.layout {
    background-color: #000;
    height: 100%;

    .aside {
        background-color: rgb(243, 192, 127);
    }

    .header {
        background-color: aqua;
    }

    .main {
        background-color: beige;
    }
}
</style>