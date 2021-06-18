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
      <p>主题咖乐园<sup>TM</sup>宣传片 ™</p>
      <p>喜剧·某国·2019·剧情</p>
    </div>
  </div>
</template>

<style scoped>
/* 宣传片 */
.xuanchuan {
  text-align: left;
  width: 340px;
  margin: 0 auto;
}

.xuanchuan > p:nth-child(1) {
  font-size: 20px;
  font-weight: 600;
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