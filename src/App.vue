<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

  onLaunch(() => {
    console.log('App Launch');
  });
  onShow(() => {
    console.log('App Show');
  });
  onHide(() => {
    console.log('App Hide');
    // const a = {
    //   d: '',
    //   c: '',
    // };
  });
</script>
<style></style>
