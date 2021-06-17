<template>
  <div>
    <!-- 搜索 -->
    <div class="sousuo">
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/Fm1wrip0dHEH0qmdPCc4qB5DGQ9N" alt="" />
      </div>
      <van-search
        class="sousuo_sou"
        v-model="value"
        show-action
        placeholder="哆啦A梦大1电影"
        @search="onSearch"
      >
        <template #action>
          <div class="sousuo_anniu" @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>

    <!-- 历史记录 -->
    <div class="lishi">
      <div class="lishi_sousuo">
        <div class="lishi_sousuo_left">历史搜索</div>
        <div class="lishi_sousuo_right">
          <img
            class="lishi_sousuo_right_img"
            src="http://xmage.club/FvsZOwDQQ9-F1Esdsd4tnTFohBPe"
            alt=""
          />
          清除
        </div>
      </div>
      <div class="lishi_jilu">
        <van-button
          class="lishi_jilu_ming"
          size="small"
          v-for="(item, index) in lishi"
          :key="index"
          >{{ item.li }}</van-button
        >
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="remen">热门搜索</div>
    <!-- 搜索目录 -->
    <div class="mulu">
      <div class="mulu_xv mulu_a">1</div>
      <div class="mulu_wen">绀青之拳</div>
    </div>
    <div class="mulu">
      <div class="mulu_xv mulu_b">2</div>
      <div class="mulu_wen">零的执行人</div>
    </div>
    <div class="mulu">
      <div class="mulu_xv mulu_c">3</div>
      <div class="mulu_wen">唐红的恋歌</div>
    </div>
    <div class="mulu" v-for="(lu, index) in sou" :key="index">
      <div class="mulu_xv">{{ lu.num }}</div>
      <div class="mulu_wen">{{ lu.ming }}</div>
    </div>
  </div>
</template>

<style scoped>
/* 搜索 */
.sousuo {
  display: flex;
  height: 55px;
  width: 375px;
}
.fanhui {
  width: 40px;
  margin-top: 13px;
}
.sousuo_sou {
  width: 355px;
}
.sousuo_anniu {
  background-color: #ff9800;
  color: #fff;
  font-weight: 600;
  width: 60px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
/* 历史记录  */

.lishi {
  width: 375px;
  height: 100px;
}
.lishi_sousuo {
  width: 375px;
  height: 30px;
  margin-top: 5px;
}
.lishi_sousuo_left {
  margin-left: 15px;
  float: left;
  color: #999999;
}
.lishi_sousuo_right {
  margin-right: 15px;
  float: right;
  color: #c6c9cc;
}
.lishi_sousuo_right_img {
  position: relative;
  top: 2px;
  left: 0px;
}

.lishi_jilu {
  text-align: left;
}
.lishi_jilu_ming {
  padding: 5px 10px;
  margin: 5px 10px;
  background-color: rgb(240, 240, 240);
  color: #666666;
  border-radius: 8px;
}

/* 热门搜索 */
.remen {
  box-sizing: border-box;
  width: 375px;
  padding-left: 15px;
  text-align: left;
  margin-top: 40px;
  color: #999999;
  font-weight: 600;
}
/* 搜索目录 */
.mulu {
  width: 340px;
  height: 20px;
  line-height: 20px;
  margin: 20px auto 0;
  display: flex;
}
.mulu_xv {
  text-align: center;
  background-color: #f4f5fa;
  width: 20px;
  height: 20px;
  color: #616798;
  border-radius: 7px;
  font-size: 12px;
}
.mulu_a {
  background-color: #ff5a57;
  color: #fff;
}
.mulu_b {
  background-color: #ff9800;
  color: #fff;
}
.mulu_c {
  background-color: #ffd502;
  color: #fff;
}
.mulu_wen {
  text-indent: 10px;
}
</style>

<script>
import { reactive } from "vue";
export default {
  data() {
    return {
      lishi: [
        {
          li: "哆啦A梦大电影",
        },
        {
          li: "蜡笔小新",
        },
        {
          li: "名侦探柯南",
        },
        {
          li: "樱桃小丸子",
        },
      ],
      sou: [
        {
          num: "4",
          ming: "纯黑的噩梦",
        },
        {
          num: "5",
          ming: "业火的向日葵",
        },
        {
          num: "6",
          ming: "新婚旅行飓风",
        },
        {
          num: "7",
          ming: "梦境世界大突击",
        },
        {
          num: "8",
          ming: "哆啦A梦超级大电影",
        },
        {
          num: "9",
          ming: "异次元的狙击手",
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