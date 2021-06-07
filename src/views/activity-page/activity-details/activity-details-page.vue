<template>
  <div class="outer">
    <div class="nav"><!--顶部导航-->
      <van-nav-bar
  left-text="2020/12/30"
  right-text="全部"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    </div>
    <div class="calender"><!--日历-->
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
    <div class="content"><!--内容块-->
      <div class="list_block">
        <!--第一块早餐-->
        <div class="icon" @click="sub">
            <van-icon class="facestar" name="like-o" size="40"/>
          <!-- <van-icon class="obversestar" name="like" size="40" color="red" dot badge="9"  /> -->
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
    <div class="bottom_nav"><!--底部nav-button-->
      <van-tabbar v-model="active" active-color="red">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    </div>
    

    
  </div>
</template>
<style scoped>
.outer{
  width: 100%;
  height: 100%;
}
.nav{
  width: 100%;
  height: 100%;
  flex: 1;
}
.calendar{
  height: 100%;
  width: 100%;
  display: flex;
}
/* 内容 */
.content {
  width: 100%;
  height: 100%;
  background-color: gray;
  position: relative;
  top: 10px;
}
/* 内容快 */
.content .list_block {
  position:absolute;
  top: 0px;
  width: 100%;
  height: 130px;
  background-color: white;
}
.content .list_block .icon .facestar{
  width: 20xp;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 85%;
}
.content .list_block .icon .obversestar{
  width: 20xp;
  height: 20px;
  position: absolute;
  top: 20%;
  left: 85%;
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
export default {
  data(){
    return{
      message:'',
      show:true
    }
  },
  methods:{
    sub(){
      
    }

  }
  
};
</script>
