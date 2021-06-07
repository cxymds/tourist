<template>
  <div class="box-outer">
    <!--外围盒子-->
    <div class="inbox">
      <div class="topnav">
        <van-nav-bar
          left-text="2020/12/30"
          right-text="我的关注"
          
          @click-left="onClickLeft"
          @click-right="onClickRight"
        /><!--顶部框-->
      </div>

      <div class="header">
        <div class="calender">
          <!--日历-->
          <van-calendar
            v-model="show"
            color="orange"
            type="range"
            :show-title="false"
            :poppable="false"
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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
          <van-icon class="facestar" name="like-o" size="40" />
          <van-icon class="obversestar" name="like" size="40" color="red" />
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

    <tapbar></tapbar>
  </div>
</template>
<style scoped>
/* @media screen and(min-device-width:0px) and (max-device-width: 279px){
  .box-outer{
    display: none;
  }
} */

div.box-outer {
  width: 100%;
  height: 100%;
}
.inbox {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 99;
}
.inbox .header {
  position: relative;
  top: -40px;
  width: 100%;
  height: 100%;
}
.inbox .header .calender {
  flex: 1;
}
div.box-outer .content {
  width: 100%;
  height: 920px;
  background-color: gray;
  position: relative;
  top: -41px;
}
.content .list_block {
  position: relative;
  top: 177px;
  width: 100%;
  height: 130px;
  background-color: white;
}
.content .list_block .icon .facestar {
  /* 添加关注 */
  width: 20xp;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 80%;
}
.content .list_block .icon .obversestar {
  /* 取消关注 */
  width: 20xp;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 80%;
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
import menu from "@/components/Nav.vue";

import { Toast } from "vant";
export default {
  name: "cc",
  components: {
    tapbar: menu,
  },
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
