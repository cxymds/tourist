<template>
  <div>
    <div class="head_box">
      <div class="left_box">咖咖助手</div>
      <div class="right_box" @click="tongzhi">
        <van-icon name="chat-o" badge="3" />
      </div>
    </div>
    <div class="img_box">
      <van-image src="http://xmage.club/Fs9rKV0QiT1Hnmtyl6c3VyqCUMbZ" />
    </div>
    <div class="notice">
      <van-notice-bar
        class="notice_box"
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
    <div class="label">
      <span class="label_left">咖助手</span>
      <span class="label_right">已开通1项</span>
    </div>
    <div class="lcon_bar">
      <a href="/zhutizhuanwang" class="lcon_box">
        <div class="box_1" style="background-color: #009688">
          <van-image src="http://xmage.club/FiNj_EW13kT3Ds8gaP9vK41v-PAe" />
        </div>
        <div class="box_2">主题专网</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ffd502">
          <van-image src="http://xmage.club/FsyA1PZcAYx_oWjdSun_BXMSJ9Lc" />
        </div>
        <div class="box_2">电影票</div>
      </a>
      <a href="/kayingyuan" class="lcon_box">
        <div class="box_1" style="background-color: #ff5a57">
          <van-image src="http://xmage.club/FsdKSeV0vPfPzSP7rnRUmj0ZmzCW" />
        </div>
        <div class="box_2">咖影院</div>
      </a>
      <a href="/tongxun" class="lcon_box">
        <div class="box_1" style="background-color: #45ca35">
          <van-image src="http://xmage.club/Fsnh6-X4viQtpy8Vu3t74z4PH271" />
        </div>
        <div class="box_2">通讯</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff9800">
          <van-image src="http://xmage.club/Fjh1TaoVmwvsBr1ErOfYRvzzDzZ8" />
        </div>
        <div class="box_2">智能酒店</div>
      </a>
    </div>
    <div class="label">
      <span class="label_left">咖服务</span>
      <span class="label_right"></span>
    </div>
    <div class="lcon_bar">
      <a href="/kadangan" class="lcon_box">
        <div class="box_1" style="background-color: #1d65e3">
          <van-image src="http://xmage.club/FmUMW89tckXRgZ3GJuzccnxhP9Eo" />
        </div>
        <div class="box_2">咖档案</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff9800">
          <van-image src="http://xmage.club/Fte9gc-JzL7do8AykiMdlnfQziK5" />
        </div>
        <div class="box_2">服务</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff5a57">
          <van-image src="http://xmage.club/FuKotnHzx3TwT_kIl2GQFr9ilZww" />
        </div>
        <div class="box_2">地图</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #009688">
          <van-image src="http://xmage.club/Fl7FnhlocWB4QxjBK_G4M6RYY6sW" />
        </div>
        <div class="box_2">日程</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff5a57">
          <van-image src="http://xmage.club/Fjy6RhVsbe3zBn1DjbEps1Qk-kZJ" />
        </div>
        <div class="box_2">客服</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff5a57">
          <van-image src="http://xmage.club/FoadvxTSKtaWceeJeAHxfzib2jpi" />
        </div>
        <div class="box_2">托运</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ffd502">
          <van-image src="http://xmage.club/FrqMD8Djt1YG1krDXLtRHhx-Sq4f" />
        </div>
        <div class="box_2">幸运咖</div>
      </a>
    </div>
    <div class="label">
      <span class="label_left">咖出行</span>
      <span class="label_right">更多应用</span>
    </div>
    <div class="lcon_bar">
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff9800">
          <van-image src="http://xmage.club/Fkn5fxcmQ0lUW4F6aNC3h-O_7x7L" />
        </div>
        <div class="box_2">天气</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #009688">
          <van-image src="http://xmage.club/Fi9eGkYOfh4odDPJD4G64JhZw3si" />
        </div>
        <div class="box_2">附近</div>
      </a>
    </div>
    <div class="label">
      <span class="label_left">咖帮手</span>
      <span class="label_right"></span>
    </div>
    <div class="lcon_bar">
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #1d65e3">
          <van-image src="http://xmage.club/FhV0D53nowjO7BHeI3KVm7Z6G5VM" />
        </div>
        <div class="box_2">帮助</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff9800">
          <van-image src="http://xmage.club/Fg7d6-f8vc7aP-Zz9UHnDkFBpvYv" />
        </div>
        <div class="box_2">须知</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ff5a57">
          <van-image src="http://xmage.club/Fpgk7xWt6q75Q2vX-n6Dk5zXD_0O" />
        </div>
        <div class="box_2">安全</div>
      </a>
      <a href="" class="lcon_box">
        <div class="box_1" style="background-color: #ffd502">
          <van-image src="http://xmage.club/FjLP6Qi7je2iSAgvYnoTwGGVZnKo" />
        </div>
        <div class="box_2">神秘功能</div>
      </a>
    </div>
  </div>
  <tapbar></tapbar>
</template>

<script>
import menu from "@/components/Nav.vue";

export default {
  name: "cc",
  components: {
    tapbar: menu,
  },
  methods: {
    tongzhi() {
      this.$router.push({ path: "/tongzhi" });
    },
  },
};
</script>

<style>
.head_box {
  width: 100%;
  height: 2.5em;
  background-color: #fff;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
}
.head_box div {
  width: 50%;
}
.head_box .left_box {
  text-align: left;
  padding-left: 1em;
  line-height: 2.5em;
}
.head_box .right_box {
  text-align: right;
  padding-right: 1em;
  line-height: 2.5em;
}
.img_box {
  width: 100%;
  height: 9em;
  /* background-color: bisque; */
  margin-top: 1em;
}
.img_box .van-image {
  width: 95%;
  height: 99.5%;
  /* border-radius: 20px; */
}
.notice {
  width: 100%;
  height: 2.5em;
  margin-top: 0.5em;
  background-color: #f9f9f9;
}
.notice .notice_box {
  background-color: #f9f9f9;
  color: #000;
}
.label {
  width: 100%;
  height: 2.5em;
  /* background-color: bisque; */
  margin: 0.5em 0;
  display: flex;
}
.label span {
  width: 50%;
}
.label .label_left {
  text-align: left;
  line-height: 2.5em;
  padding-left: 1em;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: 600;
}
.label .label_right {
  text-align: right;
  line-height: 3em;
  padding-right: 1em;
  box-sizing: border-box;
  font-size: 14px;
  /* font-weight: 600; */
}
.lcon_bar {
  width: 95%;
  height: auto;
  background-color: #f9f9f9;
  /* display: flex; */
  margin: 0 auto;
  border-radius: 10px;
  text-align: left;
  /* float: left; */
}
.lcon_bar .lcon_box {
  width: 18%;
  height: 4.5em;
  padding: 1em 1%;
  display: block;
  float: left;
  color: #666;
  /* background-color: chartreuse; */
}
.lcon_bar .lcon_box .box_1 {
  width: 70%;
  height: 60%;
  /* display: block; */
  margin: 0 auto;
  border-radius: 10px;
}
.lcon_bar .lcon_box .box_1 .van-image {
  width: 60%;
  height: 60%;
  padding: 20%;
  border-radius: 10px;
}
.lcon_bar .lcon_box .box_2 {
  font-size: 13px;
  text-align: center;
  margin: 10% 0 0 0;
}
</style>