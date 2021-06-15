<template>
  <div>
    <!-- 搜索 -->
    <div class="sousuo">
      <div class="fanhui" @click="fanhui">
        <img src="http://xmage.club/FpbUdJxL5jRErzyBtbaWnq7xIjkT" alt="" />
      </div>
      <van-search
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
  </div>
</template>

<style scoped>
/* 搜索 */
.sousuo {
  display: flex;
  height: 34px;
  width: 375px;
  margin-top: 20px;
}
.fanhui {
  width: 50px;
  height: 34px;
  border: 1px solid #000;
}
.sousuo_anniu {
  background-color: #ff9800;
  color: #fff;
  font-weight: 600;
  width: 60px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>

<script>
export default {};
</script>