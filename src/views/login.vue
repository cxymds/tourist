<template>
  <div id="app">
    <div class="miaoshu">
      <div class="top">主题咖APP</div>
      <div class="bottom">官方伴侣，出游更省心</div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
      <van-field
        v-model="user.phone"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div class="yzm">
        <van-button type="info" @click="gain" class="yzmm">获取验证码</van-button>
      </div>
      <van-field
        v-model="user.code"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <div style="margin: 16px;">
        <van-button class="tijiao" block type="info" native-type="submit" @click="tijiao">提交</van-button>
      </div>
    </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:{
        phone: '',
        code: '',
      }
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    gain(){
      this.axios.get('/api/txySms',{params:{mobile:this.user.phone}}).then((data)=>{
        console.log(data)
      })
    },
    tijiao(){
       this.$router.push('/userlogin');
    }
  },
};
</script>
<style>
#app .form .tijiao{
  background-color: #FF9800;
  border-color: #FF9800;
  margin-top: 50px;
  border-radius: 10px;
}
#app .form .yzm .yzmm{
  background-color: #FF9800;
  border-color: #FF9800;
  border-radius: 10px;

}
#app {
  width: 100%;
  height: 800px;
}
#app .form{
  padding-top: 80px;
}
.yzm{
  position: absolute;
  top: 307px;
  left: 270px;
}
#app .miaoshu{
  display: flex;
  flex-direction: column;
  padding-top: 150px;
}
#app .miaoshu div{
  width: 200px;
  margin: 2px 0;
  text-align: left;
  height: 35px;
}
#app .miaoshu .top{
  text-align: center;
  font-size: 22px;
}
#app .miaoshu .bottom{
  text-align: center;
  font-size: 16px;
}
</style>