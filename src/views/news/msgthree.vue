<template>
<div class="msgthree">
    <div class="one">
        <div class="one1">
            <div class="one1a">
                <img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt="">
            </div>
            <div class="one1b">
                <span>返回</span>
            </div>
        </div>
        <div class="one2">夏日部防卫队</div>
        <div class="one3">···</div>
    </div>
    <div class="two">
        <div class="two1">
            <div class="two1a">
                <div class="two1a1">
                    <img src="http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_" alt="">
                </div>
                <div class="two1a2">
                    <span>小哥</span>
                </div>
            </div>
            <div class="two1b">
                <div class="qipao">
                    <span>干嘛呢？</span>
                </div>
            </div>
        </div>
        <div class="two2">
            
        </div>
    </div>
</div>
    
</template>
<script>
export default {


}
</script>
<style lang="less">
.one{
    width: 100%;
    height: 75px;
    background-color: slateblue;
    display: flex;
    flex-direction: row;
    div{
        width: 85px;
        height: 100%;
        background-color: springgreen;
        margin: 0 2px;
    }
    .one1{
        display: flex;
        flex-direction: row;
        div{
            width: 50px;
            height: 100%;
            background-color: tan;
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
 .two{
    width: 100%;
    background-color: tan;
    height: 600px;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 60px;
        background-color: teal;
        margin: 2px 0;
    }
    .two1{
        display: flex;
        flex-direction: row;
        div{
            width: 90px;
            height: 100%;
            margin: 0 2px;
            background-color: tomato;
        }
        .two1a{
            display: flex;
            flex-direction: row;
            div{
                width: 30px;
                height: 100%;
                background-color: turquoise;
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
                background-color: violet;
                margin-top: 13px;
                border-radius: 15px;
                span{
                    text-align: left;
                    display: block;
                    line-height: 40px;
                    text-indent: 20px;
                }
            }
        }
    }
    .two2{
        margin-top: 20px;
    }
}

</style>