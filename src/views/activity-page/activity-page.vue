<template>
  <div class="box-outer">
    <!--外围盒子-->
    <div class="inbox">
      <van-nav-bar
        left-text="2020/12/30"
        right-text="我的关注"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      /><!--顶部框-->
      <div class="header">
        <div class="calendar">
          <!--日历-->
          <van-calendar
            :show-title="false"
            :show-subtitle="false"
            :poppable="false"
            v-model="show"
            color="orange"
            type="range"
            :formatter="formatter"
            :show-confirm="false"
            :style="{ height: '130px' }"
          />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="list_block">
        <!--第一块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>
      <div class="list_block">
        <!--第二块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>
      <div class="list_block">
        <!--第三块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>
      <div class="list_block">
        <!--第四块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>
      <div class="list_block">
        <!--第五块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>
      <div class="list_block">
        <!--第六块早餐-->
        <div class="icon">
          <img
            class="facestar"
            src="http://xmage.club/Fuy3hOLX4W1VvBN_BoBUmdXo0NTJ"
          />
          <img
            class="obversestar"
            src="http://xmage.club/Ftp0g05jUY0qFGaLOISfaz__kP7C"
          />
        </div>
        <img
          src="http://xmage.club/Fq8l1hv5DY0oPWlYMHEb8JJK8Ogz"
          alt="温情早餐"
        />
        <div class="title">温情早餐</div>
        <div class="words">7：30-至9：00开放</div>
        <div class="little_title">美食区</div>
      </div>








    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped>
div.box-outer {
  width: 100%;
  height: 100%;
}
@media screen and(min-device-width:300px) and (max-device-width: 800px) {
}
.inbox {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.inbox .header {
  width: 100%;
  height: 100%;
  background-color: blue;
}
.inbox .header .calender {
  flex: 1;
}
div.box-outer .content {
  width: 100%;
  height: 100%;
  background-color: gray;
  position: relative;
}
.content .list_block {
  position: relative;
  top: 177px;
  width: 100%;
  height: 130px;
  background-color: white;
}
.content .list_block .icon > img {
  width: 20xp;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 90%;
}
.content .list_block img {
  position: absolute;
  top: 20px;
  left: 10px;
}
.content .list_block .title {
  position: absolute;
  top: 25px;
  left: 45%;
}
.content .list_block .words {
  position: absolute;
  top: 70px;
  left: 45%;
}
.content .list_block .little_title {
  position: absolute;
  top: 100px;
  left: 45%;
}
</style>
<script>
// let face=document.querySelector('.facestar');
// let obverse=document.querySelector('.obversestar');

import { Toast } from "vant";
export default {
  methods: {
    methods: {
      onClickLeft() {
        Toast("返回");
      },
      onClickRight() {
        Toast("按钮");
      },
    },
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 6) {
        if (date === 1) {
          day.topInfo = "儿童节";
        } else if (date === 3) {
          day.text = "今天";
        } else if (date === 5) {
          day.text = "新";
        } else if (date === 6) {
          day.text = "活动";
        }
      }

      if (day.type === "start") {
        day.bottomInfo = "活动";
      } else if (day.type === "end") {
        day.bottomInfo = "活动";
      }

      return day;
    },
  },
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
};
</script>
