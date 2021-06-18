<template>
    <div>
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
            <div class="sousuo" @click="sousuo">
            <div class="sousuo_search">
                <van-search v-model="value" placeholder="咖选服务 TOP" />
            </div>      
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
   data() {
    return {
      list: [
        {
          li: "美食",
        },
        {
          li: "娱乐",
        },
        {
          li: "运动",
        },
        {
          li: "休闲",
        },
        {
          li: "酒店",
        },
        {
          li: "公共",
        },
        {
          li: "其他",
        },
      ],
    }
    }
}
</script>
<style>
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
  width: 99%;
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
</style>