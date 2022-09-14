<template>
    <div class="loginbox">
        <el-card>
            <template #header>
                管理员登陆  
            </template>
            <div>
                <el-form label-width="80px" :model="loginForm"  :rules="loginRules" ref="loginFormRef">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model="loginForm.username"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="loginForm.password" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" class="btn" @click="onSubmit">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
    interface loginFormState{
        username: string,
        password: string,
    }
    import { defineComponent, ref, reactive, toRaw } from 'vue'
    import axios from 'axios';
    import {useRouter} from 'vue-router'
    export default defineComponent({
        name: 'login',
        setup() {
            const router = useRouter()
            const loginFormRef = ref();
            const loginForm:loginFormState = reactive({
                username: '',
                password: '',
            })
            const loginRules={
                username:[
                    {required:true,message:'请输入用户名',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'}
                ],
            }
            const onSubmit=()=>{
                loginFormRef.value.validate().then(()=>{
                    console.log(toRaw(loginForm));
                    axios({
                        url:'/api/login',
                        method:'POST',
                        data:toRaw(loginForm)
                    }).then(res=>{
                        console.log(res.data);
                        router.push({
                            path:'/'
                        })
                    })
                })
            }
            return{
                loginFormRef,
                loginForm,
                loginRules,
                onSubmit
            }
        }
    })
</script>

<style scoped lang="scss">
.loginbox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 600px;
    height: 600px;
    margin: auto;

    .btn {
        width: 100%;
    }
}
</style>