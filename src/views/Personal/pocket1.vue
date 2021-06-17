
<template>
    <div class="page">
        <div>
            <p>
                <van-button class="btn" type="primary" @click="TipDialog">（确认）提示弹出框</van-button>
            </p>
            <p style="display:block;margin-top:5px;">
                <van-button class="btn" type="primary" @click="Dialog">（确认、取消）提示弹出框</van-button>
            </p>
        </div>
    </div>
</template>
<script>
    import {
        Button,
        Dialog,
    } from 'vant';
 
 
    export default{
        components: {
            [Dialog.Component.name]: Dialog.Component, 
            [Button.name]: Button,
        },
        data(){
            return{
                msg:''
            }
        },
        methods:{
            // 提示弹出框
            TipDialog(){
                this.$dialog.alert({
                    title:'标题1',
                    message:'弹框内容1',
                    //theme: 'round-button',  //圆角按钮
                }).then(()=>{
                    console.log('点击了确认')
                })
            },
 
            //（确认、取消）的弹出框
            Dialog(){
                this.$dialog.confirm({
                    title:'标题2',
                    message:'弹框内容2',
                    confirmButtonColor:'red'
                }).then(()=>{
                    console.log('点击了确认')
                }).catch(()=>{
                    console.log('点击了取消')
                })
            }
 
        },
    }
</script>
