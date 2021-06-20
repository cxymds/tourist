<template>
<div class="orderall">
   <div class="head">
        <van-nav-bar
        title="所有订单"
        left-text="返回"
        left-arrow
        @click="onClickLeft"
        />
   </div>
   <div class="naval">
        <van-tabs v-model:active="active">
            <van-tab title="全部">
                <div class="vanall" v-for="item in list" :key="item.id">
                    <div class="vanone">
                        <div class="order">
                            {{item.order}}
                        </div>
                        <div class="pay">
                            {{item.pay}}
                        </div>
                    </div>
                    <div class="vantwo">
                        <div class="twotop">
                            <div class="top1">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="top2">
                                <div class="top21">{{item.name}}</div>
                                <div class="top22">{{item.method}}</div>
                                <div class="top23">{{item.ime}}</div>
                            </div>
                        </div>
                        <div class="twocenter">
                            <span>{{item.xiaofei}}</span>
                        </div>
                        <div class="twobottom">
                            <div class="te">
                                <button class="liji">{{item.button}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="待付款">
                <div class="vanall" v-for="item in listdai" :key="item.id">
                    <div class="vanone">
                        <div class="order">
                            {{item.order}}
                        </div>
                        <div class="pay">
                            {{item.pay}}
                        </div>
                    </div>
                    <div class="vantwo">
                        <div class="twotop">
                            <div class="top1">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="top2">
                                <div class="top21">{{item.name}}</div>
                                <div class="top22">{{item.method}}</div>
                                <div class="top23">{{item.ime}}</div>
                            </div>
                        </div>
                        <div class="twocenter">
                            <span>{{item.xiaofei}}</span>
                        </div>
                        <div class="twobottom">
                            <div class="te">
                                <button class="liji">{{item.button}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已付款">
                <div class="vanall" v-for="item in listyi" :key="item.id">
                    <div class="vanone">
                        <div class="order">
                            {{item.order}}
                        </div>
                        <div class="pay">
                            {{item.pay}}
                        </div>
                    </div>
                    <div class="vantwo">
                        <div class="twotop">
                            <div class="top1">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="top2">
                                <div class="top21">{{item.name}}</div>
                                <div class="top22">{{item.method}}</div>
                                <div class="top23">{{item.ime}}</div>
                            </div>
                        </div>
                        <div class="twocenter">
                            <span>{{item.xiaofei}}</span>
                        </div>
                        <div class="twobottom">
                            <div class="te">
                                <button class="liji">{{item.button}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已完成">
                <div class="vanall" v-for="item in listwan" :key="item.id">
                    <div class="vanone">
                        <div class="order">
                            {{item.order}}
                        </div>
                        <div class="pay">
                            {{item.pay}}
                        </div>
                    </div>
                    <div class="vantwo">
                        <div class="twotop">
                            <div class="top1">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="top2">
                                <div class="top21">{{item.name}}</div>
                                <div class="top22">{{item.method}}</div>
                                <div class="top23">{{item.ime}}</div>
                            </div>
                        </div>
                        <div class="twocenter">
                            <span>{{item.xiaofei}}</span>
                        </div>
                        <div class="twobottom">
                            <div class="te">
                                <button class="liji">{{item.button}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
   </div>
</div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
    const active = ref(0);
    return { active };
  },
    methods:{
        onClickLeft(){
           this.$router.go(-1);
        }
    },
    data(){
        return{
            list:[
                {
                    order:"美食订单",
                    pay:"待支付",
                    img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180204%2F941f66e2b74045a8a5cd0d9fae1a89bd.jpg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626748973&t=c1a535c4a25547fe409a25853d5076ba",
                    name:"小酒馆",
                    method:"就餐方式：移动送餐",
                    time:"订单时间：2021/6/21 2：00",
                    xiaofei:"点餐7项，总计286",
                    button:"立即支付",
                },
                {
                    order:"游戏订单",
                    pay:"已付款",
                    img:"https://img0.baidu.com/it/u=2285458824,3211579351&fm=26&fmt=auto&gp=0.jpg",
                    name:"游玩地点：EMD游戏厅",
                    method:"娱乐区W37",
                    time:"订单时间：2021/6/18 12：00",
                    xiaofei:"兑币200个，总计600",
                    button:"删除订单",
                },
                {
                    order:"购物订单",
                    pay:"已完成",
                    img:"https://img2.baidu.com/it/u=3487295618,899223652&fm=26&fmt=auto&gp=0.jpg",
                    name:"香奈儿CHANEL",
                    method:"购物地点：休闲区P16",
                    time:"订单时间：2021/6/19 11：00",
                    xiaofei:"购物三项，总计6800",
                    button:"删除订单",
                }
               
            ],
            listdai:[
                {
                    order:"美食订单",
                    pay:"待支付",
                    img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180204%2F941f66e2b74045a8a5cd0d9fae1a89bd.jpg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626748973&t=c1a535c4a25547fe409a25853d5076ba",
                    name:"小酒馆",
                    method:"就餐方式：移动送餐",
                    time:"订单时间：2021/6/21 2：00",
                    xiaofei:"点餐7项，总计286",
                    button:"立即支付",
                }
            ],
            listyi:[
                {
                    order:"游戏订单",
                    pay:"已付款",
                    img:"https://img0.baidu.com/it/u=2285458824,3211579351&fm=26&fmt=auto&gp=0.jpg",
                    name:"游玩地点：EMD游戏厅",
                    method:"娱乐区W37",
                    time:"订单时间：2021/6/18 12：00",
                    xiaofei:"兑币200个，总计600",
                    button:"删除订单",
                }
            ],
            listwan:[
                {
                    order:"购物订单",
                    pay:"已完成",
                    img:"https://img2.baidu.com/it/u=3487295618,899223652&fm=26&fmt=auto&gp=0.jpg",
                    name:"香奈儿CHANEL",
                    method:"购物地点：休闲区P16",
                    time:"订单时间：2021/6/19 11：00",
                    xiaofei:"购物三项，总计6800",
                    button:"删除订单",
                }
            ]
        }
    }
  
};
</script>
<style lang="less">
.vanall{
    width: 100%;
    height: 230px;
    margin-top: 15px;
    border: 1px solid rgb(228, 228, 228);
    border-radius: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    
    // background-color: aquamarine;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 45px;
        // background-color: blue;
        margin: 1px 0;
    }
    .vantwo{
        flex-grow: 2;
    }
    .vanone{
        display: flex;
        flex-direction: row;
        div{
            width: 50%;
            height: 100%;
            // background-color: red;
            margin: 0 2px;
        }
        .order{
            text-align: left;
            line-height: 45px;
            padding-left: 21px;
            font-size: 14px;
        }
        .pay{
            text-align: right;
            line-height: 45px;
            padding-right: 21px;
            font-size: 14px;
        }
    }
    .vantwo{
        width: 100%;
        display: flex;
        flex-direction: column;
        div{
            width: 100%;
            height:40px;
            // background-color: rosybrown;
            margin: 2px 0;
        }
        .twotop{
            flex-grow: 2;
            display: flex;
            flex-direction: row;
            div{
                width: 130px;
                height: 100%;
                // background-color: rgb(255, 0, 0);
                margin: 0 2px;
            }
            .top1>img{
                width: 100%;
                height: 100%;
            }
            .top2{
                flex-grow: 2;
                display: flex;
                flex-direction: column;
                div{
                    width: 90%;;
                    height: 33%;
                    // background-color: royalblue;
                    margin: 2px 0;
                    text-align: left;
                    padding-left: 20px;
                    line-height: 22px;
                }
                .top21{
                    font-weight: bold;
                }
                .top22{
                    font-size: 14px;
                    color: rgb(97, 97, 97);
                }
                .top23{
                    font-size: 14px;
                    color: rgb(97, 97, 97);

                }

            }
        }
        .twocenter{
            text-align: right;
            line-height: 40px;
            span{
                display: block;
                padding-right: 20px;
                font-size: 15px;
            }
        }
        .twobottom{
            text-align: right;
            
            .te{
                display: inline;
                padding-right: 20px;
                button{
                height: 35px;
                font-size: 14px;
                margin-top: 3px;
                width: 95px;
                border-radius: 12px;
                }
                .quxiao{
                    margin-right: 10px;
                    border: 1px solid rgb(138, 138, 138);
                }
                .liji{
                    border: 1px solid rgb(255, 174, 0);
                    color: rgb(255, 174, 0);
                    background-color: #fff;
                }
            }
            
        }

    }
    
}

</style>