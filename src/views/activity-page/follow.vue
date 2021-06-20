<template>
  <div>
    <div class="head_box">
      <div class="left_box">2020/12/30</div>
      <div class="right_box" @click="requan">全部活动</div>
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
      <div class=boxall v-for="item in lists" :key="item.id" @click="tab">
        <div class="boxone"><img :src="item.active_img" alt=""></div>
        <div class="boxtwo">
          <div class="boxtwo1">{{item.name}}</div>
          <div class="boxtwo2">{{item.start_time}}至{{item.end_time}}</div>
          <div class="boxtwo3">{{item.position}}</div>
        </div>
      </div>
    </div>
  </div>
  <tapbar></tapbar>
</template>
<script>
import menu from "@/components/Nav.vue";

export default {
  methods:{
    requan(){
       this.$router.push('/activity');
    },
    tab(){
       this.$router.push('/acxiangqing');
    }

  },
  beforeCreate(){
        var that = this;
        const usertoken = window.localStorage.getItem("token")
        console.log(usertoken)
        this.axios({
            method:'get',
            url:'/api/active/follow',
            headers:{
                'Authorization':usertoken
            }
        }).then((res)=>{
            console.log(res.data.data)
            that.lists=res.data.data;
        }).catch((err)=>{
            console.log(err)
        })
  },
  name: "cc",
  components: {
    tapbar: menu,
  },
  data(){
    return{
      lists:[]
    }

  }
}
</script>
<style lang="less">
.boxall{
  margin-top: 10px;
}
.boxall>div{
  line-height: 34px;
}

.beg_box .boxall .boxtwo{
  display: flex;
  flex-direction: column;
  div{
    width: 100%;
    height: 33%;
    // background-color: cadetblue;
    margin: 2px 0;
  }

}
.beg_box .boxall .boxone>img{
  width: 100%;
  height: 100%;

}

.beg_box .boxall .boxtwo{
  flex-grow: 2;
}
.beg_box .boxall>div{
  width: 135px;
  // background-color: burlywood;
  height: 100%;
  margin: 0 2px;
}

.beg_box .boxall{
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  // background-color: blueviolet;
}
bady{
  height: 100%;
}
.head_box{
  width: 100%;
  height: 2.5em;
  // background-color: aqua; 
  display: flex;
}
.head_box .left_box{
  width: 50%;
  height: 100%;
  // background-color:bisque ;
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
  // background-color: chartreuse ;
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
  // background-color: coral;
}
.beg_box{
  width: 100%;
  height: 50em;
}
</style>