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
    background-color: aqua;
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
    background-color: aquamarine;
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
</style>