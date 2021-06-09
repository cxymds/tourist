<template>
  <div>
    <van-nav-bar
      title="实时通讯"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 海报 -->
    <div class="haibao">
      <img src="http://xmage.club/Fvk4lbgAVZdP_JAqV-XIoMbuA6Iy" alt="" />
    </div>
    <!-- 开通号码 -->
    <div class="kaitonghaoma">
      <div class="kaitonghaoma_wenzi">开通号码</div>
      <div class="kaitonghaoma_shuoming">
        开通服务前，请仔细阅读卫星通讯服务的通讯资<br />
        费、须知及相关服务事项！
      </div>
      <input type="text" placeholder="请输入手机号码" />
    </div>
    <!-- 资费 -->
    <div class="zifei">
      <div class="zifei_xiangqing">通讯资费详情</div>
      <div class="zifei_baohan">服务包含</div>
      <div class="zifei_shoufei" v-for="item in list" :key="item.id">
        <div class="zifei_shoufei_wenzi">{{ item.zifei_shoufei_wenzi }}</div>
        <div class="zifei_shoufei_jiage">{{ item.zifei_shoufei_jiage }}</div>
      </div>
      <!-- 首次开通 -->
      <div class="shoucikaitong">
        <div class="shoucikaitong_wenzi">首次开通</div>
        <div class="shoucikaitong_jiage">￥88</div>
      </div>
    </div>
    <!-- 通讯说明 -->
    <div class="tongxunshuoming">
      <div class="tongxunshuoming_wenzi">通讯说明</div>
      <div class="tongxunshuoming_shuoming">
        该服务为增值服务，首次开通费为￥88元，后续入园永久免费
      </div>
    </div>

    <!-- 请仔细阅读以下 -->
    <div class="zixiyuedu">请仔细阅读以下</div>
    <!-- 服务须知 -->
    <div class="xuzhi">
      <div class="xuzhi_wenzi">服务须知</div>
      <div class="xuzhi_xiangxi">
        本服务采用卫星通讯提供安全、稳定、可靠的信号传输。使用时请在法律允许范围内使用;<br />
        一、服务采用开通后手机号永久制度，下次入园无需再次开通通讯服务即可正常使用;<br />
        二、 拨号及接听费用按照资费表进行收费;
      </div>
    </div>
    <!-- 注意事项 -->
    <div class="zhuyi">
      <div class="zhuyi_wenzi">注意事项</div>
      <div class="zhuyi_xiangxi">
        一、服务开通后可能会出现1~10秒的激活延迟，请耐心等待;<br />
        二、服务所接入卫星为XX,请遵守国家相关法律法规;<br />
        三、使用过程中出现问题，请及时联系客服: XXXX
      </div>
    </div>
    <!-- 开通 -->
    <div class="kaitong">
      <van-button type="primary" class="kaitong_btn" block round
        >开通 ￥88</van-button
      >
    </div>
  </div>
</template>
<style>
html {
  background-color: rgb(245, 245, 245);
}
</style>

<style scoped>
/* 海报 */
.haibao {
  width: 345px;
  height: 132px;
  margin: 20px auto 0;
}
/* 开通号码 */
.kaitonghaoma {
  width: 345px;
  height: 180px;
  margin: 20px auto 0;
  background-color: #fff;
  border-radius: 10px;
}
.kaitonghaoma_wenzi {
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
}
.kaitonghaoma_shuoming {
  font-size: 14px;
  color: #999;
  margin-top: 20px;
}
input[type="text"] {
  width: 90%;
  height: 35px;
  color: #999;
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  border: none;
  background-color: rgb(240, 240, 240);
  font-size: 12px;
}
/* 资费 */
.zifei {
  width: 345px;
  height: 225px;
  border-radius: 10px;
  margin: 20px auto;
  background-color: #fff;
}
.zifei_xiangqing {
  text-align: left;
  height: 40px;
  line-height: 40px;
  width: 90%;
  margin: 0 auto;
  font-weight: 600;
}
.zifei_baohan {
  height: 20px;
  width: 90%;
  margin: 5px auto 0;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
}
.zifei_shoufei {
  color: #999;
  font-size: 14px;
  height: 20px;
  width: 90%;
  margin: 10px auto 0;
  display: flex;
}
.zifei_shoufei_wenzi {
  text-align: left;
  width: 40%;
  height: 20px;
}
.zifei_shoufei_jiage {
  text-align: right;
  width: 60%;
  height: 20px;
}
/* 首次开通 */
.shoucikaitong {
  width: 90%;
  margin: 15px auto 0;
  height: 50px;
  line-height: 50px;
  display: flex;
  border-top: 1px solid rgb(245, 245, 245);
}
.shoucikaitong_wenzi {
  width: 40%;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
}
.shoucikaitong_jiage {
  width: 60%;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  padding-right: 10px;
}
/* 通讯说明 */
.tongxunshuoming {
  height: 60px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  font-weight: 600;
  color: #999;
  background-color: #fff;
  border-radius: 10px;
  font-size: 14px;
}
.tongxunshuoming_wenzi {
  height: 60px;
  line-height: 60px;
  width: 25%;
  text-align: left;
  padding-left: 15px;
}
.tongxunshuoming_shuoming {
  padding-top: 9px;
  height: 60px;
  width: 72%;
  text-align: left;
}

/* 请仔细阅读以下 */
.zixiyuedu {
  width: 345px;
  height: 20px;
  font-size: 12px;
  color: #999;
  text-align: left;
  margin: 20px auto 0;
}

/* 服务须知 */
.xuzhi {
  width: 375px;
  height: 160px;
  background-color: #fff;
  margin-top: 5px;
  overflow: hidden;
}
.xuzhi_wenzi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.xuzhi_xiangxi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  color: #999;
}
/* 注意事项 */
.zhuyi {
  width: 375px;
  height: 140px;
  background-color: #fff;
  margin: 10px 0 70px 0;
  overflow: hidden;
}
.zhuyi_wenzi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.zhuyi_xiangxi {
  width: 345px;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  margin: 10px auto 0;
  color: #999;
}
/* 开通 */
.kaitong {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
}
.kaitong_btn {
  width: 70%;
  height: 40px;
  margin: 10px auto 0;
  background-color: #ff9800;
  border: none;
}
</style>


<script>
import { Toast } from "vant";
export default {
  setup() {
    const onClickLeft = () => Toast("返回");
    return {
      onClickLeft,
    };
  },

  name: "",
  data() {
    return {
      list: [
        {
          zifei_shoufei_wenzi: "拨号收费",
          zifei_shoufei_jiage: "1.2元/分",
        },
        {
          zifei_shoufei_wenzi: "接听收费",
          zifei_shoufei_jiage: "0.6元/分",
        },
        {
          zifei_shoufei_wenzi: "时间期限",
          zifei_shoufei_jiage: "开通手机号永久免费",
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script> 


