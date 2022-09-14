<template>
    <el-container class="layout">
        <el-aside width="200px" class="aside">
            <MenuBar />
        </el-aside>
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">
                <RouterView />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Header from './header/header.vue';
import MenuBar from './meun/MenuBar.vue';

</script>

<style scoped lang="scss">
.layout {
    background-color: #000;
    height: 100%;

    .aside {
        background-color: #545c64;
    }

    .header {
        background-color: rgb(211, 242, 242);
    }

    .main {
        background-color: beige;
    }
}
</style>