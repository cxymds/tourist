<template>
  <div>
    <van-nav-bar
      title="分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <!-- 导航栏 -->
    <div class="nav">
      <div class="nav_wenzi">
        <van-tabs
          v-model:active="active"
          line-height="0"
          swipeable
          title-active-color="blue"
        >
          <van-tab v-for="item in list" :title="item.li" :key="item.id">
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <div class="nav">
      <div class="nav_wenzi">
        <van-tabs
          v-model:active="active"
          line-height="0"
          swipeable
          title-active-color="blue"
        >
          <van-tab v-for="item in list" :title="item.qu" :key="item.id">
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 剧 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in jinqi" :key="index">
        <img :src="item.jutu" alt="" />
        <div class="juming">{{ item.juming }}</div>
        <div class="jianjie">{{ item.jujieshao }}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>





<style scoped>
/* 导航栏 */
.nav {
  width: 375px;
  height: 44px;
  display: flex;
}
.nav_wenzi {
  width: 375px;
  height: 44px;
}
.nav_guan {
  width: 32px;
  height: 44px;
  /* margin-left: 25px; */
}
.nav_guan > img {
  margin-top: 10px;
}

/* 剧 */
.juming {
  width: 109px;
  text-align: left;
  font-size: 18px;
  height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.jianjie {
  width: 109px;
  text-align: left;
  font-size: 14px;
  color: #999;
  height: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          li: "全部",
          qu: "全部",
        },
        {
          li: "剧情",
          qu: "内地",
        },
        {
          li: "喜剧",
          qu: "中国香港",
        },
        {
          li: "爱情",
          qu: "美国",
        },
        {
          li: "悬疑",
          qu: "欧洲",
        },
        {
          li: "动作",
          qu: "日本",
        },
        {
          li: "科幻",
          qu: "印度",
        },
        {
          li: "冒险",
          qu: "韩国",
        },
      ],

      jinqi: [
        {
          jutu: "http://xmage.club/FtnoRvnqEUJ-zCHx6zTaYnF2ZWus",
          juming: "绀青之拳",
          jujieshao: "蓝宝石之“绀请之泉”",
        },
        {
          jutu: "http://xmage.club/FpI2NDXKYSpl7iU-VIID8SBtdx9m",
          juming: "零的执行人",
          jujieshao: "大规模的恐怖袭击",
        },
        {
          jutu: "http://xmage.club/FsIaf80bgYX3OgZbRQT3n3e7GcF8",
          juming: "唐红的恋歌",
          jujieshao: "”早月杯”百人一首",
        },
        {
          jutu: "http://xmage.club/FnOXctRSRD0oOo7fiVj3iDoR_F-X",
          juming: "纯黑的噩梦",
          jujieshao: "黑暗组织的杀戮",
        },
        {
          jutu: "http://xmage.club/Fmb0HoFpPzDzU7aqP5mkJ5cqijHo",
          juming: "业火的向日葵",
          jujieshao: "被烧毁的梵高名画",
        },
        {
          jutu: "http://xmage.club/FsclhbaPJ6Uq9W26c9z2QjtM2VpJ",
          juming: "异次元的狙击手",
          jujieshao: "谜团”海豹突击队”",
        },

        {
          jutu: "http://xmage.club/FtVWICIb7WeUp5OTusPgDVyX9w1k",
          juming: "新婚旅行飓风",
          jujieshao: "丢失的广志",
        },
        {
          jutu: "http://xmage.club/FgPYssxO5r8P1tj35aDik7oD2T2R",
          juming: "梦境世界大突击",
          jujieshao: "广志一家大突击",
        },
        {
          jutu: "http://xmage.club/FpqlnmuS7u-Hysck5L81WaCb5sy2",
          juming: "超时空!呼风唤雨之我的新娘",
          jujieshao: "黄金间谍大作战",
        },
        {
          jutu: "http://xmage.club/FqQs3hZfTYIWj5lG0xOkl8MrbPPf",
          juming: "决一胜负!逆袭的机器人爸爸",
          jujieshao: "逆袭的机器人爸爸",
        },
        {
          jutu: "http://xmage.club/Fs-eIzn3piY0B81fv54f_SpwaXbO",
          juming: "呐喊!春日部野生王国",
          jujieshao: "春日部野生王国",
        },
        {
          jutu: "http://xmage.club/FpGRE9hzZbIFyri5fnLcfAWTpXt-",
          juming: "呼风唤雨!金矛之勇者",
          jujieshao: "金矛之勇者",
        },
      ],
    };
  },
  setup() {
    const onClickLeft = () => Toast("返回");
    return {
      onClickLeft,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>