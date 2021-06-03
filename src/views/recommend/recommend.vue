<template>
  <div class="top_recom">
      <div class="text_left">
          <span>主题咖乐园</span>
          <sup class="top-right">TM</sup>
      </div>
      <div class="text_right">
        <a href="" class="text_marvellous">
              <span class="cir"></span>
              <span>精彩放送</span>
        </a>
      </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
.top_recom{
    background-color: aqua;
    width: 100%;
    display: flex;
}
.top_recom .text_left{
    font-size: 20px;
    padding: 2% 0;
    width: 50%;    
}
.top_recom .text_left .top_right{
    font-size: 2px;
}
.top_recom .text_rightz{
    width: 50%;
}
.top_recom .text_rightz .text_marvellous{
    display: inline-block;
}
.top_recom .text_rightz .text_marvellous .cir{
    width: 20px;
    height: 20px; 
    display: block;   
    background-color:red;
}
</style>