<template>
    <view><text>{{objRefs.name}}</text><text>{{objRefs.age}}</text></view>
</template>

<script setup lang="ts">
import { reactive, toRefs}from "vue"
interface User {
    name: string;
    age: number;
}
const obj = reactive({
    name: "lanjuan",
    age: 18
}) as User

const objRefs = toRefs(obj)

setTimeout(() => {
    obj.age = 16
}, 1000);
setTimeout(() => {
    objRefs.age.value = 14
}, 2000);
</script>