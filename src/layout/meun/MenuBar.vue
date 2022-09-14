<template>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" background-color="#545c64" text-color="#fff">
        <MenuItem :Menulist="MenuItemList" />
    </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getTreeMenus } from '@/utils/api/menu'
import MenuItem from './MenuItem.vue';
// let menuList = reactive([
//     {
//         path: '/dashboard',
//         component: "layout",
//         meta: {
//             title: "首页",
//             icon: "el-icon-s-home",
//             roles: ['sys:manage']
//         },
//         children: []
//     },
//     {
//         path: '/system',
//         component: "layout",
//         alwaysShow: true,
//         name: "system",
//         meta: {
//             title: "系统管理",
//             icon: "Compass",
//             roles: ['sys:manage'],
//             parentId: 0
//         },
//         children: [
//             {
//                 path: '/department',
//                 component: "/system/department/department",
//                 alwaysShow: false,
//                 name: "department",
//                 meta: {
//                     title: "机构管理",
//                     icon: "el-icon-document",
//                     roles: ['sys:dept'],
//                     parentId: 17
//                 },
//             },
//             {
//                 path: '/roleList',
//                 component: "/system/Role/RoleList",
//                 alwaysShow: false,
//                 name: "RoleList",
//                 meta: {
//                     title: "角色管理",
//                     icon: "el-icon-s-tools",
//                     roles: ['sys:role'],
//                     parentId: 17
//                 },
//             },
//             {
//                 path: '/menuList',
//                 component: "/system/Menu/MenuList",
//                 alwaysShow: false,
//                 name: "MenuList",
//                 meta: {
//                     title: "权限管理",
//                     icon: "el-icon-document",
//                     roles: ['sys:meun'],
//                     parentId: 17
//                 },
//             },
//         ]
//     },
//     {
//         path: '/goods',
//         component: "layout",
//         alwaysShow: true,
//         name: "goods",
//         meta: {
//             title: "商品管理",
//             icon: "el-icon-document",
//             roles: ['sys:goods'],
//             parentId: 0
//         },
//         children: [
//             {
//                 path: '/goods',
//                 component: "/goods/goodsCategory/goodsCategoryList",
//                 alwaysShow: false,
//                 name: "goodsCategory",
//                 meta: {
//                     title: "商品分类",
//                     icon: "el-icon-document",
//                     roles: ['sys:meun'],
//                     parentId: 34
//                 },
//             },
//         ]
//     },
//     {
//         path: '/systenConfig',
//         component: "layout",
//         alwaysShow: true,
//         name: "systenConfig",
//         meta: {
//             title: "系统工具",
//             icon: "<Memo />",
//             roles: ['sys:systenConfig'],
//             parentId: 0
//         },
//         children: [
//             {
//                 path: '/document',
//                 component: "/system/config/systemDocument",
//                 alwaysShow: false,
//                 name: "goodsCategory",
//                 meta: {
//                     title: "接口文档",
//                     icon: "el-icon-document",
//                     roles: ['sys:meun'],
//                     parentId: 34
//                 },
//             },
//         ]
//     },
// ]);
let MenuItemList: any[] = reactive([])
const menuList = async () => {
    let res = await getTreeMenus()
    MenuItemList = aryToTree(res)
    console.log(MenuItemList);
}
onMounted(() => {
    menuList()
})

function aryToTree(ary: any[], parent_id = 0) {
    let newAry: any[] = [];
    ary.forEach((item) => {
        if (item.parent_id == parent_id) {
            newAry.push({
                ...item,
                children: aryToTree(ary, item.menu_id),
            });
        }
    });
    return newAry;
}

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>