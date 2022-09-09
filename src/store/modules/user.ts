import {defineStore} from 'pinia'

export const userStore = defineStore('userInfo',{
    state:()=>{
        return{
            userName:"张三",
            password:"123456"
        }
    },
    getters:{
        fullName:(state)=>{
            return `${state.userName}--${state.password}`
        }
    },
    actions:{
        updateUserName(name:string){
            this.userName = name
        }
    }
})