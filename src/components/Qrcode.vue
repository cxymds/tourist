<template>
<div class="qrcode">
    <van-tabs v-model:active="activeName">
    <van-tab title="支付码" name="a">
        <div class="all1">
            <div class="allone">
                <div class="allonetop">支付码</div>
                <div class="allonebottom">请向商家展示该码，以便支付</div>
            </div>
            <div class="alltwo">
                <img src="http://xmage.club/FgkRIw-Ikhabwxf4vJ_Pr4v7Zffu" alt="">
            </div>
            <div class="allthree">
                刷新
            </div>
        </div>
    </van-tab>
    <van-tab title="交友码" name="b">
        <div class="all2">
            <div class="allone">
                <div class="allonetop">小马哥</div>
                <div class="allonebottom">扫一扫二维码，添加更多好友</div>
            </div>
            <div class="alltwo">
                <img src="http://xmage.club/FgkRIw-Ikhabwxf4vJ_Pr4v7Zffu" alt="">
            </div>
            <div class="allthree">
                刷新
            </div>
        </div>
    </van-tab>
    <van-tab title="门票码" name="c">
        <div class="all3">
            <div class="allone">
                <div class="allonetop">门票码</div>
                <div class="allonebottom">请在入园或工作人员要求时展示该码</div>
            </div>
            <div class="alltwo">
                <div class="alltwotop">
                    <img src="http://xmage.club/FiKYLQbNjk61eqx47Xn-V-EM5i8K" alt="">
                </div>
                <div class="alltwobottom">
                    <img src="http://xmage.club/FgsQlkgHg2PVtnuQNEwzb6qRwRPG" alt="">
                </div>
            </div>
            <div class="allthree">
                刷新
            </div>
        </div>
    </van-tab>
</van-tabs>
</div>
</template>

<script>
import { ref } from 'vue';
export default {
name: 'QRrcode',
props: {

},
  setup() {
    const activeName = ref('a');
    return { activeName };
  }
};
</script>

<style lang="less">
.all2,
.all1{
    width: 100%;
    margin-top: 30px;
    height: 450px;
    // background-color: blueviolet;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 90px;
        // background-color: brown;
        margin: 2px 0;
    }
    .allone{
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        div{
            width: 100%;
            height: 50%;
            margin: 2px 0;
            // background-color:rosybrown;
        }
        .allonetop{
            font-size: 20px;
            line-height: 110px;
            font-weight: bold;
        }
        .allonebottom{
            line-height: 50px;
            font-size: 14px;
            color: rgb(175, 175, 175);
        }
    }
    .alltwo{
        flex-grow: 2;
        img{
            width: 160px;
            height: 160px;
            padding-top: 5px;
        }
    }
    .allthree{
        color:rgb(255, 208, 0);
        font-weight: bold;
        line-height: 60px;
    }
}
.all3{
    width: 100%;
    height: 450px;
    margin-top: 30px;
    // background-color: blueviolet;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 90px;
        // background-color: brown;
        margin: 2px 0;
    }
    .allone{
        flex-grow: 2;
        display: flex;
        flex-direction: column;
        div{
            width: 100%;
            height: 50%;
            margin: 2px 0;
            // background-color:rosybrown;
        }
        .allonetop{
            font-size: 20px;
            line-height: 110px;
            font-weight: bold;
        }
        .allonebottom{
            line-height: 50px;
            font-size: 14px;
            color: rgb(175, 175, 175);
        }
    }
    .alltwo{
        flex-grow: 2;
        flex-direction: column;
        display: flex;
        div{
            width: 100%;
            height: 60px;
            // background-color: gold;
            margin: 2px 0;
        }
        .alltwotop{
            flex-grow: 2;
            img{
                width: 100px;
                height: 104px;
            }
        }
        .alltwobottom{
            img{
                padding-top: 5px;
                
            }
        }
    }
    .allthree{
        color: rgb(255, 208, 0);
        font-weight: bold;
        line-height: 60px;
    }
}
</style>