<template>
    <div>
        <div class="head_box"> 
            <a href="" class="left_box"><van-icon name="arrow-left" />返回</a>
            <span>我的口袋</span>
        </div>
        <div class="body_box">
            <div class="name_box">我的主题币</div> 
            <div class="integral_box">
                <span>{{}}</span>
                <a href="">明细</a>
            </div>
            <div class="name_box">我的咖先用额度</div>
            <div class="integral_box">
                <span>{{}}/{{}}</span>
                <a href="javascript:;" type="primary" @click="onClick">阿巴阿巴</a>
                <van-dialog
                    v-model:show="isShow"
                    show-cancel-button
                    :beforeClose="beforeClose"
                >
                <div style="padding:30px;">
                    <p>第一行内容</p>
                    <p>第二行内容</p>
                    <p>第三行内容</p>
                </div>

                </van-dialog>
            </div>
            
        </div>
    </div>
</template>
<script>
import {Dialog} from 'vant';

export default{
       components: {
            [Dialog.Component.name]: Dialog.Component, //Dialog.Component写成这样才生效
            
        },
        data() {
            return {
                isShow: false,
            };
        },
        methods: {
            onClick() {
                this.isShow = !this.isShow
                // then(()=>{
                //     console.log('点击了确认')
                // })
            }
        },
 
    };

</script>
















<style>
body{
    background-image: url("http://xmage.club/FqzAdbvl8f40_M7GGE39292s-IfK");
}
.head_box{
    width: 100%;
    height: 2.5em;
    /* background-color: aquamarine; */
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
    color: #fff;
    font-size: 17px;

}
.head_box>span{
    line-height: 2.5em;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
}
</style>