<template>
  <van-nav-bar
    title="信息通知"
    left-text="返回"
    right-text="标记已读"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <!-- 预约提醒 -->
  <div class="kuang">
    <div class="num1">
      <div class="left">
        <div class="xiaotubiao">
          <img src="" alt="" />
        </div>
        <div class="wenzi"></div>
      </div>
      <div class="right"></div>
    </div>
    <div class="num2"></div>
    <div class="num3">
      <div class="chakan">查看详情</div>
      <div class="tiaozhuan"></div>
    </div>
  </div>
</template>

<style scoped>
.kuang {
  border: 1px solid #000;
  width: 345px;
  height: 139px;
  margin: 0 auto 30px;
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
}
.num2 {
  height: 79px;
  width: 100%;
  border: 1px solid #000;
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
  width: 70px;
}
.tiaozhuan {
  height: 30px;
  width: 30px;
  border: 1px solid #000;
  position: absolute;
  right: 0px;
}
.xiaotubiao {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
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
  text-align: center;
}
.right {
  width: 50px;
  height: 30px;
  position: absolute;
  right: 10px;
  text-align: center;
}
</style>

<script>
export default {
  name: "",
  data() {
    return {
      // list: [
      //   {
      //     msg: 预约提醒,
      //     neirong:
      //       "您有一条餐饮美食预约即将到来，请您提早前往！时间:2020/12/30 17:30,人数：2人",
      //   },
      //   {
      //     msg: 活动通知,
      //     neirong:
      //       "“夜光派对”活动将于晚间20：00开放！节假日派对狂欢，激情即将开放；地点：娱乐区A16",
      //   },
      //   {
      //     msg: 我的消息,
      //     neirong:
      //       "您有一笔预支付超额未及时处理，请于今天11：30之前往前台进行相关账单办理！",
      //   },
      // ],
      // weidu: "未读",
      // yidu: "已读",
    };
  },
  methods: {},
};
</script>

import { Toast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => Toast('返回');
    const onClickRight = () => Toast('按钮');
    return {
      onClickLeft,
      onClickRight,
    };
  },
};