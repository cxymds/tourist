<template>
    <div>
        <div class="head">
            <span class="return"><a href="http://localhost:8080/recommend"><van-icon name="arrow-left" />返回</a></span>
            <span class="head_text">精彩放送</span>
        </div>
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
            <div class="box_text">
                <div class="box_x">
                   <div class="left_box">
                       <van-image  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                    </div>
                   <div class="right_box"></div> 
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from 'vant';

export default {
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
<style>
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
}
</style>