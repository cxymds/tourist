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
router-link-active{
color: green;   
}
a{
  color:black;
}
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
  methods:{
    gain(){
      this.axios.get('/api/active',{params:{mobile:this.user.phone}}).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },  
  name: "cc",
  components: {
    tapbar: menu,
  },
  methods: {
    methods: {
      onClickLeft() {
       
       console.log(111111)
      },
      onClickRight() {
        Toast("按钮");
      },
    },
    onClickRight:function(){
      this.$router.replace('/activity-details')
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
