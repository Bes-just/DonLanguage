import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'login',
        component:()=>import('../views/login/login.vue')
    },
    {
        path:'/layout',
        name:'layout',
        component:()=>import('../layout/layout.vue'),
        redirect:'/home',
        children:[
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/user-admin/user-admin.vue'),
            },
            {
                path:'/role',
                name:'role',
                component:()=>import('../views/role-admin/role-admin.vue'),
            },
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home/home.vue'),
            },
        ]
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
