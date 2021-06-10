<template>
<div class="info">
    <div class="infoone">
        <div class="infoone1" @click="tab">
            <div class="tu"><img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt=""></div>
            <div class="zi"><span>返回</span></div>
        </div>
        <div class="infoone2"><span>个人信息</span></div>
    </div>
    <div class="infotwo">
        <div class="infotwoall">
            <div class="infotwoleft">
                <span>头像</span>
            </div>
            <div class="infotworight">
                <img src="http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_" alt="">
            </div>
        </div>
    </div>
    <div class="infothree" v-for="item in list" :key="item.id">
        <div class="infothreeall">
            <div class="infothreeleft">
                <span>{{item.left}}</span>
            </div>
            <div class="infothreeright">
                <span>{{item.right}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    setup() {
        
    },
    data(){
        return{
            list:[
                {
                    left:'昵称',
                    right:'请叫我大佐'
                },{
                    left:'真实姓名',
                    right:'宫本井上'
                },{
                    left:'性别',
                    right:'男'
                },{
                    left:'身份证',
                    right:'13058******66'
                },{
                    left:'手机',
                    right:'110222***'
                },{
                    left:'邮箱',
                    right:'18233**@163.com'
                }
            ]
        }
    }
}
</script>
<style lang="less">
.info{
    width: 100%;
    height: 100vh;
}
.info .infoone{
    display: flex;
    margin-bottom: 20px;
    flex-direction: row;
}
.info .infoone>div{
    margin: 0 2px;
    width: 100px;
    height: 100%;
}
.info .infoone .infoone1{
    display: flex;
    flex-direction: row;
}
.info .infoone .infoone1>div{
    margin: 0 2px;
    width: 50px;
    height: 100%;
}
.info .infoone .infoone1 .tu>img{
    padding-top: 12px;
    padding-left: 10px;
}
.info .infoone .infoone1 .zi>span{
    padding-top: 15px;
    display: block;
    font-weight: bold;
    padding-right: 13px;
}
.info .infoone .infoone2{
    margin-left: 42px;
}
.info .infoone .infoone2>span{
    flex-grow: 2;
    text-align: left;
    padding-top: 13px;
    font-weight: bold;
    display: block;
    font-size: 18px;
    padding-left: 20px;
}
.infotwo .infotwoall{
    width: 100%;
    height: 60px;
    // background-color: aqua;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    border-bottom: 1px solid rgb(235, 235, 235);
    div{
        width: 50%;
        height: 100%;
        // background-color: bisque;
        margin: 0 15px;
    }
    .infotwoleft{
        span{
            display: block;
            line-height: 50px;
            text-align: left;
            font-weight: bold;
        }
    }
    .infotworight{
        img{
            width: 50px;
            height: 50px;
            padding-left: 102px;
            padding-top: 4px;
        }
    }
}
.infothree .infothreeall{
    width: 100%;
    height: 60px;
    // background-color: aqua;
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    border-bottom: 1px solid rgb(235, 235, 235);
    div{
        width: 50%;
        height: 100%;
        // background-color: bisque;
        margin: 0 15px;
    }
    .infothreeleft{
        span{
            display: block;
            line-height: 50px;
            text-align: left;
            font-weight: bold;
        }
    }
    .infothreeright{
        span{
            display: block;
            line-height: 50px;
            text-align: right;
            font-size: 15px;
            font-weight: bold;
            color: rgb(149, 149, 149);
        }
    }
}


</style>
