<template>
    <div>
       <div class="nav">
      <div class="nav_wenzi">
        <van-tabs
          v-model:active="active"
          line-height="0"
          swipeable
          title-active-color="blue"
        >
          <van-tab v-for="item in list" :title="item.li" :key="item.id">
          </van-tab>
        </van-tabs>
        </div>
        <div class="nav_guan" @click="fanhui">
            <img src="http://xmage.club/Fr5I-055a-5YrVErGNRxqyEOP1w-" alt="" />
        </div>
        </div>
        <!-- 搜索 -->
            <div class="sousuo" @click="sousuo">
            <div class="sousuo_search">
                <van-search v-model="value" placeholder="咖选服务 TOP" />
            </div>      
        </div>
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
            <van-image width="95%" height="7em" src="http://xmage.club/FpQRzvLczOzMHqjva-8NTOZ90WUE" />
            <van-tabs v-model:active="active">
                <van-tab title="咖选">
                  <div class="kaall" v-for="item in liebiao" :key="item.id">
                    <div class="kaleft"><img :src="item.img" alt=""></div>
                    <div class="karight">
                      <div class="zizhu">{{item.position}}</div>
                      <div class="zhi">{{item.time}}</div>
                      <div class="tebie">
                        <span class='one'>
                          预约
                        </span>
                        <span class='one'>
                          送餐
                        </span> 
                        <span class='one'>
                          现场
                        </span>     
                        <span class="two">
                          {{item.ren}}
                        </span>
                      </div>
                    </div>
                  </div>
                </van-tab>
                <van-tab title="火爆美食">待开发</van-tab>
                <van-tab title="预约">待开发</van-tab>
                <van-tab title="送餐">待开发</van-tab>
            </van-tabs>
        </van-pull-refresh>
        
    </div>
</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { Toast } from 'vant';
export default {
    setup() {
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };
     return {
      state,
      onRefresh,
    };
  },
   data() {
    return {
      list: [
        {
          li: "美食",
        },
        {
          li: "娱乐",
        },
        {
          li: "运动",
        },
        {
          li: "休闲",
        },
        {
          li: "酒店",
        },
        {
          li: "公共",
        },
        {
          li: "其他",
        },
      ],
      liebiao:[
        {
          img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ijuzhong.com%2Fzhuangxiu%2Fuploads%2Fallimg%2F20191221%2F1576932259790_2.jpg&refer=http%3A%2F%2Fwww.ijuzhong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626707344&t=3c3ce33f34c18ca3504d8387e7a60879',
          position:'咖自助餐厅 A区',
          time:'7:30至9:30开放',
          ren:'1422人'
        },
        {
          img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170511%2F3ae7ce18220f47aeb3a6d86ee742a7dc_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626707400&t=fb58de7ec3a4b75ec3f5df67c660b23c',
          position:'夜色派对',
          time:'22:30至1:30开放',
          ren:'6663人'
        },
        {
          img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01fa475dd53b36a8012053c08f6dea.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626707746&t=d5bf2cd7aba7042f1db5ea8047a8fdc4',
          position:'小酒馆',
          time:'19:30至6:30开放',
          ren:'663人'
        },
         {
          img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171024%2Ff2f36e5136214d028eb9d2acdd19dee2.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626707822&t=a9edb72e97a51a2a2bb27dad87498c24',
          position:'欢乐泳池',
          time:'6:30至12:30开放',
          ren:'763人'
        },
        {
          img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20200212s%2F290%2Fw1080h810%2F20200212%2F9c58-ipmxpvz0620785.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626707977&t=9053569348e408acc625e9156ee9ff21",
          position:'高级餐厅',
          time:'6:30至19:30开放',
          ren:'1563人'
        }
      ]
    }
    },
    methods:{
      fanhui(){
        this.$router.go(-1)
      }
    }
}
</script>
<style lang="less">
.kaall{
  width: 100%;
  height: 110px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  div{
    width:120px;
    height: 100%;
    margin: 0 2px;
  }
  .kaleft{
    img{
      width: 100%;
      height: 100%;
    }
  }
  .karight{
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    div{
      width: 100%;
      height: 25px;
      margin: 2px 0;
      text-align: left;
      padding-left: 10px;
    }
    :nth-child(1){
      flex-grow: 2;
    }
    .zizhu{
      font-weight: bold;
    }
    .zhi{
      font-size: 14px;
      color: rgb(104, 104, 104);
    }
    .tebie{
    .one{
      font-size: 14px;
    }
    .two{
      font-size: 14px;
      padding-left: 60px;
    }
    }
  }

}
.nav {
  width: 375px;
  height: 44px;
  display: flex;
}
.nav_wenzi {
  width: 343px;
  height: 44px;
}
.nav_guan {
  width: 32px;
  height: 44px;
  /* margin-left: 25px; */
}
.nav_guan > img {
  margin-top: 10px;
}
/* 搜索 */
.sousuo {
  width: 375px;
  height: 55px;
  display: flex;
}
.sousuo_search {
  width: 99%;
}
.fenlie {
  width: 48px;
  height: 20px;
  margin: 15px 10px 0 0;
  display: flex;
  font-size: 14px;
}
.kanguo {
  width: 48px;
  height: 20px;
  margin-top: 15px;
  display: flex;
  font-size: 14px;
}
</style>