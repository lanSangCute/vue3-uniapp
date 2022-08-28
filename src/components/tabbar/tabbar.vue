<template>
  <view class="TabBar">
    <view v-for="(item, index) in TabBarList" :key="index" class="tab" @tap="navigatorTo(item.url)">
      <!-- 判断是否有点击，如果没有就不是激活样式，点击就是激活的样式 -->
      <image
        class="img"
        :src="current == index ? item.selectIcon : item.icon"
        mode="widthFix"
      ></image>
      <!-- 设置一个状态值（type），判断加号是否展示 -->

      <view :class="current == index ? 'active' : 'text'">{{ item.name }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
  defineProps({
    current: {
      type: Number,
      default: 0
    }
  });
  const TabBarList = [
    {
      type: 0,
      icon: '/static/logo.png',
      selectIcon: '/static/a.svg',
      name: '首页',
      url: '/pages/vuex-useStore/vuex-useStore'
    },

    {
      type: 1,
      icon: 'static/logo.png',
      selectIcon: '/static/a.svg',
      name: 'haha',
      url: '/pages/vuex-hooks/vuex-hooks'
    }
  ];
  function navigatorTo(e: any) {
    console.log(e);
    uni.switchTab({
      url: e
    });
  }
</script>

<style>
  .uni-tabbar-bottom {
    display: none;
  }
  .TabBar {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    color: red;
  }
  .img {
    height: 30px;
    width: 30px;
  }
</style>
