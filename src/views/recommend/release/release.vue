<template>
    <div>
        <div class="head">
            <span class="return"><a href="/recommend"><van-icon name="arrow-left" />返回</a></span>
            <span class="head_text">精彩放送</span>
        </div>
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
            <div class="box_text">
                <div class="box_x"  v-for="item in list" :key="item.id">
                   <div class="left_box">
                       <img :src="item.active_img"/>
                    </div>
                   <div class="right_box">
                        <div class="rightone">{{item.name}}</div>
                        <div class="righttwo">{{item.position}}</div>
                        <div class="rightthree">{{item.end_time}}</div>
                    </div> 
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from 'vant';
export default {
    data(){
        return{
            list:[]
        }
    },
  beforeCreate(){
    var that = this;
    const usertoken = window.localStorage.getItem("token")
    console.log(usertoken)
    this.axios({
        method:'get',
        url:'/api/active',
        headers:{
            'Authorization':usertoken
        }
    }).then((res)=>{
        console.log(res.data.data)
        that.list=res.data.data;
    }).catch((err)=>{
        console.log(err)
    })
  },
  setup() {
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };
    return {
      state,
      onRefresh,
    };
  },
};
</script>
<style lang="less">
.box_text .box_x .right_box{
    display: flex;
    width: 240px;
    height: 100%;
    flex-direction: column;
    div{
        width: 100%;
        height: 33%;
        padding-left: 10px;
        background-color: blueviolet;
        margin: 2px 0px;
    }
}
.head{
    width: 100%;
    height: 2.5em; 
    background-color: aquamarine;
    position: relative;
}
.head .head_text{
    font-size: 17px;
    line-height: 2.5em;
    font-weight: 600;
}
.head .return{
    position: absolute;
    left: 5%;
    top: 20%;
}
.head .return a{
    font-size: 17px;
    color: #000;
}
.head .return a:visited{
    color: #000;
}
.box_text{
    width: 100%; 
    height: 25em;
    background-color: aqua;  
}
.box_text .box_x{
    width: 100%;
    height: 7em;
    padding: 1em 0;
    display: flex;
    background-color: bisque;
}
.box_text .box_x .left_box{
    width: 132px;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>