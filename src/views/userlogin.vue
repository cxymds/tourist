<template>
 <div id="user">
    <div class="userone">
      <div class="appone">
        <div class="left" @click="tab"><img src="http://xmage.club/FtttM4fwr6bB-4ycm1wY0MEpzzBe" alt=""></div>
        <div class="conter">首次登陆</div>
      </div>
      <div class="apptwo">
        首次登陆请完善您的主题咖个人信息，我们将为您提供更好的服务，快来完善吧
      </div>
      <div class="appthree">
        <div class="touxiang">
          <img src="http://xmage.club/FoatRPUaRys9DosVqPiGx3toNa83" alt="">
          <text>点击上传头像</text>
        </div>
      </div>
    </div>
    <div class="usertwo">
      <van-form @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
        <van-field
          class="one"
          v-model="state.value1"
          name="pattern"
          placeholder="您的昵称"
          :rules="[{ pattern, message: '请输入汉字' }]"
        />
        <van-field
          v-model="state.value2"
          name="validator"
          placeholder="输入密码"
          :rules="[{ validator, message: '请输入数字字母下划线' }]"
        />
        <van-field
          v-model="state.value3"
          name="asyncValidator"
          placeholder="确认密码"
          :rules="[{ validator: asyncValidator, message: '再次输入正确密码' }]"
        />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
    </van-form>
  </div>
  <div class="userthree">
    <span>暂且跳过/后续调整</span>
  </div>
</div>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from 'vant';

export default {
  methods:{
    tab(){
      this.$router.push('/');
    }
  },
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
    });
    const pattern = /[\u4E00-\u9FFF]/;
    const validator = (val) => /^(([a-zA-Z_])+(\d)+([a-zA-Z0-9]*))+|((\d)+([a-zA-Z_])+([a-zA-Z0-9]*))$/.test(val);
    // 校验函数可以返回 Promise，实现异步校验
    const asyncValidator = (val) =>
      new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/^(([a-zA-Z_])+(\d)+([a-zA-Z0-9]*))+|((\d)+([a-zA-Z_])+([a-zA-Z0-9]*))$/.test(val));
        }, 1000);
      });

    const onFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return {
      state,
      pattern,
      onFailed,
      validator,
      asyncValidator,
    };
  },
};
</script>
<style lang="less">
#user{
  .usertwo{
    .one{
      margin-bottom: 65px;
    }
  }
  .userthree{
    width: 100%;
    height: 50px;
    margin-top: 30px;
    span{
      text-align: center;
      line-height: 10px;
      color: rgb(212, 212, 212);
    }
  }
  .userone{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    div{
      width: 100%;
      height:90px;
      margin-bottom: 2px ;
    }
     .appone{
      flex-direction: row;
      display: flex;
      div{
        width: 90px;
        height: 100%;
        margin-left: 2px;
        line-height: 90px;
        font-weight: bold;
      }
      .left{
        padding-top: 7px;
      }
      .conter{
        margin-left: 50px;
      }
    }
    .apptwo{
      font-size: 14px;
      color: rgb(173, 173, 173);
    }
    .appthree{
      flex-grow: 2;
      .touxiang{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color:#1667D2 ;
        margin: 0 auto;
        img{
          margin-top: 25px;
        }
        text{
          display: block;
          color: #fff;
          margin-top: 3px;
        }
      }
  }
}
}
 
 



</style>

