<template>
    <div>
        <div class="head_box">
            <div class="left_box"><van-icon name="arrow-left" />返回</div>
            <div class="in_box">所有订单</div>
        </div>
        <van-tabs v-model:active="active">
            <van-tab title="全部">内容 1</van-tab>
            <van-tab title="待付款">内容 2</van-tab>
            <van-tab title="已付款">内容 3</van-tab>
            <van-tab title="已完成">内容 4</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    return { active };
  },
};
</script>
<style>
    .head_box{
        width: 100%;
        height: 2.5em;
        background-color: aqua;
        display: flex;
        text-align: center;
    }
    .head_box .left_box{
        width: 20%;
        height: 100%;
        line-height: 2.5em;
    }
    .head_box .in_box{
        width: 20%;
        height: 100%;
        margin: 0 20%;
        line-height: 2.5em;
        font-size: 17px;
        font-weight: 600;
    }
</style>