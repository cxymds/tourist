<template>
  <div>
    <van-nav-bar
      title="信息通知"
      left-text="返回"
      right-text="标记已读"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 预约提醒 -->
    <div
      class="kuang"
      v-for="item in list"
      :key="item.id"
      @click="go(item.router)"
    >
      <div class="num1">
        <div class="left">
          <div class="xiaotubiao">
            <img :src="item.img" alt="" />
          </div>
          <div class="wenzi">{{ item.msg }}</div>
        </div>
        <div class="right">
          {{ item.duu }}
        </div>
      </div>
      <div class="num2">
        {{ item.neirong }}
      </div>
      <div class="num3">
        <div class="chakan">查看详情</div>
        <div class="tiaozhuan">
          <img src="http://xmage.club/FnCoMe5uHwYgFG9nbb8dthUfNF2c" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },

  name: "",
  data() {
    return {
      list: [
        {
          id: 1,
          msg: "预约提醒",
          neirong:
            "您有一条餐饮美食预约即将到来,请您提早前往！时间:2020/12/30 17:30,人数：2人",
          duu: "未读",
          img: "http://xmage.club/FpqtnUEdnyPqyzYwCoyPptFxbT4C",
          router: "",
        },
        {
          id: 2,
          msg: "活动通知",
          neirong:
            "“夜光派对”活动将于晚间20：00开放！节假日派对狂欢，激情即将开放；地点：娱乐区A16",
          duu: "未读",
          img: "http://xmage.club/FmA02JKOvYS4GtoDmtMb-s45OGtb",
          router: "activity-attention",
        },
        {
          id: 3,
          msg: "我的消息",
          neirong:
            "您有一笔预支付超额未及时处理，请于今天11：30之前往前台进行相关账单办理！",
          duu: "已读",
          img: "http://xmage.club/FvNqmwW3NlkqNNkhk4-lJ5H_miCF",
          router: "xiaoxixiangqing",
        },
      ],
    };
  },
  methods: {
    go(ip) {
      this.$router.push({ path: ip });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script> 

<style>
html {
  background-color: rgb(240, 240, 240);
}
</style>

<style scoped>
.kuang {
  background-color: #ffffff;
  width: 345px;
  height: 139px;
  margin: 0 auto 30px;
  border-radius: 10px;
}
.num1,
.num2,
.num3 {
  width: 100%;
}
.num1 {
  display: flex;
  flex-direction: row;
  height: 30px;
  position: relative;
  border-bottom: 1px solid rgb(240, 240, 240);
  margin-top: 10px;
}
.num2 {
  height: 79px;
  width: 100%;
  color: #999999;
  text-align: left;
  font-size: 14px;
  text-indent: 20px;
}
.num3 {
  height: 30px;
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
}
.chakan {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  width: 70px;
}
.tiaozhuan {
  height: 30px;
  width: 30px;
  position: absolute;
  right: 0px;
}
.xiaotubiao {
  width: 30px;
  height: 30px;
  position: relative;
}
img {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 6px;
  left: 6px;
}
.left {
  width: 100px;
  height: 30px;
  margin-left: 10px;
  flex-direction: row;
  display: flex;
}
.wenzi {
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #1c222a;
}
.right {
  width: 50px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 10px;
  text-align: center;
  color: #ffa042;
  font-size: 10px;
}
</style>