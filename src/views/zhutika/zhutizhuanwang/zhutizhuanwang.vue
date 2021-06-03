<template>
  <div>
    <van-nav-bar
      title="信息详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>



<script>
import { Toast } from "vant";
export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    return {
      onClickLeft,
    };
  },
  name: "",
  data() {
    return {
      list: [{}],
    };
  },
  methods: {},
};
</script>