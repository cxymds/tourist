<template>
  <div>
    <!-- 导航栏 -->
    <div class="nav">
      <div class="nav_wenzi">
        <van-tabs
          v-model:active="active"
          line-height="0"
          swipeable
          title-active-color="blue"
        >
          <van-tab v-for="item in list" :title="item.li" :key="item.id">
          </van-tab>
        </van-tabs>
      </div>
      <div class="nav_guan" @click="fanhui">
        <img src="http://xmage.club/Fr5I-055a-5YrVErGNRxqyEOP1w-" alt="" />
      </div>
    </div>
    <!-- 搜索 -->
    <div class="sousuo">
      <div class="sousuo_search">
        <van-search v-model="value" placeholder="哆啦A梦大电影[热搜]" />
      </div>
      <div class="fenlie">
        <div class="fenlie_img">
          <img src="http://xmage.club/FlQy5OTJjIS7WA1esfr2WdqVaPUd" alt="" />
        </div>
        <div class="fenlie_wenzi">分类</div>
      </div>
      <div class="kanguo">
        <div class="kanguo_img">
          <img src="http://xmage.club/FirKOTVvpZprnHkKA9mvJacS-gRC" alt="" />
        </div>
        <div class="kanguo_wenzi">看过</div>
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item
        ><img
          class="lun_img"
          src="http://xmage.club/Fofc_P4V9fodzd5lnDm-tj5XxrAQ"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="lun_img"
          src="http://xmage.club/FqdpfD9hvXpJrhgHEIZBgK1lq2q7"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="lun_img"
          src="http://xmage.club/Fk8p5x76uibm4jnMTNjgEY1ca5aP"
          alt=""
      /></van-swipe-item>
    </van-swipe>

    <!-- 绿色条 -->
    <div class="lutiao">
      <img src="http://xmage.club/FoMEtRLDFR-1HpXeaZoH1QTIFDNY" alt="" />
    </div>

    <!-- 近期热播 -->
    <div class="rebo">近期热播</div>
    <!-- 剧 -->

    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in jinqi" :key="index">
        <img :src="item.jutu" alt="" />
        <div class="juming">{{ item.juming }}</div>
        <div class="jianjie">{{ item.jujieshao }}</div>
      </van-grid-item>
    </van-grid>
    <!-- 换一批 -->
    <div class="huanyipi">
      <img src="http://xmage.club/FiQSxlMzy6Cj3wdsgepgA4v9fNyg" alt="" />
      <img src="http://xmage.club/FjVfMR0j1LZHYAAsmo8-LbZDYwrD" alt="" />
    </div>

    <!-- 主题动画 -->
    <div class="rebo">主题动画</div>

    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(it, index) in donghua" :key="index">
        <img :src="it.dhtu" alt="" />
        <div class="juming">{{ it.dhming }}</div>
        <div class="jianjie">{{ it.dhjieshao }}</div>
      </van-grid-item>
    </van-grid>

    <!-- 换一批 -->
    <div class="huanyipi">
      <img src="http://xmage.club/FiQSxlMzy6Cj3wdsgepgA4v9fNyg" alt="" />
      <img src="http://xmage.club/FjVfMR0j1LZHYAAsmo8-LbZDYwrD" alt="" />
    </div>

    <!-- 查看所有影片 -->
    <div class="suoyou">查看所有影片</div>
    <!-- 广告 -->
    <div class="guanggao">
      <img src="http://xmage.club/FhKjvdp0hTkM1OEpZCbcsjhmAfUL" alt="" />
    </div>
  </div>
</template>





<style scoped>
/* 导航栏 */
.nav {
  width: 375px;
  height: 44px;
  display: flex;
}
.nav_wenzi {
  width: 343px;
  height: 44px;
}
.nav_guan {
  width: 32px;
  height: 44px;
  /* margin-left: 25px; */
}
.nav_guan > img {
  margin-top: 10px;
}
/* 搜索 */
.sousuo {
  width: 375px;
  height: 55px;
  display: flex;
}
.sousuo_search {
  width: 255px;
}
.fenlie {
  width: 48px;
  height: 20px;
  margin: 15px 10px 0 0;
  display: flex;
  font-size: 14px;
}
.kanguo {
  width: 48px;
  height: 20px;
  margin-top: 15px;
  display: flex;
  font-size: 14px;
}
/* 轮播 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

.lun_img {
  width: 90%;
  height: 90%;
}
/* 绿色条 */
.lutiao {
  width: 345px;
  height: 100px;
  margin: 5px auto 0;
}

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
}
/* 换一批 */
.huanyipi {
  width: 62px;
  height: 20px;
  margin: 0 auto 20px;
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
      list: [
        {
          li: "精选",
        },
        {
          li: "电影",
        },
        {
          li: "动漫",
        },
        {
          li: "剧场",
        },
        {
          li: "直播",
        },
        {
          li: "攻略",
        },
        {
          li: "资讯",
        },
      ],
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
          jutu: "http://xmage.club/FtnoRvnqEUJ-zCHx6zTaYnF2ZWus",
          juming: "绀青之拳",
          jujieshao: "蓝宝石之“绀请之泉”",
        },
        {
          jutu: "http://xmage.club/FpI2NDXKYSpl7iU-VIID8SBtdx9m",
          juming: "零的执行人",
          jujieshao: "大规模的恐怖袭击",
        },
        {
          jutu: "http://xmage.club/FsIaf80bgYX3OgZbRQT3n3e7GcF8",
          juming: "唐红的恋歌",
          jujieshao: "”早月杯”百人一首",
        },
        {
          jutu: "http://xmage.club/FnOXctRSRD0oOo7fiVj3iDoR_F-X",
          juming: "纯黑的噩梦",
          jujieshao: "黑暗组织的杀戮",
        },
        {
          jutu: "http://xmage.club/Fmb0HoFpPzDzU7aqP5mkJ5cqijHo",
          juming: "业火的向日葵",
          jujieshao: "被烧毁的梵高名画",
        },
        {
          jutu: "http://xmage.club/FsclhbaPJ6Uq9W26c9z2QjtM2VpJ",
          juming: "异次元的狙击手",
          jujieshao: "谜团”海豹突击队”",
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
        {
          dhtu: "http://xmage.club/Fs-eIzn3piY0B81fv54f_SpwaXbO",
          dhming: "呐喊!春日部野生王国",
          dhjieshao: "春日部野生王国",
        },
        {
          dhtu: "http://xmage.club/FpGRE9hzZbIFyri5fnLcfAWTpXt-",
          dhming: "呼风唤雨!金矛之勇者",
          dhjieshao: "金矛之勇者",
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