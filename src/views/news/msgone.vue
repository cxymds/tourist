<template>
    <div class="all">
       <div class="one">
            <van-tabs v-model:active="activeName">
            <van-tab title="消息" name="a">
                <van-cell is-link @click="showPopup"><img src="http://xmage.club/FqN8cZq4hgu2KEUwUArXoifkY-7k" alt="" class="jiahao"></van-cell>
                <van-popup
                v-model:show="show"
                round
                position="bottom"
                :style="{ height: '25%' }"
                class="tan"
                >
                 <div class="tanone">
                     <div class="tanoneleft">
                         <img src="http://xmage.club/Fns4iBDsBWBnF7lDZ4FwHjYQMUvT" alt="">
                     </div>
                     <div class="tanoneight">
                         扫一扫
                     </div>
                 </div>
                 <div class="tantwo" @click="twocode">
                     <div class="tantwoleft">
                         <img src="http://xmage.club/FuCjml1nC8rZdm17yzuxvf_AFK9-" alt="">
                     </div>
                     <div class="tantwoight">
                         二维码
                     </div>
                 </div>
                 <div class="tanthree">
                     <div class="tanthreeleft">
                         <img src="http://xmage.club/Fu5LcslWz0tQOfBqlU1361910d6t" alt="">
                     </div>
                     <div class="tanthreeight">
                         创建群组
                     </div>
                 </div>
                </van-popup>
                <div class="one1">
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </div>
                <div class="one2" v-for="item in list" :key="item.id" @click="msg">
                    <div class="one2a">
                        <img :src="item.head" alt="">
                    </div>
                    <div class="one2b">
                        <div class="one2btop">{{item.name}}</div>
                        <div class="one2bbottom">{{item.msg}}</div>
                    </div>
                    <div class="one2c">
                        <div class="one2ctop">{{item.date}}</div>
                        <div class="one2cbottom">
                            <div class="yuan">
                                {{item.new}}
                            </div>
                        </div>
                    </div>
                </div>
            </van-tab>
            
            <van-tab title="好友" name="b">
                <div class="two1">
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </div>
                <div class="two2" v-for="item in person" :key="item.id" @click="friend">
                    <div class="two2a">
                        <img :src="item.head" alt="">
                    </div>
                    <div class="two2b">
                        {{item.name}}
                    </div>
                </div>
            </van-tab>
            <van-tab title="群聊" name="c">
                <div class="three1">
                    <van-search v-model="value" placeholder="请输入搜索关键词" />
                </div>
                <div class="three2" v-for="item in group" :key="item.id" @click="qun">
                    <div class="three2a">
                        <img :src="item.head" alt="">
                    </div>
                    <div class="three2b">
                        {{item.name}}
                    </div>
                </div>
            </van-tab>
        </van-tabs>
       </div>
    </div>
    <tapbar></tapbar>
</template>
<script>
import { ref } from 'vue';
import menu from '@/components/Nav.vue'
export default {
  setup() {
    const activeName = ref('a');
    const value = ref('');
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return { 
        activeName,
        value,
        showPopup,
        show
    };
  },
    name: 'cc',
    components:{
    tapbar:menu
  },
  methods:{
    friend(){
      this.$router.push('/friend');
    },
    msg(){
      this.$router.push('/talk');
    },
    qun(){
      this.$router.push('/talk');
    },
    twocode(){
      this.$router.push('/twocode');
    }
  },
  data(){
      return{
          list:[
              {
                  head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                  name:'小爱',
                  msg:'小新陛下，小爱稍后就到',
                  date:'12-30',
                  new:'2'
              },
              {
                  head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                  name:'小马',
                  msg:'今天天气真不错啊',
                  date:'12-30',
                  new:'1'
              },{
                  head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                  name:'小狗',
                  msg:'小狗真可爱',
                  date:'12-30',
                  new:'1'
              },{
                  head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                  name:'小狗',
                  msg:'小狗真可爱',
                  date:'12-30',
                  new:'1'
              },{
                  head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                  name:'小狗',
                  msg:'小狗真可爱',
                  date:'12-30',
                  new:'1'
              }
        ],
        group:[
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'群组一'
            },
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'群组二'
            },
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'群组三'
            }
        ],
        person:[
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'联系人一'
            },
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'联系人二'
            },
            {
                head:'http://xmage.club/FgLS94vOs8S1x7DJKBJzMcDofdP_',
                name:'联系人三'
            }
        ]
      }
  }
};
</script>
<style lang="less">
.tan{
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        height: 70px;
        margin: 2px 0;
        display: flex;
        flex-direction: row;
            border-bottom: 1px solid rgb(224, 224, 224);
        div{
            width: 50%;
            height: 100%;
            margin: 0 2px;
            line-height: 62px;
            font-weight: bold;
             img{
                width:30px;
                padding-left: 145px;
                padding-top: 15px;
                height: 30px;
            }
        }
    }
    
}
.van-cell{
    padding:5px;
}
.jiahao{
    width: 25px;
    height: 25px;
    padding-left:170px;
    padding-top: 2px;
}
.all{
    min-height: 100vh;
}
.all .one .two2{
    width: 370px;
    height: 65px;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    flex-direction: row;
}

.all .one .two2>div{
    width: 80px;
    height: 100%;
    margin: 0 2px;
}
.all .one .two2 .two2b{
    flex-grow: 2;
    line-height: 65px;
    font-weight: bold;
    text-align: left;
    text-indent: 30px;
}
.all .one .three2{
    width: 370px;
    height: 65px;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    flex-direction: row;
}
.all .one .three2>div{
    width: 80px;
    height: 100%;
    margin: 0 2px;
}
.all .one .three2 .three2b{
    flex-grow: 2;
    line-height: 65px;
    font-weight: bold;
    text-align: left;
    text-indent: 30px;
}
.all .one .one1{
    margin-top: 17px
}
.all .one .two1{
    margin-top: 17px
}
.all .one .three1{
    margin-top: 17px
}
.all .one .one2{
    width: 370px;
    height: 70px;
    border-radius: 12px;
    margin: 0 auto;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: row;
    margin-top: 15px;
}
.all .one .one2>div{
    width: 100px;
    height: 100%;
    margin: 0 2px;
}
.all .one .one2 .one2a>img{
    width: 70px;
    height: 65px;
}
.all .one .one2 .one2b{
    flex-grow: 2;
    flex-direction: column;
    display: flex;
}
.all .one .one2 .one2b>div{
    width: 100%;
    height: 30px;
    margin: 2px 0;
}
.all .one .one2 .one2b .one2btop{
    font-weight: bold;
    text-align: left;
    line-height: 28px;
}
.all .one .one2 .one2b .one2bbottom{
    line-height: 35px;
    font-size: 14px;
    text-align: left;
}
.all .one .one2 .one2c{
    display: flex;
    flex-direction: column;
}
.all .one .one2 .one2c>div{
    margin: 2px 0;
    width: 100%;
    height: 30px;
}
.all .one .one2 .one2c .one2ctop{
    text-align: right;
    line-height: 24px;
}
.all .one .one2 .one2c .one2cbottom{
    text-align: right;
    line-height: 24px;
}
.all .one .one2 .one2c .one2cbottom .yuan{
    width: 18px;
    height: 18px;
    background-color:red;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 19px;
    margin-left: 80px;
    margin-top: 6px;
}

</style>
