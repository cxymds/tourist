<template>
  <div class="app">
    <div class="cover"></div>
    <div class="miaoshu">
      <div class="top">主题咖APP</div>
      <div class="bottom">官方伴侣，出游更省心</div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field
          class="tel"
          v-model="user.phone"
          type="tel"
          left-icon="http://xmage.club/Fk43hhB9NScMBOFpNxiYY9Nd97uE"
          placeholder="手机号码"
          name="手机号码"
          placeholder-color="#ffffff"
          :rules="telRules"
        />
        <div class="yzm">
          <van-button
            type="info"
            @click="gain"
            class="yzmm"
            v-bind:disabled="dis"
            >{{ value }}</van-button
          >
        </div>
        <van-field
          class="codes"
          v-model="user.code"
          type="digit"
          left-icon="http://xmage.club/FpOQGOXKJrkT3wMQQEu13t34nP5T"
          :rules="[{ required: true, message: '请填写验证码' }]"
          placeholder="验证码"
          name="验证码"
        />
        <div style="margin: 16px">
          <van-button
            class="tijiao"
            block
            type="info"
            native-type="submit"
            @click="tijiao"
            >提交</van-button
          >
        </div>
        <div class="bottom">
          <span>© 2020 HTTPS://MMOO.FUN MMO设计</span>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "获取验证码",
      user: {
        phone: "",
        code: "",
      },
      shuju: "",
      // 郭小峰修改
      dis: false,
      val: "",
      telRules: [
        {
          required: true,
          message: "手机号码不能为空",
          trigger: "onBlur",
        },
        {
          // 自定义校验规则
          validator: (val) => {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
              val
            );
          },
          message: "请输入正确格式的手机号码",
          trigger: "onBlur",
        },
      ],

      // 郭小峰修改
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    gain() {
      this.axios
        .get("/api/txySms", { params: { mobile: this.user.phone } })
        .then((data) => {
          console.log(data);
          // 郭小峰修改
          this.$data.dis = true;
          if ((this.$data.dis = true)) {
            // var that = this.$data.value;
            var i = 60;
            var time;
            time = setInterval(() => {
              i--;
              this.$data.value = i + "s";
              if (i == 0) {
                clearInterval(time);
                this.$data.dis = false;
                this.$data.value = "获取验证码";
              }
            }, 1000);
          }

          // 郭小峰修改
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tijiao() {
      this.axios
        .post("/api/login", { mobile: this.user.phone, verify: this.user.code })
        .then((res) => {
          console.log(res);
          var status = res.data.code;
          console.log(status);
          if (status == 200) {
            this.shuju = res.data;
            window.localStorage.setItem("token", res.data.token);
            this.$router.push("/userlogin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    jiao() {
      this.$router.push("/userlogin");
    },
  },
};
</script>
<style>
.app .form .bottom {
  width: 100%;
  margin-top: 80px;
  height: 20px;
  position: relative;
  top: 0;
  z-index: 22;
}
.app .form .bottom span {
  color: #ffffff;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
}
.app .form .tel {
  margin-bottom: 35px;
  border-radius: 10px;
  width: 270px;
  background-color: rgba(218, 218, 218, 0.5);
}
/* 郭小峰 */

/* 郭小峰 */

.app .form .codes {
  border-radius: 10px;
  background-color: rgba(218, 218, 218, 0.5);
  width: 270px;
}
.app .form .tijiao {
  background-color: #ff9800;
  border-color: #ff9800;
  margin-top: 50px;
  border-radius: 10px;
  color: #fff;
}
.app .form .yzm .yzmm {
  background-color: #ff9800;
  border-color: #ff9800;
  border-radius: 10px;
}
/* 郭小峰修改 */
.yzmm {
  width: 104px;
  height: 44px;
}

/* 郭小峰修改 */

.app {
  width: 100%;
  background-image: url("http://xmage.club/Fu3XY6Ezfi0DA9jcU6Eplw4itP2C");
  height: 800px;
}
.app .cover {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 800px;
  background: rgba(0, 119, 255, 0.78);
}
.app .form {
  padding-top: 80px;
}
.yzm {
  position: absolute;
  top: 307px;
  left: 270px;
  color: #fff;
}
.app .miaoshu {
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  color: #fff;
  font-weight: bold;
  position: relative;
  z-index: 55;
}
.app .miaoshu div {
  width: 200px;
  margin: 2px 0;
  text-align: left;
  height: 35px;
}
.app .miaoshu {
  text-align: center;
  font-size: 22px;
}
/* 郭小峰修改 */
.app .miaoshu .top,
.app .miaoshu .bottom {
  text-align: left;
  margin-left: 30px;
}
.app .miaoshu .top {
  font-size: 26px;
}

.app .miaoshu .bottom {
  font-size: 18px;
  font-weight: 500;
}

/* 郭小峰修改 */
</style>