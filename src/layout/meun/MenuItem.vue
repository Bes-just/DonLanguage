<template>
    <div>
        <template v-for="menu in Menulist" :key="menu.meun_id">
            <el-sub-menu :index="menu.name">
            <!-- <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.name"> -->
                <template #title>
                    <span>{{menu.name}}</span>
                </template>
                <MenuItem :Menulist="menu.children" />
            </el-sub-menu>
            <!-- <el-menu-item v-else :index="menu.name"> -->
            <el-menu-item :index="menu.name">
                <!-- <MenuIcon :is="menu.meta.icon"></MenuIcon> -->
                <span>{{menu.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>


<script setup lang="ts">
// import MenuIcon from '@/components/Icon/MenuIcon.vue';
defineProps(['Menulist'])





</script>

<style scoped>

</style>