<template>
    <van-tabbar v-model="active" active-color="rgb(139, 139, 139)" inactive-color="rgb(139, 139, 139)">
        <van-tabbar-item replace to="/recommend" name="recommend" icon="star-o">推荐</van-tabbar-item>
        <van-tabbar-item replace to="/activity" name="activity" icon="thumb-circle-o">活动</van-tabbar-item>
        <van-tabbar-item replace to="/assistant" name="assistant" icon="medal-o">咖助手</van-tabbar-item>
        <van-tabbar-item replace to="/news" name="news" icon="comment-o" >消息</van-tabbar-item>
        <van-tabbar-item replace to="/Personal" name="personal" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'tabbar',
  props: {
  },

  setup() {
    const active = ref('recommend');
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