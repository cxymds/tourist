<template>
  <div>
    <!-- 视频 -->
    <div class="shiping">
      <!-- 返回 -->
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/FnB0bOwoMO3jVjMR496s-K5tsJth" alt="" />
      </div>
      <!-- 视频 -->
      <div class="shiping_v">
        <video
          src="http://pgc.qcdn.xiaodutv.com/1304060514_1481690946_20210616145012.mp4?Cache-Control%3Dmax-age-8640000%26responseExpires%3DFri%2C_24_Sep_2021_14%3A50%3A18_GMT=&xcode=2c0323801220220516e992e6e8b107a2ea28b49d15ecb3af&time=1624091623&_=1624005583848"
          controls
          autoplay
        ></video>
      </div>
    </div>
    <!-- 宣传片 -->
    <div class="xuanchuan">
      <p>主题咖乐园™宣传片</p>
      <p>喜剧·某国·2019·剧情</p>
    </div>

    <!-- 简介 -->
    <div class="jianjie">
      <p>简介</p>
      <p>导演:鹅厂</p>
      <p>
        演员: 大张伟 / 黄子韬 / 鹿晗 / 毛不易 / 宋茜 / 敖心仪 / 卞卡 / 毕少岩 /
        陈珂 / 陈倩楠 / 陈柔冰 /
      </p>
      <p>
        由腾讯视频出品的能量女团成长综艺，致力于充分展现女孩们自
        信勇敢、拼搏向上的元气能量和青春态度。节目将召集百余位学
        员，通过任务、训练、考核，让她们在五位明星教练的带领和引
        导下成长进步，最终成团。
      </p>
    </div>

    <!-- 集数 -->
    <div>
      <div class="liebiao">
        <p>集数列表</p>
        <p>共12集</p>
      </div>
      <van-grid :column-num="5" :gutter="10">
        <van-grid-item v-for="(item, index) in list" :key="index">
          {{ item.ji }}
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 专辑 -->
    <div class="liebiao liebiao_b">
      <p>系列专辑</p>
      <p>共4部</p>
    </div>
    <!-- 剧 -->
    <div class="ju">
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(it, index) in donghua" :key="index">
          <img :src="it.dhtu" alt="" />
          <div class="juming">{{ it.dhming }}</div>
          <div class="ju_jie">
            <div class="jianjie_wen">
              {{ it.dhjieshao }}
            </div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 广告 -->
    <div class="guanggao">
      <img src="http://xmage.club/FhKjvdp0hTkM1OEpZCbcsjhmAfUL" alt="" />
    </div>
  </div>
</template>



<style scoped>
/* 视频 */
.shiping {
  width: 375px;
  height: 210px;
  margin: 0 auto;
  position: relative;
}
.fanhui {
  width: 60px;
  height: 40px;
  position: absolute;
  top: 0px;
  left: 0;
  text-align: left;
  z-index: 100;
}
.fanhui > img {
  margin: 5px 0px 0px 10px;
}

.shiping_v > video {
  width: 375px;
  height: 210px;
}

/* 宣传片 */
.xuanchuan {
  padding: 0 0 0 15px;
  box-sizing: border-box;
  text-align: left;
  width: 375px;
  margin: 0 auto;
  height: 65px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.xuanchuan > p:nth-child(1) {
  font-size: 20px;
  font-weight: 600;
}
.xuanchuan > p:nth-child(2) {
  font-size: 14px;
  color: #c6c9cc;
  font-weight: 600;
  margin: -15px 0 0 0;
}

/* 简介 */
.jianjie {
  text-align: left;
  width: 340px;
  margin: 0 auto;
  color: #999999;
}
.jianjie > p:nth-child(1) {
  font-weight: 600;
  color: #1c222a;
}
.jianjie > p:nth-child(4) {
  color: #c6c9cc;
}
/* 列表 */
.liebiao {
  margin: 10px 0 0 0;
  width: 375px;
  height: 40px;
}
.liebiao > p:nth-child(1) {
  float: left;
  margin: 0 0 0 20px;
  color: #1c222a;
  font-weight: 600;
}
.liebiao > p:nth-child(2) {
  float: right;
  margin: 0 20px 0 0;
  color: #999999;
}

/* 系列列表 */
.liebiao_b {
  margin: 20px auto 0;
  /* width: 200px; */
  /* height: 50px; */
}
/* 剧 */
.ju {
  width: 375px;
  margin: 0 auto;
}

.juming {
  width: 109px;
  text-align: left;
  font-size: 16px;
  height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.ju_jie {
  width: 109px;
  text-align: left;
  font-size: 13px;
  color: #999;
  height: 40px;
  display: flex;
}

.ju_jie_wen {
  width: 93px;
  height: 100%;
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
      list: [
        {
          ji: "01",
          src: "",
        },
        {
          ji: "02",
          src: "",
        },
        {
          ji: "03",
          src: "",
        },
        {
          ji: "04",
          src: "",
        },
        {
          ji: "05",
          src: "",
        },
        {
          ji: "06",
          src: "",
        },
        {
          ji: "07",
          src: "",
        },
        {
          ji: "08",
          src: "",
        },
        {
          ji: "09",
          src: "",
        },
        {
          ji: "10",
          src: "",
        },
        {
          ji: "11",
          src: "",
        },
        {
          ji: "12",
          src: "",
        },
      ],
      donghua: [
        {
          dhtu: "http://xmage.club/FtVWICIb7WeUp5OTusPgDVyX9w1k",
          dhming: "新婚旅行飓风",
          dhjieshao: "丢失的广志",
        },
        {
          dhtu: "http://xmage.club/FgPYssxO5r8P1tj35aDik7oD2T2R",
          dhming: "梦境世界大突击",
          dhjieshao: "广志一家大突击",
        },

        {
          dhtu: "http://xmage.club/FpqlnmuS7u-Hysck5L81WaCb5sy2",
          dhming: "超时空!呼风唤雨之我的新娘",
          dhjieshao: "黄金间谍大作战",
        },
        {
          dhtu: "http://xmage.club/FqQs3hZfTYIWj5lG0xOkl8MrbPPf",
          dhming: "决一胜负!逆袭的机器人爸爸",
          dhjieshao: "逆袭的机器人爸爸",
        },
      ],
    };
  },

  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
};
</script>



