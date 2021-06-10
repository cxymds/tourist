<template>
    <van-tabbar v-model="active">
        <van-tabbar-item replace to="/recommend" icon="star-o">推荐</van-tabbar-item>
        <van-tabbar-item replace to="/activity" icon="thumb-circle-o">活动</van-tabbar-item>
        <van-tabbar-item replace to="/assistant" icon="medal-o">咖助手</van-tabbar-item>
        <van-tabbar-item replace to="/news" icon="comment-o" >消息</van-tabbar-item>
        <van-tabbar-item replace to="/Personal" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import { ref } from 'vue';

export default {
  name: 'tabbar',
  props: {
  },

  setup() {
    const active = ref(0);
    return { active };
  },

};

</script>
<style>
.van-tabbar{
position: sticky;
bottom: 0;
}
</style>