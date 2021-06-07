<template>
  <div>
    <van-nav-bar
      title="购买记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 记录 -->
    <div class="mingcheng" v-for="item in list" :key="item.id">
      <div class="mingcheng_l">
        <div class="mingcheng_liuliang">
          {{ item.mingcheng_liuliang }}
        </div>
        <div class="mingcheng_riqi">
          {{ item.mingcheng_riqi }}
        </div>
      </div>
      <div class="jilu_r">
        <div class="zhifu">
          <div class="zhifu_qian">￥{{ item.zhifu_qian }}</div>
          <div class="zhifu_zhuangtai">{{ item.zhifu_zhuangtai }}</div>
        </div>
        <div class="zhifu_tiaozhuan">
          <img src="http://xmage.club/FnCoMe5uHwYgFG9nbb8dthUfNF2c" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mingcheng {
  width: 100%;
  height: 103px;
  display: flex;
  font-size: 18px;
  text-align: left;
}
.mingcheng_l,
.jilu_r {
  height: 60%;
  margin-top: 20px;
}
.mingcheng_l {
  margin-left: 10px;
  width: 60%;
}
.jilu_r {
  width: 40%;
  display: flex;
  text-align: right;
}

.mingcheng_liuliang,
.mingcheng_riqi {
  width: 100%;
  height: 50%;
}
.mingcheng_riqi {
  color: #999;
}
.zhifu {
  width: 100px;
  height: 100%;
}
.zhifu_qian {
  width: 100%;
  height: 50%;
  line-height: 32px;
  font-weight: 700;
  font-size: 18px;
}

.zhifu_zhuangtai {
  line-height: 32px;
  width: 100%;
  height: 50%;
  font-size: 14px;
  color: #ff9800;
}
.zhifu_tiaozhuan {
  margin: 23px 0 0 10px;
  width: 24px;
  height: 24px;
}
.zhifu_tiaozhuan > img {
  width: 24px;
  height: 24px;
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
  data() {
    return {
      list: [
        {
          mingcheng_liuliang: "流量包 3000MB",
          mingcheng_riqi: "2020/12/30 12:00:00",
          zhifu_qian: "88.00",
          zhifu_zhuangtai: "待支付",
        },
        {
          mingcheng_liuliang: "流量包 3000MB",
          mingcheng_riqi: "2020/12/30 12:00:00",
          zhifu_qian: "188.00",
          zhifu_zhuangtai: "已支付",
        },
        {
          mingcheng_liuliang: "流量包 3000MB",
          mingcheng_riqi: "2020/12/30 12:00:00",
          zhifu_qian: "88.00",
          zhifu_zhuangtai: "已支付",
        },
        {
          mingcheng_liuliang: "流量包 3000MB",
          mingcheng_riqi: "2020/12/30 12:00:00",
          zhifu_qian: "88.00",
          zhifu_zhuangtai: "已支付",
        },
        {
          mingcheng_liuliang: "流量包 3000MB",
          mingcheng_riqi: "2020/12/30 12:00:00",
          zhifu_qian: "88.00",
          zhifu_zhuangtai: "已支付",
        },
      ],
    };
  },
};
</script>