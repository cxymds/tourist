<template>
    <div>
        <div class="head_box">
            <a href="" class="left_box"><van-icon name="arrow-left" />返回</a>
            <span>设置昵称</span>
            <a href="" class="right_box">完成</a>
        </div>
        <van-cell-group>
            <van-field v-model="value" label="昵称" placeholder="请输入用户名" />
        </van-cell-group>
        <span class="length">长度在{{}}/18字符</span>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
<style>
body{
    background-color: #f9f9f9;
}
.head_box{
    width: 100%;
    height: 2.5em;
    background-color: #fff;
    position: relative;
}
.head_box>.left_box{
    text-align: left;
    display: inline-block;
    line-height: 2.5em;
    width: 20%;
    /* margin-left: 0; */
    position: absolute;
    left: 1em;
    color: #000;
    font-size: 17px;

}
.head_box>span{
    line-height: 2.5em;
    font-size: 17px;
    font-weight: 600;
    color: #000;
}
.head_box>.right_box{
    text-align: right;
    display: inline-block;
    line-height: 2.5em;
    width: 20%;
    /* margin-left: 0; */
    position: absolute;
    right: 1em;
    color: #000;
    font-size: 17px;
}
.van-cell-group{
    width: 100%;
    height: 3em;
    margin-top: 1em;    
    background-color: #fff;
}
.length{
    font-size: 14px;
    color: #C6C9CC;
    text-align: right;
    display: block;
    margin-top: 1em;
    padding-right: 1em;
}
</style>