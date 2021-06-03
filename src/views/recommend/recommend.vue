<template>
  <div>
     <div class="top_recom">
          <div class="text_left">
          <span class="text_top">主题咖乐园</span>
          <sup class="top-right">TM</sup>
      </div>
      <div class="text_right">
        <a href="" class="text_marvellous">
            <span class="cir"></span>
            <div>精彩放送</div> 
        </a>
      </div>
     </div>
       <div class="Carousel">
            <van-swipe class="my-swipe" :autoplay="3000" lazy-render >
                <van-swipe-item v-for="image in images" :key="image">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="in_nav">
           <a href="" class="in_box">
               <van-image  src="http://xmage.club/FivkLfogb_bqAra5aeinoXFCxuZe" />
               <span>美食</span>
            </a>
           <a href="" class="in_box">
               <van-image  src="http://xmage.club/FuHwcaewcZxL8dMIxCIhQ7fLaqV4" />
               <span>娱乐</span>
            </a>
           <a href="" class="in_box">
               <van-image  src="http://xmage.club/Fp7OkqJKrwSjOLPcPdvbrjfcomth" />
               <span>运动</span>
            </a>
           <a href="" class="in_box">
               <van-image  src="http://xmage.club/Fk65uBO0Fvj_gw8HfY-GPPnWjhTn" />
               <span>休闲</span>
            </a>
           <a href="" class="in_box">
               <van-image  src="http://xmage.club/FpmfdRO4J2gs4ljjiV3iGD_iW6Ns" />
               <span>会员码</span>
            </a>
        </div>
        <div class="recom">
            <span>咖咖推荐</span><a href="">咖咖助手 ></a>
        </div>
        <div class="recom_sw">
            <van-swipe :loop="false" :width="230" :show-indicators="false">
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FqQyDUVZwDA7O5srVJeYLOeFKoR9" />
                    <div class="sw_bottom">
                        <span class="text_top">主题专网</span>
                        <span class="text_bottom">网络流畅，不用担心消息延迟啦！</span>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FuyTK05CYl6oGTWifW0-WipxURae" />
                    <div class="sw_bottom">
                        <span class="text_top">咖影院</span>
                        <span class="text_bottom">超清主题电影，只愿与你一同分享！</span>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FjItCGsWm2Gvzcdkk2qtwJoEqH7v" />
                    <div class="sw_bottom">
                        <span class="text_top">幸运咖</span>
                        <span class="text_bottom">每日抽奖送好礼，主题日限时开放！</span>
                    </div>
                </van-swipe-item>
                <!-- <van-swipe-item></van-swipe-item> -->
            </van-swipe>
        </div>
        <div class="recom">
            <span>打咖圣地</span><a href="">更多 ></a>
        </div>
        <div class="recom_sw2" >
            <van-swipe :loop="false" :width="170"  :show-indicators="false">
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FiET1abGmQgWnLLsvUH01QlPCmPL" />
                    <div class="sw_bottom">
                        <span class="text_top">极速过山车</span>
                        <span class="text_bottom">尖叫时刻，瞬间冲刺的感官快感给你无与伦比的刺激...</span>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FquzLqUCh8cQSJuPb7hW7qJps--1" />
                    <div class="sw_bottom">
                        <span class="text_top">摩天轮</span>
                        <span class="text_bottom">超大摩天轮，在小小的空间体验温文浪漫的至高一刻...</span>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FnmllFB2CFsCAiaGH32MvCQH3TpQ" />
                    <div class="sw_bottom">
                        <span class="text_top">旋转木马</span>
                        <span class="text_bottom">慢慢悠悠的童年小快乐，回忆12岁的那.时间静止的快...</span>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <van-image  src="http://xmage.club/FsfyMg4MA793xr71774byY5JgrLh" />
                    <div class="sw_bottom">
                        <span class="text_top">气球乐园</span>
                        <span class="text_bottom">五彩缤纷的飞扬，是气球天堂的绝美时刻,放飞自我...</span>
                    </div>
                </van-swipe-item>
                <!-- <van-swipe-item></van-swipe-item> -->
            </van-swipe>
        </div>
  </div>
 
</template>
<script>
export default {
     setup() {
    const images = [
      'http://xmage.club/FoQaFZ3jRHNdkJlqSmfBPV4QZq98',
      'http://xmage.club/FtH_OhKVvbsLwnr-CRaDdMyysxlp',
      'http://xmage.club/FsK-urgJDgIGkudo3tc2CrE6B6PG',
    ];
    return { images };
  },
}
</script>
<style>
.top_recom{
    /* background-color: aqua; */
    width: 100%;
    height: auot;
    display: flex;
}
.top_recom .text_left{
    /* font-size: 20px; */
    padding: 2% 10% 2% 0;
    width: 50%;    
}
.top_recom .text_left .text_top{
    font-size: 20px;
}
.top_recom .text_left .top_right{
    font-size: 2px;
}
.top_recom .text_right{
    width: 50%;
    /* height: 100%; */
}
.top_recom .text_right .text_marvellous{
    display: block;
    width: auto;
    height: 100%;
    padding: 5% 0 5% 25%;
    box-sizing: border-box;
    /* line-height: 20px; */
    text-decoration: none;
    color: #000;
}
.top_recom .text_right .text_marvellous div{
    display: inline-block;
    font-size: 17px;
}
.top_recom .text_right .text_marvellous .cir{
    width: 10px;
    height: 10px; 
    display: inline-block;
    background-color:rgb(21, 226, 65);
    border-radius: 50%;
    margin: 2% 5%;
}
.Carousel{
    width: 100%;
    height:13em;
    margin: 1em 0;
}
.Carousel .my-swipe{
    width: 100%;
    height: 100%;
}
.Carousel .my-swipe .van-swipe-item {
    width: 100%;
    /* height: 30%;  */
}
.Carousel .my-swipe .van-swipe-item img{
    width: 100%;
    height: 100%;
}
.in_nav{
    width: 100%;
    height: 5em;
    margin: 1em 0;
    /* background-color: aquamarine; */
    display: flex;
}
.in_nav .in_box{
    width: 18%;
    height: 100%;
    /* background-color: bisque; */
    margin: 0 1%;
    display: block;
    text-decoration: none;
    color: #000;
}
.in_nav .in_box .van-image{
    width: 2em;
    height: 2em;
    padding: 15%;
}
.in_nav .in_box span{
    font-size: 13px;
    text-align: center;
    display: block;
    width: 100%;
}
.recom{
    width: 100%;
    /* background-color: blanchedalmond; */
    display:flex;
    margin-bottom: 5%;
}
.recom span{
    display: block;
    width: 50%;
    font-size: 17px;
    padding: 1% 25% 1% 0;
    box-sizing: border-box;
    font-weight: 600;
}
.recom a{
    display: block;
    width: 50%;
    font-size: 14px;
    padding: 2% 0 2% 25%;
    box-sizing: border-box;
    color: #3D4655;
    font-weight: 500;
}
.recom_sw{
    height: 10.8em;
    /* background-color: blanchedalmond; */
}

.recom_sw .van-swipe{
    height: 100%;
    width: auto;
    /* background-color: brown; */
}
.recom_sw .van-swipe .van-swipe-item{
    /* margin: 0 1px; */
    padding: 0 0.5%;
    box-sizing: border-box;
    /* background-color: cadetblue; */
}
.recom_sw .van-swipe .van-swipe-item .van-image{
    width: 95%;
    height: 70%;
    margin: 0 auto;
}
.recom_sw .van-swipe .van-swipe-item .sw_bottom{
    width: 95%;
    height: 28%;
    margin: 0 auto;
    /* background-color:chartreuse; */
    text-align: left;
}
.recom_sw .van-swipe .van-swipe-item .sw_bottom span{
    display: block;
}
.recom_sw .van-swipe .van-swipe-item .sw_bottom .text_top{
    width: 50%;
    font-size: 14px;
    color: #3D4655;
}
.recom_sw .van-swipe .van-swipe-item .sw_bottom .text_bottom{
    font-size: 13px;
    color: #999;
}
.recom_sw2{
    height: 12.5em;
    /* background-color: blanchedalmond; */
}

.recom_sw2 .van-swipe{
    height: 100%;
    width: auto;
    /* background-color: brown; */
}
.recom_sw2 .van-swipe .van-swipe-item{
    /* margin: 0 1px; */
    padding: 0 1px;
    box-sizing: border-box;
    /* background-color: cadetblue; */
}
.recom_sw2 .van-swipe .van-swipe-item .van-image{
    width: 94%;
    height: 60%;
    margin: 0 auto;
}
.recom_sw2 .van-swipe .van-swipe-item .sw_bottom{
    width: 95%;
    height: 28%;
    margin: 0 auto;
    /* background-color:chartreuse; */
    text-align: left;
}
.recom_sw2 .van-swipe .van-swipe-item .sw_bottom span{
    display: block;
}
.recom_sw2 .van-swipe .van-swipe-item .sw_bottom .text_top{
    width: 50%;
    font-size: 14px;
    color: #3D4655;
}
.recom_sw2 .van-swipe .van-swipe-item .sw_bottom .text_bottom{
    font-size: 13px;
    color: #999;
}
</style>