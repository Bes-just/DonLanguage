<template>
    <el-icon :size="size" :color="color">
        <components :is="name"></components>
    </el-icon>
</template>
  
<script lang="ts">
import { defineComponent,PropType } from "vue";
import * as Icons from "@element-plus/icons-vue";

interface IconType{
    name:string,
    size?:string,
    color?:string,
}

export default defineComponent({
    components: Icons,
    name: "Icon",
    props:{
        name: {
            type:String,
            required: true,
        },
        size: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: "",
        },
    },
});
</script>
