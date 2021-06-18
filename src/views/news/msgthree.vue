<template>
<div class="msgthree">
    <div class="onee">
        <div class="one1" @click="tab">
            <div class="one1a">
                <img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt="">
            </div>
            <div class="one1b">
                <span>返回</span>
            </div>
        </div>
        <div class="one2">夏日部防卫队</div>
        <div class="one3" @click="info">···</div>
    </div>
    <div class="twoo">
        <div class="two1" v-for="item in left" :key="item.id">
            <div class="two1a">
                <div class="two1a1">
                    <img :src="item.head" alt="">
                </div>
                <div class="two1a2">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="two1b">
                <div class="qipao">
                    <span>{{item.msg}}</span>
                </div>
            </div>
        </div>
        <div class="two2" v-for="item in right" :key="item.id">
            <div class="two2a">
                <div class="qipao">
                    <span>{{item.msg}}</span>
                </div>
            </div>
            <div class="two2b">
                <div class="two2b1"><span>{{item.name}}</span></div>
                <div class="two2b2"><img :src="item.head" alt=""></div>
            </div>
        </div>
    </div>
    <div class="threee">
        <input type="text" value="" >
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            msg:{
                chang:''
            },
            left:[
                {
                    head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                    name:'小爱',
                    msg:'今晚有活动？'
                }
            ],
            right:[
                {
                    head:'http://xmage.club/FuytW-b6aKl5xG7-nE6Uz0DKelJU',
                    name:'小叶',
                    msg:'好的，马上准备'
                }
            ]
        }
    },
    methods:{
        tab(){
           this.$router.push('/news');
        },
        info(){
           this.$router.push('/groupinfo');
        }
    }
}
</script>
<style lang="less">
.msgthree{
    height: 100vh;
}
.threee{
    width: 100%;
    height: 60px;
    // background-color: rgb(28, 126, 218);
    position: fixed;
    bottom: 0;
}
.threee input{
    width: 350px;
    height: 45px;
    border: 2px solid rgb(0, 183, 255);
    margin-top: 5px;
    border-radius: 15px;
    text-indent: 1rem;
}
.onee{
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
        line-height: 65px;
    }
    .one3{
        font-weight: bold;
        font-size: 25px;
        line-height: 65px;
    }
}
 .twoo{
    width: 100%;
    background-color: rgb(246, 246, 246);
    height: 100vh;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 60px;
        // background-color: teal;
        margin: 2px 0;
    }
    .two1{
        display: flex;
        flex-direction: row;
        div{
            width: 90px;
            height: 100%;
            margin: 0 2px;
            // background-color: tomato;
        }
        .two1a{
            display: flex;
            flex-direction: row;
            div{
                width: 30px;
                height: 100%;
                // background-color: turquoise;
                margin: 0 1px;
            }
            .two1a1{
                flex-grow: 2;
                img{
                    width: 100%;
                    height: 100%;
                }
                
            }
            .two1a2{
                span{
                    font-size: 14px;
                    color: rgb(131, 131, 131);
                    display: block;
                    padding-top: 5px;
                }
            }
        }
        .two1b{
            flex-grow: 2;
            .qipao{
                width: 100%;
                height: 70%;
                background-color: rgb(0, 183, 255);
                margin-top: 13px;
                border-radius: 15px;
                span{
                    text-align: left;
                    display: block;
                    line-height: 42px;
                    text-indent: 20px;
                }
            }
        }
    }
    .two2{
        margin-top: 20px;
        // background-color: aqua;
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
    }
}
.twoo .two2>div{
    width: 90px;
    height: 100%;
    // background-color: bisque;
    margin: 0 2px;

}
.twoo .two2 .two2a{
    flex-grow: 2;
    .qipao{
        width: 100%;
        height: 70%;
        background-color: rgb(0, 183, 255);
        margin-top: 13px;
        border-radius: 15px;
        span{
            text-align: right;
            display: block;
            line-height: 42px;
            padding-right: 20px;
        }
    }
}
.twoo .two2 .two2b{
    display: flex;
    flex-direction: row;
    div{
        width: 30px;
        height: 100%;
        // background-color: turquoise;
        margin: 0 1px;
    }
    .two2b2{
        flex-grow: 2;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .two2b1{
        span{
            font-size: 14px;
            color: rgb(131, 131, 131);
            display: block;
            padding-top: 5px;
        }
    }

}

</style>