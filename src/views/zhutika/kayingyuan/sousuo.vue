<template>
  <div>
    <!-- 搜索 -->
    <div class="sousuo">
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/Fm1wrip0dHEH0qmdPCc4qB5DGQ9N" alt="" />
      </div>
      <van-search
        class="sousuo_sou"
        v-model="value"
        show-action
        placeholder="哆啦A梦大1电影"
        @search="onSearch"
      >
        <template #action>
          <div class="sousuo_anniu" @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <!-- 历史记录 -->
    <div class="lishi">
      <div class="lishi_sousuo">
        <div class="lishi_sousuo_left">历史搜索</div>
        <div class="lishi_sousuo_right">
          <img
            class="lishi_sousuo_right_img"
            src="http://xmage.club/FvsZOwDQQ9-F1Esdsd4tnTFohBPe"
            alt=""
          />
          清除
        </div>
      </div>
      <div class="lishi_jilu">
        <div class="lishi_jilu_ming">电影</div>

        <van-sticky>
          <van-button type="primary">12312</van-button>
        </van-sticky>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lishi {
  width: 375px;
  height: 100px;
}
.lishi_sousuo {
  width: 375px;
  height: 30px;
  margin-top: 5px;
  border: 1px solid #000;
}
.lishi_sousuo_left {
  margin-left: 15px;
  float: left;
  color: #999999;
}
.lishi_sousuo_right {
  margin-right: 15px;
  float: right;
  color: #c6c9cc;
}
.lishi_sousuo_right_img {
  position: relative;
  top: 2px;
  left: 0px;
}

.lishi_jilu {
  width: 375px;
  height: 80px;
  border: 1px solid #000;
}
.lishi_jilu_ming {
  width: 150px;
  border: 1px solid #000;
  background-color: rgb(240, 240, 240);
  color: #666666;
}
/* 搜索 */
.sousuo {
  display: flex;
  height: 55px;
  width: 375px;
}
.fanhui {
  width: 40px;
  margin-top: 13px;
}
.sousuo_sou {
  width: 355px;
}
.sousuo_anniu {
  background-color: #ff9800;
  color: #fff;
  font-weight: 600;
  width: 60px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
/* 历史记录  */
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
};
</script>