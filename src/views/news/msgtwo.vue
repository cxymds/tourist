<template>
    <div class="msgtwo">
        <div class="one">
            <div class="one1" @click="tab">
                <div class="tu"><img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt=""></div>
                <div class="zi"><span>返回</span></div>
            </div>
            <div class="one2"><span>好友信息</span></div>
        </div>
        <div class="two">
            <div class="two1"><img src="http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_" alt=""></div>
            <div class="two2">小爱</div>
            <div class="two3">18232215532</div>
        </div>
        <div class="three"><span>发送消息</span></div>
        <div class="four"><span>删除好友</span></div>
    </div>
</template>
<script>
export default {
    methods:{
    tab(){
      this.$router.push('/news');
    },
  },
    setup() {
        
    },
}
</script>
<style lang="less">
.msgtwo{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 400px;
}
.msgtwo>div{
    width: 100%;
    height: 65px;
    margin: 2px 0;
}
.msgtwo .one{
    display: flex;
    flex-direction: row;
}
.msgtwo .one>div{
    margin: 0 2px;
    width: 100px;
    height: 100%;
}
.msgtwo .one .one1{
    display: flex;
    flex-direction: row;
}
.msgtwo .one .one1>div{
    margin: 0 2px;
    width: 50px;
    height: 100%;
}
.msgtwo .one .one1 .tu>img{
    padding-top: 12px;
    padding-left: 10px;
}
.msgtwo .one .one1 .zi>span{
    padding-top: 15px;
    display: block;
    font-weight: bold;
    padding-right: 13px;
}
.msgtwo .one .one2{
    margin-left: 28px;
}
.msgtwo .one .one2>span{
    flex-grow: 2;
    text-align: left;
    padding-top: 15px;
    font-weight: bold;
    display: block;
    font-size: 18px;
    padding-left: 20px;
}
.msgtwo .two{
    flex-grow: 2;
    display: flex;
    flex-direction: column;
}
.msgtwo .two>div{
    width: 100%;
    height: 42px;
    margin: 2px 0;
}
.msgtwo .two .two1{
    flex-grow: 2;
}
.msgtwo .two .two1>img{
    width: 82px;
    height: 82px;
}
.msgtwo .two .two2{
    font-size: 18px;
    font-weight: bold;
}
.msgtwo .two .two3{
    font-size: 15px;
    color: rgb(151, 151, 151);
}
.msgtwo .three{
    border-top: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    width: 370px;
    margin: 0 auto;
}
.msgtwo .four{
    border-bottom: 1px solid rgb(238, 238, 238);
    width: 370px;
    margin: 0 auto;
}
.msgtwo .three span{
    color: rgb(255, 157, 0);
    line-height: 70px;
}
.msgtwo .four span{
    line-height: 70px;
    color: rgb(54, 52, 68);
}
</style>