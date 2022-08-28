<template>
  <view>
    <button @click="setAge"> 设置年龄 </button>
    <text>年龄：{{ age }}</text>
    <text>ageGetters:{{ ageGetters }}</text>
    <button @click="setMessage"> 设置message </button>
    <text>message：{{ message }}</text>
    <text>messageGetters:{{ messageGetters }}</text>
  </view>
  <tabbar :current="0"></tabbar>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  function setAge() {
    uni.navigateTo({
      url: '/pages/to-refs/to-refs'
    });
    store.dispatch('user/setAge', 18);
  }
  function setMessage() {
    store.dispatch('info/setMessage', '兰娟可爱');
  }
  console.log(store);
  const age = computed<number>(() => store.state.user.age);
  const ageGetters = computed<number>(() => store.getters['user/getAge']);

  const message = computed<string>(() => store.state.info.message);
  const messageGetters = computed<string>(() => store.getters['info/getMessage']);
</script>
