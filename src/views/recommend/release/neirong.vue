<template>
  <div>
    <img
      class="bgimg"
      :src="shuju.image"
      alt=""
    />
    <div class="rehui" @click="rehui">
        <img src="http://xmage.club/FsrsCvaPEcwU2vUNv-qHjXEPxoLV" alt="" />
    </div>
    <div class="delicious">
      <h3>{{shuju.name}}</h3>
      <div class="introduce">
        <div class="article1">
         {{shuju.description}}
        </div>
        <br />
        <div class="article3">
          {{shuju.content}}
        </div>
      </div>
    </div>
    <div class="button">
      <!--按钮-->
      <router-link target="_self" :to="{ path: '/acfollow' }">
        <van-button class="btn" round type="primary" color="orange"
          ><van-icon name="plus" color="red" />关注活动</van-button
        >
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate(){
    console.log(this.$route.params)
    var that = this;
    const usertoken = window.localStorage.getItem("token")
    console.log(usertoken)
    this.axios({
        method:'get',
        url:'/api/wonderful/'+this.$route.params.id,
        headers:{
            'Authorization':usertoken
        },
    }).then((res)=>{
        console.log(res.data.data)
        that.shuju=res.data.data;
    }).catch((err)=>{
        console.log(err)
    })
  },
    methods:{
        rehui(){
            this.$router.go(-1);
        }
    },
    data(){
      return{
        list:[],
        shuju:[]
      }
    }
}
</script>
<style scoped>
.rehui img{
    width: 35px;
    height: 35px;
    padding-top: 7px;
    padding-right: 10px;
}
.rehui{
    width: 50px;
    height: 50px;
    position:absolute;
    top: 10px;
    left: 0;
}
.bgimg {
  width: 100%;
}
.delicious {
  background-color: white;
  width: 100%;
  border-top: 1px solid gray;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  height: 700px;
  position: relative;
  top: -15px;
  z-index: 2;
}
.time {
  position: absolute;
  left: 5%;
}
.time span {
  margin-left: 100px;
}
.location {
  position: absolute;
  left: 5%;
  top: 90px;
}
.location span {
  margin-left: 130px;
}
h4 {
  position: absolute;
  top: 120px;
  left: 3%;
}
.introduce {
  width: 100%;
  position: absolute;
  top: 60px;
  text-indent: 2em;
  text-align: left;
  line-height: 23px;
  font-size: 14px;
}
.introduce .article2 {
  text-indent: 10px;
}
.button {
  width: 100%;
  height: 80px;
  background-color: white;
  position: fixed;
  z-index: 3;
  bottom: 0px;
}
.button .btn {
  margin-top: 10px;
}
</style>