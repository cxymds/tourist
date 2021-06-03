<template>
  <div>
    <div class="luse">
      <div class="navbar">
        <div class="fanhui">
          <img src="http://xmage.club/FnB0bOwoMO3jVjMR496s-K5tsJth" alt="" />
        </div>
        <div class="biaoti">主题专网</div>
      </div>
      <div class="liuliang">
        <div class="wssb">
          <div class="shenyv">
            <div class="tubiao">
              <img
                src="http://xmage.club/Fp4oebu2cmPkcG4rKYXUPt6Zauyx"
                alt=""
              />
            </div>
            <div class="wenzhi">剩余流量</div>
          </div>
          <div class="MB">
            2761
            <div>MB</div>
          </div>
        </div>
        <div class="huijian">huijian</div>
      </div>
      <div class="mingcheng">套餐名称：流量包 3000MB</div>
      <div class="qixian">套餐期限：2020/12/30 12:00 PM 到期</div>
    </div>

    <div class="denglu">
      <div class="yilianjie">
        <div class="tu_a">
          <img
            class="im"
            src="http://xmage.club/FqdCl_OC77BriF6exfH8C2m2aKh4"
            alt=""
          />
        </div>
        <div class="tuwen_a">已连接记录</div>
      </div>
      <div class="zhuanwang">
        <div class="tu_b">
          <img
            class="im"
            src="http://xmage.club/FrF_dZqM4TST8yPLgQSZIrn1a4Ue"
            alt=""
          />
        </div>
        <div class="tuwen_b">专网激活卡</div>
      </div>
    </div>

    <div>
      <van-tabs v-model="active" animated>
        <van-tab v-for="index in 2" :title="'选项 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<style scoped>
.navbar {
  height: 44px;
  display: flex;
  flex-direction: row;
}
.fanhui {
  position: absolute;
  top: 10px;
  left: 10px;
}
.biaoti {
  height: 44px;
  margin: 0 auto;
  color: #fff;
  line-height: 44px;
  font-size: 18px;
}
.wssb {
  width: 200px;
}
.luse {
  overflow: hidden;
  width: 100%;
  height: 300px;
  background-color: #009688;
  background-image: url(http://xmage.club/FnWGQ6q5i7bKObvso17dPX-PvvsY);
}
.huijian {
  width: 76px;
  height: 76px;
  border: 1px solid #000;
  margin: 15px 0 0 50px;
}
.liuliang {
  width: 350px;
  height: 109px;
  margin: 20px auto 0;
  color: #fff;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: row;
}
.shenyv {
  display: flex;
  flex-direction: row;
  height: 22px;
  font-size: 16px;
  margin: 10px 0 0 20px;
}
.tubiao {
  height: 22px;
  width: 22px;
}
.wenzhi {
  width: 70px;
  height: 22px;
  margin-left: 10px;
}
.MB {
  margin: 15px 0 0 20px;
  text-align: left;
  width: 100%;
  height: 45px;
  font-size: 45px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.MB > div {
  font-size: 20px;
  height: 20px;
  position: absolute;
  bottom: 2px;
  left: 100px;
}

.mingcheng,
.qixian {
  width: 350px;
  margin: 0 auto;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 10px;
}

.denglu {
  width: 344px;
  height: 68px;
  margin: -34px auto 0;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
}
.yilianjie,
.zhuanwang {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.tu_a,
.tu_b {
  width: 36px;
  height: 36px;
  margin: 12px 0 0 30px;
  border-radius: 50%;
  position: relative;
}
.tu_a {
  background-color: #45ca35;
}

.tu_b {
  background-color: #f5cd02;
}
.im {
  position: absolute;
  top: 8px;
  left: 8px;
}
.tuwen_a,
.tuwen_b {
  height: 36px;
  line-height: 36px;
  width: 100px;
  margin: 12px 0 0 10px;
  font-size: 14px;
  text-align: left;
}
.tuwen_a {
  border-right: 1px solid #eee;
}
</style>

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