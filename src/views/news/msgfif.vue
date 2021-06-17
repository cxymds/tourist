<template>
  <div class="msgfif">
    <div class="msgfifone">
      <div class="msgfifone1" @click="tab">
        <div class="tu">
          <img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt="" />
        </div>
        <div class="zi"><span>返回</span></div>
      </div>
      <div class="msgfifone2"><span>会员码</span></div>
    </div>
    <QRrcode></QRrcode>
  </div>
</template>

<script>
import menu from "@/components/Qrcode.vue";
export default {
  setup() {},
  name: "ll",
  components: {
    QRrcode: menu,
  },
  methods: {
    tab() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.msgfif {
  width: 100%;
  height: 100vh;
}
.msgfif .msgfifone {
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
}
.msgfif .msgfifone > div {
  margin: 0 2px;
  width: 100px;
  height: 100%;
}
.msgfif .msgfifone .msgfifone1 {
  display: flex;
  flex-direction: row;
}
.msgfif .msgfifone .msgfifone1 > div {
  margin: 0 2px;
  width: 50px;
  height: 100%;
}
.msgfif .msgfifone .msgfifone1 .tu > img {
  padding-top: 12px;
  padding-left: 10px;
}
.msgfif .msgfifone .msgfifone1 .zi > span {
  padding-top: 15px;
  display: block;
  font-weight: bold;
  padding-right: 13px;
}
.msgfif .msgfifone .msgfifone2 {
  margin-left: 42px;
}
.msgfif .msgfifone .msgfifone2 > span {
  flex-grow: 2;
  text-align: left;
  padding-top: 13px;
  font-weight: bold;
  display: block;
  font-size: 18px;
  padding-left: 20px;
}
</style>
