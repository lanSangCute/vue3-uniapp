<template>
<view>
<button @click="setAge">设置年龄</button>
<text>年龄：{{age}}</text>
<text>ageGetters:{{ageGetters}}</text>
<button @click="setMessage">设置message</button>
<text>message：{{message}}</text>
<text>messageGetters:{{messageGetters}}</text>

</view></template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "vuex"
const store = useStore();
function setAge(){
    store.dispatch("user/setAge", 18);
}
function setMessage(){
    store.dispatch("info/setMessage", "兰娟可爱");
}
console.log(store)
let age = computed<number>(()=>store.state.user.age)
let ageGetters = computed<number>(()=>store.getters['user/getAge'])

let message = computed<string>(()=>store.state.info.message)
let messageGetters = computed<string>(()=>store.getters['info/getMessage'])
</script>