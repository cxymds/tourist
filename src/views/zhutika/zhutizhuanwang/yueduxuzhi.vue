<template>
  <div>
    <van-nav-bar
      title="阅读上网须知"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="zhongyao">请仔细阅读并同意以下</div>
    <!-- 三明 -->
    <div class="sanming" v-for="item in list" :key="item.id">
      <div class="biaoti">{{ item.biaoti }}</div>
      <div class="neirong" v-html="item.neirong"></div>
    </div>
    <van-button class="tongyi" round type="primary" block
      >我已阅读并同意</van-button
    >
  </div>
</template>
<style>
html {
  background-color: rgb(245, 245, 245);
}
</style>

<style scoped>
.zhongyao {
  width: 345px;
  margin: 0 auto;
  text-align: left;
  color: #999999;
  font-size: 12px;
  height: 32px;
  line-height: 32px;
}
.sanming {
  text-align: left;
  background-color: #fff;
  margin-bottom: 20px;
}
.biaoti {
  width: 345px;
  margin: 0 auto;
  font-size: 14px;
  color: #1c222a;
  border-bottom: 1px solid rgb(245, 245, 245);
  height: 40px;
  line-height: 40px;
}
.neirong {
  width: 345px;
  margin: 0 auto;
  font-size: 13px;
  color: #999999;
  line-height: 27px;
}
.tongyi {
  color: #fff;
  background-color: #ff9800;
  width: 90%;
  margin: 0 auto;
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
  data() {
    return {
      list: [
        {
          biaoti: "免责声明",
          neirong: `本服务所采用的系统由原厂商提供。对此主题咖不做任何书面
          担保，对售后服务不承担责任。<br>
          服务提供安全可靠及稳定的网络传输、如出现特大意外性中
          断等造成用户数据丢失，主题咖将会为帮助各位用户减少损
          失及找回数据;<br>
          如出现无法找回情况，我们将以用户所买套餐价格以5倍价
          格返还给用户，用户也可以对此提起诉讼。`,
        },
        {
          biaoti: "专网使用说明",
          neirong: `步骤一<br>
          请在主题专网购买套餐或前台购买激活卡;<br>
          步骤二<br>
          购买或激活成功后，点击主题专网的小火箭按钮启用专网链接;<br>
          步骤三<br>
          在您所使用设备中打开WiFi列表，并找到"ZTK-WIFI”选择连接WiFi;<br>
          完成以上步骤后即可正常使用本服务啦!<br>
          注意:购买的套餐或已激活的激活卡无法分享他人使用!<br>`,
        },
        {
          biaoti: "注意事项",
          neirong: `本服务网络传输通过XX卫星，请遵守国家相关法律法规;</br>
          使用过程中出现问题，请及时联系客服: XXXX`,
        },
      ],
    };
  },
};
</script>