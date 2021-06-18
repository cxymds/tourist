<template>
  <div>
    <div class="head_box">
      <div class="left_box">2020/12/30</div>
      <a href="" class="right_box">我的关注</a>
    </div>
    <div class="week">
      <div class="week_box">
        <span class="top_box">一</span>
        <span class="buttom_box">30</span>
      </div>
      <div class="week_box">
        <span class="top_box">二</span>
        <span class="buttom_box">31</span>
      </div>
      <div class="week_box">
        <span class="top_box">三</span>
        <span class="buttom_box">1</span>
      </div>
      <div class="week_box">
        <span class="top_box">四</span>
        <span class="buttom_box">2</span>
      </div>
      <div class="week_box">
        <span class="top_box">五</span>
        <span class="buttom_box">3</span>
      </div>
      <div class="week_box">
        <span class="top_box">六</span>
        <span class="buttom_box">4</span>
      </div>
      <div class="week_box">
        <span class="top_box">日</span>
        <span class="buttom_box">5</span>
      </div>
    </div>
    <div class="beg_box">




    </div>
  </div>
  <tapbar></tapbar>
</template>
<script>
import menu from "@/components/Nav.vue";

export default {
  name: "cc",
  components: {
    tapbar: menu,
  },
}
</script>
<style>
bady{
  height: 100%;
}
.head_box{
  width: 100%;
  height: 2.5em;
  background-color: aqua; 
  display: flex;
}
.head_box .left_box{
  width: 50%;
  height: 100%;
  background-color:bisque ;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 1em;
  line-height: 2em;

}
.head_box .right_box{
  width: 50%;
  height: 100%;
  font-size: 17px;
  text-align: right;
  padding-right: 1em;
  line-height: 2.5em;
  color: #000;
}
.week{
  width: 100%;
  display: flex;
  background-color: chartreuse ;
}
.week .week_box{
  width: 13%;
  margin: 0 1%;
}
.week .week_box span{
  width: 100%;
  display: block;
}
.week .week_box .buttom_box{
  height: 3.5em;
  line-height: 3.5em;
  border-radius: 10px;
  background-color: coral;
}
.beg_box{
  width: 100%;
  height: 50em;
}
</style>