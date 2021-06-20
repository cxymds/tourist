<template>
  <div>
    <van-nav-bar
      title="开通"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <!-- 广告 -->
  <div class="guanggao">
    <img src="http://xmage.club/FnSNnPK2PScxrXMPUHshNVyJJY-1" alt="" />
  </div>
  <!-- 开通咖影院 -->
  <div class="kaitong_biao">开通咖影院</div>
  <!-- 横向滚动 -->
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
  <!-- 套餐说明 -->
  <div class="tongxunshuoming">
    <div class="tongxunshuoming_wenzi">套餐说明</div>
    <div class="tongxunshuoming_shuoming">
      “大咖畅享套餐”开通后，您可以无限制的观看咖 影院所有电影，终身免费!
    </div>
  </div>

  <!-- 请仔细阅读以下 -->
  <div class="zixiyuedu">请仔细阅读以下</div>
  <!-- 服务须知 -->
  <div class="xuzhi">
    <div class="xuzhi_wenzi">服务须知</div>
    <div class="xuzhi_xiangxi">
      本服务为主题咖娱乐体验服务，开通前请悉知:<br />
      一、 本服务购买后无法进行退款。<br />
      该服务功能由流媒体厂商提供，对此服务不做任何书面
      担保，也不代表厂商利益。<br />
      三、本服务片源均已得到播放及收费授权，相关收费由片源 方收取。
    </div>
  </div>
  <!-- 注意事项 -->
  <div class="zhuyi">
    <div class="zhuyi_wenzi" @click="chenggong = true">注意事项</div>
    <div class="zhuyi_xiangxi">
      一、本服务自开通完毕后即可使用，开通完毕可能会有1~10
      秒左右的激活延迟，请耐心等待;<br />
      二、本服务使用XX设备，请遵守国家相关法律法规;<br />
      三、使用过程中出现问题，请及时联系客服: 2036
    </div>
    <!-- 开通 -->
    <div class="kaitong">
      <van-button
        type="primary"
        class="kaitong_btn"
        block
        round
        is-link
        @click="showPopup"
        >开通 ￥328 套餐</van-button
      >
    </div>
    <!-- @click="show = true" -->

    <!-- <van-cell>展示弹出层 </van-cell> -->

    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <!-- 支付方式 -->
      <div class="zhifu">支付方式</div>
      <!-- 主题币 -->
      <div
        class="zhutibi"
        @click="
          zhifuchenggong();
          show = false;
        "
      >
        主题币 (剩余:￥16800)
      </div>
      <!-- 咖先用 -->
      <div
        class="kaxianyong"
        @click="
          zhifuchenggong();
          show = false;
        "
      >
        咖先用 (剩余:￥10000)
      </div>
      <!-- 咖积分 -->
      <div class="kajifen">咖积分兑换 (不足)</div>
      <!-- 取消 -->
      <div class="quxiao" @click="show = false">取消</div>
    </van-popup>
  </div>
</template>



<script>
import { ref } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    // const actions = [
    //   { name: "主题币 (剩余:￥16800)" },
    //   { name: "咖先用 (剩余:￥10000)" },
    //   { name: "咖积分兑换 (不足)", disabled: true },
    // ];

    // const onSelect = (item) => {
    //   // 默认情况下点击选项时不会自动收起
    //   // 可以通过 close-on-click-action 属性开启自动收起
    //   // close - on - click - action;
    //   show.value = false;
    //   Toast(item.name);
    //   console.log(item.name);
    //   console.log(item);
    // };
    // const onCancel = () => Toast("取消");
    return {
      onClickLeft,
      show,
      // actions,
      // onSelect,
      // onCancel,
      showPopup,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    zhifuchenggong() {
      Toast.success("支付成功");
      var time;
      time = setTimeout(() => {
        this.$router.push({ path: "kayingyuan" });
      }, 2000);
    },
  },
  data() {
    return {
      list: [
        {
          liang: "大咖专享",
          xianjia: "328",
          yuanjia: "398",
          liexing: "至臻特惠",
        },
        {
          liang: "1天套餐",
          xianjia: "88",
          yuanjia: "120",
          liexing: "大咖专享",
        },
        {
          liang: "3天套餐",
          xianjia: "188",
          yuanjia: "328",
          liexing: "热门选择",
        },
        {
          liang: "5天套餐",
          xianjia: "288",
          yuanjia: "328",
          liexing: "大咖专享",
        },
      ],
    };
  },
};
</script>




<style>
html {
  background-color: rgb(240, 240, 240);
}
</style>
<style scoped>
.zhifu,
.zhutibi,
.kaxianyong,
.kajifen,
.quxiao {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.zhifu {
  font-size: 20px;
  font-weight: 600;
}
.kajifen {
  color: #b8b8b8;
}
/* 213 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}

/* 广告 */
.guanggao {
  margin: 10px 0 0 0;
}
.kaitong_biao {
  width: 90%;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  margin: 10px auto;
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
  width: 70%;
  border-radius: 5px;
  margin: 0 auto;
  height: 25px;
  margin-top: 5px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 600;
}
/* 、套餐说明 */
.tongxunshuoming {
  height: 60px;
  width: 90%;
  margin: 15px auto 0;
  display: flex;
  font-weight: 600;
  color: #999;
  background-color: #fff;
  border-radius: 10px;
  font-size: 14px;
}
.tongxunshuoming_wenzi {
  height: 60px;
  line-height: 60px;
  width: 25%;
  text-align: left;
  padding-left: 15px;
  color: #c6cedb;
}
.tongxunshuoming_shuoming {
  padding-top: 9px;
  height: 60px;
  width: 72%;
  font-size: 12px;
  text-align: left;
}

/* 请仔细阅读以下 */
.zixiyuedu {
  width: 345px;
  height: 20px;
  font-size: 14px;
  color: #999;
  text-align: left;
  margin: 20px auto 0;
}

/* 服务须知 */
.xuzhi {
  width: 375px;
  height: 220px;
  background-color: #fff;
  margin-top: 5px;
  overflow: hidden;
}
.xuzhi_wenzi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.xuzhi_xiangxi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  color: #999;
}
/* 注意事项 */
.zhuyi {
  width: 375px;
  height: 170px;
  background-color: #fff;
  margin: 10px 0 70px 0;
  overflow: hidden;
}
.zhuyi_wenzi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.zhuyi_xiangxi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  color: #999;
}
/* 开通 */
.kaitong {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
}
.kaitong_btn {
  width: 70%;
  height: 40px;
  margin: 10px auto 0;
  background-color: #ff9800;
  border: none;
}
</style>

