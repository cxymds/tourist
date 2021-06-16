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

    <van-list
      v-model:loading="state.loading"
      :finished="state.finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in state.list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<style scoped>
/* 热门搜索 */
.remen {
  box-sizing: border-box;
  width: 375px;
  border: 1px solid #000;
  padding-left: 15px;
  text-align: left;
  margin-top: 40px;
  color: #999999;
  font-weight: 600;
}

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
</style>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 40) {
          state.finished = true;
        }
      }, 1000);
    };

    return {
      state,
      onLoad,
    };
  },
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
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
  },
};
</script>