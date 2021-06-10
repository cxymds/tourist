<template>
    <div>
        <div class="nav_box">
            <span class="left_box">个人中心</span>
            <span class="right_box">
                <a href=""><van-image src="http://xmage.club/FgBK96IDl5yTiXd4DRMNsLtEVwsv" /></a>
            </span>
        </div>
        <div class="information">
            <div class="in_box">
                <div class="top_box">
                    <a href="" class="inform_box">
                        <div class="left_img"><van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
                        <div class="text">
                            <span class="text_top">我叫新之助</span>
                            <span class="text_buttom">vip2</span>
                        </div>
                        <div class="in_text">个人信息 ></div>
                    </a>
                </div>
                <div class="buttom_box">
                    <a href="" class="currency">
                        <span class="number">123</span>
                        <span class="state">主题币</span>
                    </a>
                    <a href="" class="loan">
                        <span class="number">123</span>
                        <span class="state">咖先用</span>
                    </a>
                    <a href="" class="integral">
                        <span class="number">123</span>
                        <span class="state">咖积分</span>
                    </a>
                    <a href="" class="pocket">
                        <span class="number"><van-image src="http://xmage.club/FoAhNPE9h7MDip-6uKjVSxxq5hGF" /></span>
                        <span class="state">进入口袋</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="order">
            <div class="my_order">
                <span class="my_box_left">我的订单</span>
                <span class="my_box_right">
                    <a href="">所有订单 ></a>
                </span>
            </div>
            <div class="order_box">
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/FpiS39EroGlddSryzq8xVi-HHuIm"></van-image>
                    </span>
                    <span class="order_buttom"></span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/FkrKoJzYQCWP3ZbnZLOOA93OQ-_C"></van-image>
                    </span>
                    <span class="order_buttom"></span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/Fm5RhUYzCJ0iEO84EfyFUNOLd8gp"></van-image>
                    </span>
                    <span class="order_buttom"></span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/Fj8ocS9JJ6PtmEDRuxf8BIQ1Cv8l"></van-image>
                    </span>
                    <span class="order_buttom"></span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.nav_box{
    width: 100%;
    height: 4em;
    /* background-color:aqua; */
    background-image: url("http://xmage.club/FvN1FZOl4IuaOaJEQUC7YJSjOsbd");
    display: flex;
    position: sticky;
    top: 0;
    z-index: 999;
    overflow: hidden;
    /* background-position:  0 -1em; */
}
.nav_box span{
    width: 50%;
    height: 100%;
}
.nav_box .left_box{
    line-height: 3.5em;
    padding-left: 1em ;
    text-align: left;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
}
.nav_box .right_box{
    line-height: 5.5em;
    text-align: right;
    padding-right: 1em;
}
.information{
    width: 100%;
    height: 12.188em;
    background-color: aqua;
    background-image: url("http://xmage.club/FvN1FZOl4IuaOaJEQUC7YJSjOsbd");
    /* background-position:  0 11em; */
}
.information .in_box{
    width: 100%;
    height: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #fff;
    z-index: 222;
}
.information .in_box div{
    width: 90%;
    height: 50%;
    margin: 0 auto;
    /* background-color: aqua; */
}
.information .in_box .top_box{
    /* background-color: bisque; */
    border-bottom:1px solid #000 ;

}
.information .in_box .top_box .inform_box{
    display: flex;
    width: 100%;
    height: 100%;
    color: #000;
}
.information .in_box .top_box .inform_box div{
    height: 100%;
}
.information .in_box .top_box .inform_box .left_img .van-image{
    /* border-radius: 50%; */
    padding: 0.5em 0;
}
.information .in_box .top_box .inform_box .text span{
    width: 100%;
    display: block;
    /* line-height: 6.444em; */
    /* margin-top: 10%; */
    text-align: left;
}
.information .in_box .top_box .inform_box .text .text_top{
    margin-top: 25%;
    font-size: 17px;
    font-weight: 600;
}
.information .in_box .top_box .inform_box .text .text_buttom{
    width: 50%;
    background-color: #FFD502;
    border-radius: 40px;
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    margin-top: 5%;
}
.information .in_box .top_box .inform_box .in_text{
    line-height: 8em;
    text-align: right;
    font-size: 12px;
    color:#999 ;
}
.information .in_box .buttom_box{
    display: flex;
}
.information .in_box .buttom_box a{
    display: block;
    width: 24%;
    height: 50%;
    margin: 8% 0;
    padding: 0 0.5%;
    border-right: 1px solid #F5F5F5;
    /* background-color: aqua; */
    font-size: 13px;
    color:#C6C9CC ;
}
.information .in_box .buttom_box a span{
    width: 100%;
    display: block;
    height: 50%;
    line-height: 1.5em;
}
.information .in_box .buttom_box a .number{
    color: #1667D2;
    font-size: 17px;
    font-weight: 600;
}
.information .in_box .buttom_box .pocket{
    border:0 ;
    text-align: center;
} 
.information .in_box .buttom_box .pocket .number{
    width: 25%;
    text-align: center;
    margin: 0 auto;
}
.order{
    width: 100%;
    height: 9.94em;
    background-color: aqua;
}
.order .my_order{
    width: 90%;
    height: 30%;
    background-color: bisque;
    margin: 0 auto;
    line-height: 3em;
    display: flex;
}
.order .my_order span{
    width: 50%;
}
.order .my_order .my_box_left{
    text-align: left;
    font-size: 17px;
    font-weight: 600;
}
.order .my_order .my_box_right{
    text-align: right;
    font-size: 14px;
    /* color: #000;
     */
}
.order .my_order .my_box_right a{
    color: #3D4655;
}
.order .order_box{
    width: 90%;
    height: 70%;
    background-color: chartreuse;
    margin: 0 auto;
    display: flex;
}
.order .order_box .orders_box{
    width: 24%;
    height: 60%;
    display: block;
    margin: 7% 1%;
    background-color: chocolate;
    color: #666;
    font-size: 13px;
}
.order .order_box .orders_box .order_top{
    width: 60%;
    display: block;
    margin:  0 auto;
}
</style>