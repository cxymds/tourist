<template>
  <div>
    <van-nav-bar
      title="专网激活卡"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 广告位 -->
    <div class="guanggao">
      <img src="http://xmage.club/Fu_v-5Dr-7YZFScHLAzQP_Yzb6h3" alt="" />
    </div>
    <!-- 激活 -->
    <div class="jihuo">
      <!-- 激活卡序号 -->
      <div class="jihuo_xuhao">激活卡序号</div>
      <!-- 请输入序号 -->
      <input type="text" id="qingshuru_xuhao" placeholder="请输入序号" />
      <!-- 卡密 -->
      <div class="kami">卡密</div>
      <!-- 请输入卡密 -->
      <input type="password" id="qingshuru_kami" placeholder="请输入卡密" />
      <van-button type="primary" text="立即激活" @click="showNotify" />
      <van-notify v-model:show="show" type="success">
        <van-icon name="bell" style="margin-right: 4px;" />
        <span>激活成功</span>
      </van-notify>
    </div>
    <!-- 声明 -->
    <div class="shengming">
      请刮开激活卡的刮涂区<br />
      并在此页面输入序号及卡密进行激活即可
    </div>
  </div>
</template>
<style>
html {
  background-color: rgb(245, 245, 245);
}
</style>

<style scoped>
.van-button{
  margin-top: 10px;
  width: 310px;
  border-radius: 15px;
  background-color: #07C160;
  border: 1px solid #07C160;  
}
.guanggao {
  width: 345px;
  height: 103px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 10px;
}
.guanggao > img {
  width: 100%;
  height: 100%;
}
.jihuo {
  height: 350px;
  width: 345px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
}
.jihuo_xuhao {
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#qingshuru_xuhao {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: 15px;
  background-color: rgb(245, 245, 245);
  text-align: center;
  font-weight: 600;
  color: #999;
  margin-bottom: 15px;
}
.kami {
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
}
#qingshuru_kami {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  margin-top: 15px;
  background-color: rgb(245, 245, 245);
  text-align: center;
  font-weight: 600;
  color: #999;
}
.jihuo_button {
  width: 90%;
  margin: 15px auto 0;
  background-color: #ff9800;
  border: none;
}
.shengming {
  color: #999;
  margin-top: 25px;
}
</style>

<script>
import { Toast } from "vant";
import { ref } from 'vue';
export default {
  setup() {
    const show = ref(false);
    const onClickLeft = () => Toast("返回");
    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };
    return {
      onClickLeft,
      show,
      showNotify,
    };
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>