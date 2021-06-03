<template>
    <div class="button_nav">
        <div class="nav">
            <van-icon name="star-o" />
            <span>推荐</span>
        </div>
        <div class="nav">
            <van-icon name="thumb-circle-o" />
            <span>活动</span>
        </div>
        <div class="nav">
            <van-icon name="medal-o" />
            <span>咖助手</span>
        </div>
        <div class="nav">
            <van-icon name="comment-o" />
            <span>消息</span>
        </div>
        <div class="nav">
            <van-icon name="friends-o" />
            <span>我的</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.button_nav{
    width: 100%;
    height: 8%;
    display: flex;
    /* background-color: blanchedalmond; */
    position: absolute;
    bottom: 0px;
}
.button_nav .nav{
    width: 18%;
    height: 100%;
    /* background-color:chartreuse; */
    margin: 0 1%;
    /* display: flex; */
}
.button_nav .nav .van-icon{
    font-size: 2em;
    display: block;
}
</style>