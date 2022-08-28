<template>
  <view class="content">
    <view style="height: 100%; width: 100%">
      <scroll-view
        :refresher-threshold="50"
        :scroll-y="true"
        style="height: calc(100vh - 44px)"
        :refresher-enabled="true"
        refresher-default-style="black"
        :refresher-triggered="triggered"
        refresher-background="none"
        @refresherpulling="refresherpulling"
        @refresherrefresh="refresherrefresh"
        @scrolltolower="scrolltolower"
      >
        <view v-for="item in data" :key="item.id" style="padding: 30px 20px">
          {{ item.name }}--{{ item.id }}
        </view>
        <view v-if="flag"> 我空了 </view>
        <view v-else> 上拉hhh </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';

  interface Item {
    name: string;
    age: number;
    id: number;
  }
  const flag = ref<boolean>(false);
  const triggered = ref<boolean | string>(false);
  const pageNum = ref<number>(1);
  const total = ref<number>(45);
  const arr = Array.from({ length: 10 }, () => ({
    name: 'lanjuan',
    age: 18,
    id: Math.random()
  }));
  console.log(arr);

  function refresherpulling() {
    console.log('refresherpulling');
  }

  // function refresherrestore() {
  //   console.log('refresherrestore');
  // }
  // function refresherabort() {
  //   console.log('refresherabort');
  // }
  // 设置数据
  function request(): Array<Item> {
    console.log({ pageSize: 10, pageNum: pageNum.value, total: total.value });
    return Array.from({ length: 10 }, () => ({
      name: 'lanjuan',
      age: 18,
      id: Math.random()
    }));
  }
  const data = reactive(request()) as Array<Item>;

  function refresherrefresh() {
    pageNum.value = 1;
    triggered.value = true;
    setTimeout(() => {
      triggered.value = false;
    }, 1000);
    request();
  }

  function scrolltolower() {
    if (data.length < total.value) {
      pageNum.value++;
      const arr1 = request();
      data.push(...arr1);
      flag.value = false;
      triggered.value = false;
    } else {
      flag.value = true;
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
