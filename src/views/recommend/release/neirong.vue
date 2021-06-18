<template>
  <div>
    <img
      class="bgimg"
      src="http://xmage.club/FmeQvYX9im5jhoHkc-VLxi0lpY5b"
      alt=""
    />
    <div class="rehui" @click="rehui">
        <img src="http://xmage.club/FsrsCvaPEcwU2vUNv-qHjXEPxoLV" alt="" />
    </div>
    <div class="delicious">
      <h3>美食街活动</h3>
      <div class="introduce">
        <div class="article1">
          欢迎您来到主题乐园，参加美食街活动。主题乐园拥有1832m<sup>2</sup>大型室内游玩场所。
        </div>
        <br />
        <div class="article2">
          <van-icon
            name="star"
            color="orange"
          />主题咖乐园融参与性、观赏性、娱乐性、趣味性于-本，绝对的网红打卡圣地<van-icon
            name="star"
            color="orange"
          />致力打造成为中国最新、最具个性魅力的主题乐园,是主题咖度假区的重要组成部分。它根据天然优美的海岸线,自然天成的山水,巧妙地将多种精彩剌激的高科技游乐设备与地中海风格建筑相融合，形成了热情奔放的幸运大道区、惊险刺激的冒险丛林区、神秘诡异的海盗城堡区、梦幻童话的美人鱼湖区、激情四溢的神秘岛区和碧海银滩的加勒比海岸区等六大主题区域，多种高科技游乐项目，带你飞跃翻腾。
        </div>
        <br />
        <div class="article3">
          主题咖拥有亚洲第一的E型战车";中国第一座”疯狂逃生船”、”云霄飞车”、“垂直极限”等高科技的大型游乐设施,配合多项中小型游乐项目和近10种充满异国风情的表演，让游客在互动中享受刺激与欢乐。
        </div>
      </div>
    </div>
    <div class="button">
      <!--按钮-->
      <router-link target="_self" :to="{ path: '/acfollow' }">
        <van-button class="btn" round type="primary" color="orange"
          ><van-icon name="plus" color="red" />关注活动</van-button
        >
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        rehui(){
            this.$router.push('/acfollow');
        }
    }
}
</script>
<style scoped>
.introduce{
}
.rehui img{
    width: 35px;
    height: 35px;
    padding-top: 7px;
    padding-right: 10px;
}
.rehui{
    width: 50px;
    height: 50px;
    position:absolute;
    top: 10px;
    left: 0;
}
.bgimg {
  width: 100%;
}
.delicious {
  background-color: white;
  width: 100%;
  border-top: 1px solid gray;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  height: 700px;
  position: relative;
  top: -15px;
  z-index: 2;
}
.time {
  position: absolute;
  left: 5%;
}
.time span {
  margin-left: 100px;
}
.location {
  position: absolute;
  left: 5%;
  top: 90px;
}
.location span {
  margin-left: 130px;
}
h4 {
  position: absolute;
  top: 120px;
  left: 3%;
}
.introduce {
  width: 100%;
  position: absolute;
  top: 60px;
  text-indent: 2em;
  text-align: left;
  line-height: 23px;
  font-size: 14px;
}
.introduce .article2 {
  text-indent: 10px;
}
.button {
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
  z-index: 3;
  bottom: 0px;
}
.button .btn {
  margin-top: 10px;
}
</style>