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
  </div>
</template>


<style scoped>
/* 搜索 */
.sousuo {
  width: 375px;
  height: 55px;
  border: 1px solid #000;
  display: flex;
}
.sousuo_search {
  width: 280px;
}
.fenlie {
  width: 48px;
  height: 32px;
  margin-top: 10px;
  display: flex;
  font-size: 12px;
  border: 1px solid #000;
}
.kanguo {
  width: 48px;
  height: 32px;
  border: 1px solid #000;
  margin-top: 10px;
  display: flex;
  font-size: 12px;
}

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