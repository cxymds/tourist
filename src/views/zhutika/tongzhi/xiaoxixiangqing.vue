<template>
  <div>
    <van-nav-bar
      title="信息详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="kuang">
      <div class="xiaoxi"></div>
      <div class="xiangqing"></div>
    </div>
  </div>
</template>
<style scoped>
div {
  border: 1px solid #000;
}
.kuang {
  width: 100%;
  height: 195px;
  margin-top: 10px;
}
.xiaoxi {
  width: 375px;
  height: 40px;
  margin: 0 auto;
}
.xiangqing {
  width: 375px;
  height: 150px;
  margin: 0 auto;
}
</style>








import { Toast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => Toast('返回');
    return {
      onClickLeft,
    };
  },
};