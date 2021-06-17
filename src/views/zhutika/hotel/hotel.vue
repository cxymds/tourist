<template>
    <div>
        <div class="head_box"> 
            <a href="" class="left_box"><van-icon name="arrow-left" />返回</a>
            <span>大酒店 233房间</span>
        </div>
        <div class="program">
            <div class="switch">
                <span class="lamp">阅读灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">房灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">浴室灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">吧台灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">廊灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">夜灯</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
            <div class="switch">
                <span class="lamp">灯带</span>
                <span class="colour"></span>
                <span class="button_box"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.body{
    background-color: rgb(249, 249, 249);
}
.head_box{
    width: 100%;
    height: 2.5em;
    background-color: aquamarine;
    position: relative;
}
.head_box>.left_box{
    text-align: left;
    display: inline-block;
    line-height: 2.5em;
    width: 20%;
    /* margin-left: 0; */
    position: absolute;
    left: 0;
    color: #000;
    font-size: 17px;

}
.head_box>span{
    line-height: 2.5em;
    font-size: 17px;
    font-weight: 600;
    color: #000;
}
</style>