<template>
  <div>
    <!-- 背景 -->
    <div class="biejing">
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/FnB0bOwoMO3jVjMR496s-K5tsJth" alt="" />
      </div>
      <img src="http://xmage.club/Fimmfbc2iElqO9B4KFlU37epK_9f" alt="" />
    </div>
    <!-- 咖档案 -->
    <div class="kadangan">
      <div class="kadangan_wen">咖档案</div>
      <div class="kadangan_yuanqu">园区资料</div>
      <div class="yuanqu_ziliao">
        <div class="vgi_a" v-for="(item, index) in list" :key="index">
          <div class="a_img"><img :src="item.img" alt="" /></div>
          <div class="a_wen">
            <p>{{ item.pa }}</p>
            <p>{{ item.pb }}</p>
          </div>
        </div>
      </div>
      <!-- 园区简介 -->
      <div class="yuanqu_jianjie">园区简介</div>
      <div class="jianjie_wen">
        <p>
          欢迎您来到主题乐园，参加美食街活动。主题乐园拥有1832m2大型室内游玩场所。
        </p>
        <p>
          ★主题咖乐园融参与性、观赏性、娱乐性、趣味性于一
          体，绝对的网红打卡圣地★致力打造成为中国最新、最具个
          性魅力的主题乐园，是主题咖度假区的重要组成部分。它根
          据天然优美的海岸线，自然天成的山水，巧妙地将多种精彩
          刺激的高科技游乐设备与地中海风格建筑相融合，形成了热
          情奔放的幸运大道区、惊险刺激的冒险丛林区、神秘诡异的
          海盗城堡区、梦幻童话的美人鱼湖区、激情四溢的神秘岛区
          和碧海银滩的加勒比海岸区等六大主题区域，多种高科技游
          乐项目，带你飞跃翻腾。
        </p>
        <p>
          主题咖拥有亚洲第一的”E型战车”;中国第一座"疯狂逃
          生船”、”云霄飞车”、”垂直极限”等高科技的大型游乐设施，
          配合多项中小型游乐项目和近10种充满异国风情的表演，让
          游客在互动中享受刺激与欢乐。
        </p>
      </div>

      <!-- 园区大事记 -->
      <div class="yuanqu_jianjie">园区大事记</div>
      <div class="dashiji">
        <div class="dashiji_nian">
          <div><p>1990年</p></div>
          <div><p>1993年</p></div>
          <div><p>2000年</p></div>
          <div><p>2008年</p></div>
          <div><p>2020年</p></div>
        </div>
        <div class="dashiji_svg">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="690">
            <line
              x1="24.5"
              y1="30"
              x2="24.5"
              y2="585"
              style="stroke: #1667d2; stroke-width: 2"
            />
            <circle cx="25" cy="30" r="10" fill="#1667D2" />
            <circle cx="25" cy="170" r="10" fill="#1667D2" />
            <circle cx="25" cy="305" r="10" fill="#1667D2" />
            <circle cx="25" cy="445" r="10" fill="#1667D2" />
            <circle cx="25" cy="585" r="10" fill="#1667D2" />
          </svg>
        </div>
        <div class="dashiji_wen">
          <div>
            <p>主题咖项目成立</p>
            <p>
              由7位创始人经过共同推敲，主题咖项目于90年成立，
              项目选址于:广东省广州市白云区X-XXXCX
            </p>
          </div>
          <div>
            <p>开园盛典</p>
            <p>
              历时3年的工程建造，主题咖乐园正式面向群众开放，首日入园游客突破1400人
            </p>
          </div>
          <div>
            <p>千禧年大改造</p>
            <p>
              长达7年的服务，为了迎接新世纪，主题咖于千禧年提出改造工程，届时将打造娱乐与景色一体的主题产业
            </p>
          </div>

          <div>
            <p>动漫咖</p>
            <p>
              青年群体已成常态，为了迎合更大的市场及口味，主题咖与动漫业巨头长达2年的交涉，于
              08年加造动漫主题咖
            </p>
          </div>
          <div>
            <p>至今</p>
            <p>截止2020年，主题咖已成为业界标杆，美好 瞬间只与你一同分享</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 背景 */
.biejing {
  width: 375px;
  margin: 0 auto;
  position: relative;
}
.fanhui {
  width: 60px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 0;
  text-align: left;
}
.fanhui > img {
  margin: 5px 0px 0px 10px;
}
/* 咖档案 */
.kadangan {
  position: relative;
  top: -18px;
  background-color: #fff;
  width: 100%;
  height: 400px;
  border-radius: 20px;
}
.kadangan_wen {
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  line-height: 50px;
}
.kadangan_yuanqu {
  width: 340px;
  margin: 0 auto;
  border-top: 1px solid rgb(240, 240, 240);
  line-height: 50px;
  height: 45px;
  font-weight: 600;
  text-align: left;
}
.yuanqu_ziliao {
  width: 375px;
  height: 130px;
  margin: 0 auto;
}
.vgi_a {
  width: 170px;
  height: 50px;
  margin: 10px 0 0 15px;
  display: flex;
  float: left;
  background-color: rgb(249, 249, 249);
}
.a_img {
  width: 50px;
  height: 50px;
}
.a_img > img {
  margin: 5px 0 0 0;
}
.a_wen {
  width: 120px;
  height: 50px;
  text-align: left;
  margin-left: 10px;
}
.a_wen > p {
  margin: 3px 0 0 0;
  line-height: 20px;
}
.a_wen > p:nth-child(1) {
  color: #999999;
}

/* 园区简介 */
.yuanqu_jianjie {
  width: 340px;
  margin: 0 auto;
  line-height: 50px;
  height: 50px;
  font-weight: 600;
  text-align: left;
}
.jianjie_wen {
  width: 340px;
  margin: 0 auto;
  text-align: left;
  line-height: 30px;
  text-indent: 32px;
}

/* 大事记 */
.dashiji {
  width: 340px;
  margin: 0 auto;
  display: flex;
  text-align: left;
  padding-bottom: 30px;
}
.dashiji_nian {
  width: 80px;
  font-size: 18px;
}
.dashiji_nian > div,
.dashiji_wen > div {
  height: 120px;
}
.dashiji_wen {
  width: 250px;
}
.dashiji_wen > div > p:nth-child(1) {
  color: #1667d2;
  font-size: 18px;
}
.dashiji_wen > div > p:nth-child(2) {
  color: #9e9e9e;
}

.dashiji_svg {
  width: 50px;
  height: 690px;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: "http://xmage.club/Fte4OiOuZd9vH_TJL5OuMtLVl9x8",
          pa: "园区面积",
          pb: "126823m²",
        },
        {
          img: "http://xmage.club/FoVvbJsUhq1zpxUgdgGigrYafCRQ",
          pa: "最大游客量",
          pb: "6800人",
        },
        {
          img: "http://xmage.club/FnNxNC-a0kyTbtISHGasLOAp285v",
          pa: "娱乐项目",
          pb: "289个",
        },
        {
          img: "http://xmage.club/FnWi3rnt2E2rZcU5Kxd9qoGFmS20",
          pa: "特色景点",
          pb: "132个",
        },
      ],
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
};
</script>