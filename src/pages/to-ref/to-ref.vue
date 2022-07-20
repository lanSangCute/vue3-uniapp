<template>
    <view><text>{{obj.name}}</text><text>{{obj.age}}</text></view>
</template>

<script setup lang="ts">
import { reactive, toRef}from "vue"
interface User {
    name: string;
    age: number;
}
const obj = reactive({
    name: "lanjuan",
    age: 18
}) as User

const ageRef = toRef(obj,'age')

setTimeout(() => {
    ageRef.value = 16
}, 1000);
setTimeout(() => {
    ageRef.value = 14
}, 2000);
</script>