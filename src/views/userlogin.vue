<template>
  <div id="user">
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
    <div class="appfour">
      <form action="">
        <input type="text" v-model="loginuser.nicheng" placeholder="昵称">
        <input type="text" v-model="loginuser.mima" placeholder="密码">
        <input type="text" v-model="loginuser.queren" placeholder="确认密码">
        <input type="submit" value="下一步">
      </form>
    </div>
    <div class="appfif">暂且跳过/后续完善</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      loginuser:{
        nicheng:'',
        mima:'',
        queren:''
      }
    }
  },
  methods:{
    tab(){
      this.$router.push('/');
    }
  }
}
</script>
<style lang="less">
  #user{
    width: 100%;
    height: 800px;
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
    .appfour{
      flex-grow: 4;
      form{
        input{
          background-color: rgb(246, 246, 246);
          width: 95%;
          height: 40px;
          border-radius: 8px;
          margin-top: 8px;
          text-align: center;
          border: none;
        }
        :nth-of-type(1){
          margin-bottom: 40px;

        }
        :nth-of-type(4){
          margin-top: 27px;
          background-color:#FF9800 ;
          border-color: #FF9800;
        }
      }
    }
    .appfif{
      text-align: center;
      color: rgb(189, 189, 189);
    }
  }
</style>
