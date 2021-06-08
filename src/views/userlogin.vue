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
        <text>点击上传头像</text>
        <van-uploader  v-model="fileList"  class="file" max-count="1" :after-read="beforeRead" />
        <img :src="state.value4" alt="">
        
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
      <van-button round block type="primary" native-type="submit" @click="submit">
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
import { ref } from 'vue';
import * as qiniu from 'qiniu-js'
import {getCurrentInstance} from "vue";

export default {
  data(){
    return{
    }
  },
  methods:{
    tab(){
      this.$router.push('/');
    },
   
  },
  
  created: function () {
      const usertoken = window.localStorage.getItem("token")
      console.log(usertoken)
      this.axios({
        method:'post',
        url:"/api/user/image",
        headers:{
          'Authorization':usertoken
        }
      }).then((res)=>{
        console.log(res)
        window.localStorage.setItem(
          "qiniutoken",
          res.data.qiniuToken
        )
      }).catch((err)=>{
        console.log(err)
      });
  },


  setup() {
    let { proxy } = getCurrentInstance();
    const submit = (e)=>{
      console.log(state)
      const users = window.localStorage.getItem("token")
      proxy.axios({
        method:'post',
        url:"/api/user/userinfo",
        headers:{
          'Authorization':users
        },
        data:{
          username:state.value1,password:state.value2,image:img
        }
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      });
    };
    let fileList = ref([
    ]);

   
    let img = ref('');
    const beforeRead = (file) => {
      console.log(file)
      let config = {
        useCdnDomain: true,//cdn加速
        retryCount: 5 // 上传错误重新上传次数
      }
      let putExtra = {
        fname: file,
        params: {},
        mimeType: ['image/png', 'image/jpeg', 'image/gif', 'video/mp4'] //可以上传的type
      }
      let observer = {
        next(res) {
        	// res.total.percent 上传进度
        	file.message = parseInt(res.total.percent)+'%'
        },
        error(code, message, isRequestError) {
        //错误信息
          console.log(code)
          console.log(message)
          console.log(isRequestError)
        },
        complete(res) {
          console.log(res)
          let image = `http://xmage.club/${res.hash}`
          img  = `http://xmage.club/${res.hash}`
          console.log(image)
        }
      }

      const qntoken = localStorage.getItem('qiniutoken')
      let observable = qiniu.upload(file, null, qntoken, putExtra, config) //调用七牛的上传
      let subscription = observable.subscribe(observer)//上传监听
    };
  
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4:img
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
      proxy, 
      beforeRead,
      pattern,
      submit,
      onFailed,
      fileList,
      validator,
      asyncValidator,
      img
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
      .file{
        width: 200px;
        height: 200px;
        display: block;
        margin: 50px auto;
      }
      text{
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
 
 



</style>

