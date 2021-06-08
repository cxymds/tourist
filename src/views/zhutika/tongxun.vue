<template>
  <div>
    <van-nav-bar
      title="实时通讯"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 海报 -->
    <div class="haibao">
      <img src="http://xmage.club/Fvk4lbgAVZdP_JAqV-XIoMbuA6Iy" alt="" />
    </div>
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
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "assistant" });
    },
  },
};
</script> 


<style scoped>
/* 海报 */
.haibao {
  width: 345px;
  height: 132px;
  margin: 20px auto 0;
  border: 1px solid #000;
}
</style>