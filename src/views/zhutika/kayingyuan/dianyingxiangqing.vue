<template>
  <div>
    <!-- 视频 -->
    <div class="shiping">
      <!-- 返回 -->
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/FnB0bOwoMO3jVjMR496s-K5tsJth" alt="" />
      </div>
      <!-- 视频 -->
      <div class="shiping_v">
        <video
          src="http://pgc.qcdn.xiaodutv.com/1304060514_1481690946_20210616145012.mp4?Cache-Control%3Dmax-age-8640000%26responseExpires%3DFri%2C_24_Sep_2021_14%3A50%3A18_GMT=&xcode=450fd4f2332ade58a78b1131b93dbc66ea28b49d15ecb3af&time=1624061675&_=1623976192282"
          controls
          muted
        ></video>
      </div>
    </div>
    <!-- 宣传片 -->
    <div class="xuanchuan">
      <p>主题咖乐园™宣传片</p>
      <p>喜剧·某国·2019·剧情</p>
    </div>
  </div>
</template>
c
<style scoped>
/* 宣传片 */
.xuanchuan {
  padding: 0 0 0 15px;
  box-sizing: border-box;
  text-align: left;
  width: 375px;
  margin: 0 auto;
  height: 65px;
  border-bottom: 1px solid rgb(240, 240, 240);
}

.xuanchuan > p:nth-child(1) {
  font-size: 20px;
  font-weight: 600;
}
.xuanchuan > p:nth-child(2) {
  font-size: 14px;
  color: #c6c9cc;
  font-weight: 600;
  margin: -15px 0 0 0;
}

/* 视频 */
.shiping {
  width: 375px;
  height: 210px;
  margin: 0 auto;
  position: relative;
}
.fanhui {
  width: 60px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 0;
  text-align: left;
}
.fanhui > img {
  margin: 5px 0px 0px 10px;
}

.shiping_v > video {
  width: 375px;
  height: 210px;
}
</style>

<script>
export default {
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
};
</script>