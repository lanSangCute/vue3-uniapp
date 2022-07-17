<template>
  <view class="content">
    <!-- <scroll-view :scroll-top="scrollTop" :scroll-y="true" :enable-back-to-top="true" :refresher-enabled="true" @refresherrefresh="refresherrefresh" @scrolltolower="scrolltolower">

      <view v-for="item in data" :key="item.id" style="padding:30px 20px">
        {{item.name}}{{item.id}}
      </view>

    </scroll-view> -->
    <view style="height:100%;width:100%">
        <scroll-view :refresher-threshold="50" :scroll-y="true" style="height:500px" :refresher-enabled="true" refresher-default-style="black"  :refresher-triggered="triggered"
            refresher-background="none" @refresherpulling="refresherpulling"
            @refresherrefresh="refresherrefresh"  @scrolltolower="scrolltolower">
            <view v-for="item in data" :key="item.id" style="padding:30px 20px"
          >
              {{item.name}}{{item.id}}
            </view>
            <view v-if="flag">nononono</view>
            <view v-else> more。。。</view>

        </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
// import {} from "vue-decorators";
import { reactive, ref } from 'vue'

interface Item {
  name: String;
  age: number;
  id: number;
}
let flag = ref<boolean>(false)
const scrollTop = ref<number>(0)
const triggered = ref<boolean | string>(false)
const pageNum =ref<number>(1)
const title = ref('Hello')
let arr = Array.from(
      { length: 10 },
      (item, index) =>
          (item = {
              name: 'lanjuan' + index + 1,
              age:  index + Math.random() + 4,
              id: index + Math.random()
          })
  )
console.log(arr);

function refresherpulling(){
  console.log("refresherpulling");
  // triggered.value = true;
  
}

function refresherrestore(){
  // triggered.value = "restore";
  console.log("refresherrestore");
  
}
function refresherabort(){
  console.log("refresherabort");
  
}
// function refresherrestore(){
//   console.log("refresherrestore");
  
// }


let data = reactive(arr) as Array<Item>;

function refresherrefresh(){
  pageNum.value = 1;
  console.log("refresherrefresh");
  triggered.value = true;
  setTimeout(()=>{
  triggered.value = false

  }, 1000)

}

const total = ref<number>(45)

function scrolltolower() {

  console.log("scrolltolower");
  
  if(data.length < total.value) {
  pageNum.value++;
  let arr = Array.from(
      { length: 10 },
      (item, index) =>
          (item = {
              name: '兰娟' + index + 1,
              age:  index + 3,
              id: index + 1
          })
  )
  data.push(...arr)
  flag.value === false
  triggered.value = false
  }else {
    flag.value = true
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
