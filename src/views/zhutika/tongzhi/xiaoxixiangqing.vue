<template>
  <div>
    <van-nav-bar
      title="信息详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="kuang" v-for="item in list" :key="item.id">
      <div class="xiaoxi">
        {{ item.xiaoxi }}
      </div>
      <div class="xiangqing" v-html="item.xiangqing"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          xiaoxi:
            "您有一笔预支付超额未及时处理，请于今天11:30之前往前台进行相关账单办理!",
          xiangqing: `2020/12/30，周五，08:30 AM<br>
          尊敬的游客，您好!你有一笔预支付超额必须在当天上午9:00前在前台结算，
          如果您有任何疑问，请与我们联系，酒店内拨号“124“咨询。<br>
          祝您游玩愉快!  `,
        },
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
.kuang {
  width: 100%;
  height: 195px;
  margin-top: 20px;
  text-align: left;
  font-size: 14px;
}
.xiaoxi {
  width: 375px;
  height: 40px;
  margin: 0 auto;
  color: #1c222a;
}
.xiangqing {
  box-sizing: border-box;
  padding-top: 20px;
  width: 375px;
  height: 150px;
  margin: 0 auto;
  color: #999999;
  line-height: 22px;
}
</style>








import { Toast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => Toast('返回');
    return {
      onClickLeft,
    };
  },
};