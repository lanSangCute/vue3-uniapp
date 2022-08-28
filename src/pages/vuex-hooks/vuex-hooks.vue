<template>
  <view>
    <button @click="setAge"> 设置年龄 </button>
    <text>年龄：{{ age }}</text>
    <button @click="setMessage"> 设置message </button>
    <text>message：{{ message }}</text>
  </view>
  <tabbar :current="1"></tabbar>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  function setAge() {
    store.dispatch('user/setAge', 18);
  }
  function setMessage() {
    store.dispatch('info/setMessage', '兰娟可爱');
  }
  const age = computed<number>(() => store.state.user.age);

  const message = computed<string>(() => store.state.info.message);
</script>
