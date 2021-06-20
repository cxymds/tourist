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
                    <a href="/info" class="inform_box">
                        <div class="left_img"><van-image round width="5rem" height="5rem" src="http://xmage.club/FrWxwkhyVn2tiAFR2HTRKvPw_KWT" /></div>
                        <div class="text">
                            <span class="text_top">蜡笔小新</span>
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
            <div class="my_order" @click="order">
                <span class="my_box_left">我的订单</span>
                <span class="my_box_right" >
                    所有订单 >
                </span>
            </div>
            <div class="order_box">
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/FpiS39EroGlddSryzq8xVi-HHuIm"></van-image>
                    </span>
                    <span class="order_buttom">美食订单</span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/FkrKoJzYQCWP3ZbnZLOOA93OQ-_C"></van-image>
                    </span>
                    <span class="order_buttom">游玩订单</span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/Fm5RhUYzCJ0iEO84EfyFUNOLd8gp"></van-image>
                    </span>
                    <span class="order_buttom">购物订单</span>
                </a>
                <a href="" class="orders_box">
                    <span class="order_top">
                        <van-image src="http://xmage.club/Fj8ocS9JJ6PtmEDRuxf8BIQ1Cv8l"></van-image>
                    </span>
                    <span class="order_buttom">咖助理</span>
                </a>
            </div>
        </div>
        <div class="service">
            <div class="service_box">
                <div class="rai_box">服务权益</div>
                <a href="" class="mana_box">
                    <span class="top_box">
                        <van-image src="http://xmage.club/FqHPWOPxCBKBOp_RKsmUTZX8TjZu" />
                        <span>我的预约</span>
                    </span>
                    <span class="buttom_box">
                        <van-icon  badge="9" />
                        <van-icon name="arrow" />
                    </span>
                </a>
                <a href="" class="Grade_box">
                    <span class="top_box">
                        <van-image src="http://xmage.club/Fsglh1nI20a61GlU-BV7i2PEsczk" />
                        <span>会员等级</span>
                    </span>
                    <span class="buttom_box">
                        <span class="van-locn">等级权利6项</span>
                        <van-icon name="arrow" />
                    </span>
                </a>
            </div>
            <div class="others_box service_box">
                 <div class="rai_box">其他</div>
                <a href="" class="mana_box">
                    <span class="top_box">
                        <van-image src="http://xmage.club/FgamQ26zVjin_pEqDizEOkT9pnhX" />
                        <span>设置中心</span>
                    </span>
                    <span class="buttom_box">
                        <!-- <van-icon  badge="9" /> -->
                        <van-icon class="dong" name="arrow" />
                    </span>
                </a>
                <a href="" class="Grade_box">
                    <span class="top_box">
                        <van-image src="http://xmage.club/FhjLcCjv0TZGRakQTZWgTV9xFhCf" />
                        <span>主题问卷</span>
                    </span>
                    <span class="buttom_box">
                        <span class="van-locn">等级权利6项</span>
                        <van-icon name="arrow" />
                    </span>
                </a>
            </div>
        </div>
    </div>
      <tapbar></tapbar>
</template>
<script>
import menu from '@/components/Nav.vue'
export default {
    methods:{
        order(){
            this.$router.push('/myorder');
        }
    },
    name: 'cc',
    components:{
    tapbar:menu
  }
}
</script>
<style>
body{
    background-color: #f9f9f9;
}
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
    background-color: #fff;
    margin-top: 1em;
}
.order .my_order{
    width: 90%;
    height: 30%;
    /* background-color: bisque; */
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
    /* background-color: chartreuse; */
    margin: 0 auto;
    display: flex;
}
.order .order_box .orders_box{
    width: 24%;
    height: 60%;
    display: block;
    margin: 7% 1%;
    /* background-color: chocolate; */
    color: #666;
    font-size: 13px;
}
.order .order_box .orders_box .order_top{
    width: 60%;
    display: block;
    margin:  0 auto;
}
.order .order_box .orders_box .order_buttom{
    margin-top:10% ;
    display: block;

}
.service{
    width: 100%;   
    height: auto;
    margin-top: 1em;
    background-color: #fff;

}
.service .service_box{
    width: 100%;
    height: 12em;
}
.service .service_box>div{
    width: 90%;
    height: 4em; 
    margin:  0 auto; 
    display: flex;  
}
.service .service_box a{
    display: block;
    display: flex;
     width: 90%;
    height: 4em; 
    margin:  0 auto;
    color:#1C222A ;
}
.service .service_box .rai_box{
    font-size: 17px;
    font-weight: 600;
    line-height: 4em;
    text-align: left;
}
.service .service_box a span{
    width: 50%;
    height: 3em;
    /* background-color: #FFD502; */
    display: block;
    display: flex;
    line-height: 3em;
}
.service .service_box a .top_box .van-image{
    width: 2em;
    height: 2em;
    /* text-align: left; */
    margin: 0.5em 0.5em 0.5em 0;
}
.service .service_box a .buttom_box>.van-icon-undefined{
    text-align: right;
    width: 100%;
    /* line-height: 4em; */
}
.service .service_box a .buttom_box>.van-icon-undefined>div{
    margin-top: 2em;
    /* margin-right: 2em; */
    width: 2em;
    height: 2em;
    text-align: center;
    line-height: 2em;
}
.service .service_box a .buttom_box>.van-icon{
    /* margin-top: 2em; */
    line-height: 3em;
    margin-right: 1em;
    /* font-size: 14px; */
    text-align: right;
}
.service .service_box a .buttom_box>.dong{
    width: 100%;
}

.service .service_box a .buttom_box>span{
    font-size: 14px;
    text-align: right;
    width:100% ;
    display: block;
    line-height: 3.5em;
}

</style>