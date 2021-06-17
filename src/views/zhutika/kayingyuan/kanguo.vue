<template>
  <div>
    <van-nav-bar
      title="看过"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 近七日-->
    <div class="rebo">近七日</div>
    <!-- 剧 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in jinqi" :key="index">
        <img :src="item.jutu" alt="" />
        <div class="juming">{{ item.juming }}</div>
        <div class="jianjie">
          <div class="jianjie_img">
            <img src="http://xmage.club/FpbUdJxL5jRErzyBtbaWnq7xIjkT" alt="" />
          </div>
          <div class="jianjie_wen">
            {{ item.jujieshao }}
          </div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- 更早观看 -->
    <div class="rebo">更早观看</div>

    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(it, index) in donghua" :key="index">
        <img :src="it.dhtu" alt="" />
        <div class="juming">{{ it.dhming }}</div>
        <div class="jianjie">
          <div class="jianjie_img">
            <img src="http://xmage.club/FpbUdJxL5jRErzyBtbaWnq7xIjkT" alt="" />
          </div>
          <div class="jianjie_wen">
            {{ it.dhjieshao }}
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<style scoped>
/* 近期热播 */
.rebo {
  width: 340px;
  margin: 0 auto;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}

/* 剧 */
.juming {
  width: 109px;
  text-align: left;
  font-size: 18px;
  height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.jianjie {
  width: 109px;
  text-align: left;
  font-size: 14px;
  color: #999;
  height: 40px;
  display: flex;
}
.jianjie_img {
  width: 16px;
  height: 16px;
  margin: 2.5px 3px 0 0;
}
.jianjie_wen {
  width: 93px;
  height: 100%;
}
/* 查看所有影片 */
.suoyou {
  width: 90%;
  height: 44px;
  font-size: 18px;
  line-height: 44px;
  margin: 0 auto 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  color: #616798;
}
/* 广告 */
.guanggao {
  margin: 0 0 20px 0;
}
</style>

<script>
export default {
  data() {
    return {
      setup() {
        const onClickLeft = () => Toast("返回");
        return {
          onClickLeft,
        };
      },
      leixing: [
        {
          mingcheng: "近期热播",
        },
        {
          mingcheng: "主题动画",
        },
      ],

      jinqi: [
        {
          jutu: "http://xmage.club/FtVWICIb7WeUp5OTusPgDVyX9w1k",
          juming: "新婚旅行飓风",
          jujieshao: "观看至11%",
        },
      ],
      donghua: [
        {
          dhtu: "http://xmage.club/FgPYssxO5r8P1tj35aDik7oD2T2R",
          dhming: "梦境世界大突击",
          dhjieshao: "观看至99%",
        },
        {
          dhtu: "http://xmage.club/Fs-eIzn3piY0B81fv54f_SpwaXbO",
          dhming: "呐喊!春日部野生王国",
          dhjieshao: "观看至02%",
        },
        {
          dhtu: "http://xmage.club/FpqlnmuS7u-Hysck5L81WaCb5sy2",
          dhming: "超时空!呼风唤雨之我的新娘",
          dhjieshao: "观看至98%",
        },
        {
          dhtu: "http://xmage.club/FqQs3hZfTYIWj5lG0xOkl8MrbPPf",
          dhming: "决一胜负!逆袭的机器人爸爸",
          dhjieshao: "观看至100%",
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