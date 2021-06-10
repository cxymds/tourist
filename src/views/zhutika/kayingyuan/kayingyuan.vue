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
      <div class="nav_guan">
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
          src="http://xmage.club/Fofc_P4V9fodzd5lnDm-tj5XxrAQ"
          alt=""
      /></van-swipe-item>
    </van-swipe>

    <!-- 绿色条 -->
    <div class="lutiao">
      <img src="http://xmage.club/FoMEtRLDFR-1HpXeaZoH1QTIFDNY" alt="" />
    </div>

    <!-- 近期热播 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <img src="http://xmage.club/FtnoRvnqEUJ-zCHx6zTaYnF2ZWus" alt="" />
        <div class="juming">绀青之拳</div>
        <div class="jianjie">蓝宝石之“绀请之泉”</div>
      </van-grid-item>
      <van-grid-item>
        <img src="http://xmage.club/FpI2NDXKYSpl7iU-VIID8SBtdx9m" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="http://xmage.club/FsIaf80bgYX3OgZbRQT3n3e7GcF8" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="http://xmage.club/FnOXctRSRD0oOo7fiVj3iDoR_F-X" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="http://xmage.club/Fmb0HoFpPzDzU7aqP5mkJ5cqijHo" alt="" />
      </van-grid-item>
      <van-grid-item>
        <img src="http://xmage.club/FsclhbaPJ6Uq9W26c9z2QjtM2VpJ" alt="" />
      </van-grid-item>
    </van-grid>
  </div>
</template>





<style scoped>
/* 近期热播 */
.juming {
  width: 109px;
  text-align: left;
  font-size: 18px;
}
.jianjie {
  width: 109px;
  text-align: left;
  font-size: 14px;
  color: #999;
}

/* 绿色条 */
.lutiao {
  width: 345px;
  height: 100px;
  margin: -15px auto 0;
}

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
  width: 100%;
  height: 100%;
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
    };
  },
};
</script>