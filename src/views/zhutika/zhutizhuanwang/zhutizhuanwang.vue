<template>
  <div>
    <div class="luse">
      <div class="navbar">
        <div class="fanhui" @click="fanhui">
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
        <div class="huijian">
          <img src="http://xmage.club/FvPeInV_SFhhC6YbEuFCj73-gm82" alt="" />
        </div>
      </div>
      <div class="mingcheng">套餐名称：流量包 3000MB</div>
      <div class="qixian">套餐期限：2021/7/20 12:00 PM 到期</div>
    </div>

    <div class="denglu">
      <div class="yilianjie" @click="yilianjie">
        <div class="tu_a">
          <img
            class="im"
            src="http://xmage.club/FqdCl_OC77BriF6exfH8C2m2aKh4"
            alt=""
          />
        </div>
        <div class="tuwen_a">已连接记录</div>
      </div>

      <div class="zhuanwang" @click="zhuanwang">
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

    <!-- 横向滚动 功能缺陷 -->
    <div>
      <van-tabs v-model="active" animated>
        <van-tab title="时长包" :key="id">
          <div class="baokuang">
            <div class="liuliangbao" v-for="liu in list" :key="liu.id">
              <div class="tianshu">{{ liu.liang }}</div>
              <div class="xianjia">
                <div class="xianjia_shu">
                  {{ liu.xianjia }}
                  <div class="xianjia_fuhao">￥</div>
                </div>
              </div>
              <div class="yuanjia">￥{{ liu.yuanjia }}</div>
              <div class="leixing">{{ liu.liexing }}</div>
            </div>
          </div>
        </van-tab>

        <van-tab title="流量包" :key="id">
          <div class="baokuang">
            <div class="liuliangbao" v-for="liu in list" :key="liu.id">
              <div class="tianshu">{{ liu.tian }}</div>
              <div class="xianjia">
                <div class="xianjia_shu">
                  {{ liu.xianjia }}
                  <div class="xianjia_fuhao">￥</div>
                </div>
              </div>
              <div class="yuanjia">￥{{ liu.yuanjia }}</div>
              <div class="leixing">{{ liu.liexing }}</div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 我已经阅读需知 功能缺陷 -->
    <div class="xuzhi">
      <van-checkbox
        id="yueduxuzhi"
        icon-size="14px"
        v-model="checked"
        @click="show = true"
        >我已经阅读需知</van-checkbox
      >
      <van-overlay :show="show" @click="show = true">
        <div class="wrapper" @click.stop>
          <div class="block">
            <div class="block_yuedu">阅读上网须知</div>
            <div>
              请您仔细阅读上网须知<br />
              并同意相关事项
            </div>
            <div class="block_anniu">
              <button
                class="block_button_a"
                type="primary"
                @click="show = false"
              >
                取消
              </button>
              <button class="block_button_b" type="primary" @click="qianwang">
                前往
              </button>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>

    <div>
      <van-button type="primary" text="立即购买" @click="showNotify" />
      <van-notify v-model:show="shows" type="primary">
        <van-icon name="bell" style="margin-right: 4px;" />
        <span>购买成功</span>
      </van-notify>
    </div>

    <div class="zuijingoumai">
      <div class="zuijinggoumai_wenzi">最近购买</div>

      <div class="ztj" @click="ztj">
        <div class="zuijinggoumai_jilu">所有记录</div>
        <div class="zhujingoumai_tiaozhuan">
          <img src="http://xmage.club/FnCoMe5uHwYgFG9nbb8dthUfNF2c" alt="" />
        </div>
      </div>
    </div>
    <div class="zuijingouman_zhanshi">
      <van-row justify="center" v-for="zhi in jilu" :key="zhi.id">
        <van-col span="8">{{ zhi.ming }}</van-col>
        <van-col span="8">￥{{ zhi.jin }}</van-col>
        <van-col span="8">{{ zhi.shijian }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { ref } from "vue";
export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    const checked = ref(false);
    const show = ref(false);
    const shows = ref(false);
     const showNotify = () => {
      shows.value = true;
      setTimeout(() => {
        shows.value = false;
      }, 2000);
    };
    return {
      onClickLeft,
      checked,
      show,
      showNotify,
      shows
    };
  },
  name: "",
  data() {
    return {
      list: [
        {
          liang: "200MB",
          tian: "1天",
          xianjia: "88",
          yuanjia: "120",
          liexing: "大咖专享",
        },
        {
          liang: "500MB",
          tian: "3天",
          xianjia: "188",
          yuanjia: "238",
          liexing: "热门选择",
        },
        {
          liang: "1000MB",
          tian: "7天",
          xianjia: "288",
          yuanjia: "328",
          liexing: "大咖专享",
        },
        {
          liang: "3000MB",
          tian: "10天",
          xianjia: "328",
          yuanjia: "398",
          liexing: "至臻特惠",
        },
      ],
      jilu: [
        {
          ming: "流量包 200MB",
          jin: "88.00",
          shijian: "2021/6/21",
        },
        {
          ming: "流量包 500MB",
          jin: "188.00",
          shijian: "2021/6/21",
        }
      ],
    };
  },
  methods: {
    yilianjie() {
      this.$router.push({ path: "yilianjiejilu" });
    },
    zhuanwang() {
      this.$router.push({ path: "zhuanwangjihuoka" });
    },
    ztj() {
      this.$router.push({ path: "goumaijilu" });
    },
    qianwang() {
      this.$router.push({ path: "yueduxuzhi" });
    },
    fanhui() {
      this.$router.push({ path: "assistant" });
    },
  },
};
</script>


<style scoped>
/* 主题专网 */
.van-button--normal{
  border-radius: 15px;
  width: 125px;
  height: 41px;
  margin-right: 19px;
}
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
  margin: 15px 0 0 50px;
  background-color: #84d02c;
  border-radius: 50%;
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

/* 已链接记录 */
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

/* 横向滚动 */
.baokuang {
  width: 340px;
  margin: 20px auto 0;
  height: 140px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
/* 横向滚动时   取消横向滚动的滚动条 */
.baokuang::-webkit-scrollbar {
  display: none;
}

.liuliangbao {
  display: inline-block;
  margin-right: 12px;
  width: 103px;
  height: 136px;
  border: 1px solid #ff9800;
  border-radius: 10px;
}
.tianshu {
  height: 35px;
  width: 100%;
  background-color: #ff9800;
  line-height: 35px;
  color: #fff;
  border-radius: 10px 10px 0 0;
}
.xianjia {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
}
.xianjia_fuhao {
  float: left;
  font-size: 16px;
  margin-top: 8px;
}
.xianjia_shu {
  font-size: 30px;
  margin: 0 auto;
}
.yuanjia {
  color: #999999;
  text-decoration: line-through;
}
.leixing {
  background-color: #1c222a;
  color: #e3c9a3;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  height: 25px;
  margin-top: 5px;
  line-height: 25px;
}

/* 我已经阅读须知功能缺陷 */
.xuzhi {
  width: 140px;
  margin: 20px auto 0;
}
.block_yuedu {
  width: 100px;
  margin: 20px auto;
  font-weight: 600;
}
.block_anniu {
  width: 100%;
  height: 52px;
  border-radius: 0 0 10px 10px;
  margin-top: 22px;
}
.block_button_a,
.block_button_b {
  width: 50%;
  height: 100%;
  background-color: #fff;
  border: none;
  border-top: 1px solid #999;
}
.block_button_a {
  color: #999999;
  border-radius: 0 0 0 10px;
  border-right: 1px solid #999;
}
.block_button_b {
  color: #007aff;
  border-radius: 0 0 10px 0;
}

/* 遮罩 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 290px;
  height: 180px;
  border-radius: 10px;
  background-color: #fff;
}

/* 立即购买 */
#yueduxuzhi {
  font-size: 14px;
}
#van_but {
  background-color: #ff9800;
  width: 220px;
  margin: 0 auto;
  margin-top: 20px;
  outline: none;
  border: none;
}

/* 最近购买 */
.zuijingouman_zhanshi {
  color: #999999;
  font-size: 14px;
}

.zuijingoumai {
  width: 340px;
  height: 40px;
  margin: 10px auto 0;
}
.zuijinggoumai_wenzi {
  height: 100%;
  line-height: 40px;
  width: 100px;
  font-size: 17px;
  font-weight: 700;
  float: left;
}
.zuijinggoumai_jilu {
  line-height: 40px;
  font-size: 14px;
  margin-right: 10px;
}
.zhujingoumai_tiaozhuan {
  width: 14px;
  height: 14px;
  margin-top: 13px;
}
.zhujingoumai_tiaozhuan > img {
  width: 14px;
  height: 14px;
}
.ztj {
  width: 100px;
  height: 40px;
  display: flex;
  float: right;
}
</style>