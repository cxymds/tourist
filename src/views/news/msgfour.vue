<template>
<div class="msgfour">
    <div class="fourzero">
       <div class="one1" @click="tab">
            <div class="one1a">
                <img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt="">
            </div>
            <div class="one1b">
                <span>返回</span>
            </div>
        </div>
        <div class="one2">群组信息</div>
    </div>
    <div class="fourone" >
        <div class="touxiang" v-for="item in headgather" :key="item.id">
            <img :src="item.head" alt="">
        </div>
    </div>
    <div class="fourtwo">
        <div class="fourtwoleft">群组人员</div>
        <div class="fourtworight">12人</div>
    </div>
    <div class="fourthree">
        <div class="fourtwoleft">群组名称</div>
        <div class="fourtworight">夏日部防卫队</div>
    </div>
    <div class="fourfour">
        <div class="fourtwoleft">群二维码</div>
        <div class="fourtworight">
            <img src="http://xmage.club/FqrvA1bemg2CR0XqroPE-iD3RilP" alt="">
        </div>
    </div>
    <div class="fourfif">
        <div class="fourtwoleft">消息免打扰</div>
        <div class="fourtworight">
            <van-switch v-model="checked"  class="kai"/>
        </div>
    </div>
    <div class="foursix">
        退出群组
    </div>
</div>
</template>
<script>
    import { ref } from 'vue';
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
    data(){
        return{
            headgather:[
                {
                    head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                },{
                     head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_'
                }
            ]
        }
    },
    methods:{
        tab(){
           this.$router.push('/talk');
        }
    }
}
</script>
<style lang="less">
.msgfour{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
}
.msgfour div{
    width: 100%;
    height: 60px;
    margin: 1px 0;
}
.msgfour .fourzero{
    width: 100%;
    height: 73px;
    // background-color: slateblue;
    display: flex;
    flex-direction: row;
    div{
        width: 85px;
        height: 100%;
        // background-color: springgreen;
        margin: 0 2px;
    }
    .one1{
        display: flex;
        flex-direction: row;
        div{
            width: 50px;
            height: 100%;
            // background-color: tan;
        }
        .one1a>img{
            padding-top: 16px;
        }
        .one1b>span{
            padding-top: 18px;
            display: block;
            font-weight: bold;
        }
    }
    .one2{
        flex-grow: 2;
        font-weight: bold;
        font-size: 18px;
        margin-right: 55px;
        line-height: 62px;
    }
}
.msgfour .fourone{
    flex-grow: 2;
}
.msgfour .fourone .touxiang{
    width: 50px;
    height: 50px;
    background-color: bisque;
    margin: 0 5px;
    display: inline-block;
    border-radius: 50%;
}
.msgfour .fourone .touxiang img{
    width: 100%;
    height: 100%;
}
.msgfour .fourtwo{
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgb(238, 238, 238);
    box-shadow: 10px 10px 15px rgb(238, 238, 238);
    box-sizing: border-box;
}
.msgfour .fourtwo div{
    margin: 0 10px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    line-height: 55px;
}
.msgfour .fourtwo .fourtwoleft{
    text-align: left;
}
.msgfour .fourtwo .fourtworight{
    text-align:right;
    color: rgb(126, 126, 126);
}
.msgfour .fourthree{
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(238, 238, 238);
}
.msgfour .fourthree div{
    margin: 0 10px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    line-height: 55px;
}
.msgfour .fourthree .fourtwoleft{
    text-align: left;
}
.msgfour .fourthree .fourtworight{
    text-align:right;
    color: rgb(126, 126, 126);
}
.msgfour .fourfour{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(238, 238, 238);
    box-sizing: border-box;
}
.msgfour .fourfour div{
    margin: 0 10px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    line-height: 55px;
}
.msgfour .fourfour .fourtwoleft{
    text-align: left;
}
.msgfour .fourfour .fourtworight{
    text-align:right;
    padding-top: 11px;
}
.msgfour .fourfour .fourtworight img{
    width: 35px;
    height: 35px;
}
.msgfour .fourfif{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(238, 238, 238);
    box-sizing: border-box;
}
.msgfour .fourfif div{
    margin: 0 10px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    line-height: 55px;
}
.msgfour .fourfif .fourtwoleft{
    text-align: left;
}
.msgfour .fourfif .fourtworight{
    padding-top: 11px;
    text-align: right;
}
.msgfour .fourfif .fourtworight .kai{
    width: 55px;
    height: 30px;
}
.msgfour .foursix{
    color: red;
    line-height: 55px;
    border-bottom: 1px solid rgb(238, 238, 238);
    box-sizing: border-box;
    font-weight: bold;
}


</style>
