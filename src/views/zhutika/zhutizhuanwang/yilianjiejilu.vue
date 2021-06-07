<template>
  <div>
    <van-nav-bar
      title="已连接记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 记录 -->
    <div class="jilu" v-for="item in list" :key="item.id">
      <div class="jilu_l">
        <div class="jilu_lianjie">
          {{ item.zhuangtai_y }} {{ item.riqi }} {{ item.shijian }}
        </div>
        <div class="jilu_duankai">
          {{ item.zhuangtai_n }} {{ item.riqi }} {{ item.shijian }}
        </div>
      </div>
      <div class="jilu_r">{{ item.yongliang }}MB</div>
    </div>
  </div>
</template>

<style scoped>
.jilu {
  width: 100%;
  height: 103px;
  display: flex;
}
.jilu_l,
.jilu_r {
  height: 60%;
  margin-top: 20px;
}
.jilu_l {
  margin-left: 10px;
  width: 60%;
}
.jilu_r {
  width: 40%;
  line-height: 70px;
  font-weight: 700;
  font-size: 18px;
}

.jilu_lianjie,
.jilu_duankai {
  width: 100%;
  height: 50%;
}
.jilu_duankai {
  color: #999;
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
          zhuangtai_y: "连接",
          zhuangtai_n: "断开",
          riqi: "2020/12/30",
          shijian: "12:00:00",
          yongliang: "796.30",
        },
        {
          zhuangtai_y: "连接",
          zhuangtai_n: "断开",
          riqi: "2020/12/30",
          shijian: "12:00:00",
          yongliang: "50.12",
        },
        {
          zhuangtai_y: "连接",
          zhuangtai_n: "断开",
          riqi: "2020/12/30",
          shijian: "12:00:00",
          yongliang: "16.83",
        },
        {
          zhuangtai_y: "连接",
          zhuangtai_n: "断开",
          riqi: "2020/12/30",
          shijian: "12:00:00",
          yongliang: "219.92",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>