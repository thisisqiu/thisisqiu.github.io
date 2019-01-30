<template>
  <div id='homeBox'>
    <Head title='首页' :show1='false' :show2='true' :url='url'></Head>
    <Carousel></Carousel>
    <p class="tip">
      <span style="width:37%">◇新人首单满198赠咖啡</span>
      <span style="width:31%">◇实付满100包邮</span>
      <span style="width:31%">◇全程冷链配送</span>
    </p>
    <div>
      <div class='goodsBox' v-for="(i,index) in list" :key="index">
        <router-link
          :to={name:i.name}
        >
          <img 
            :src='i.src'
          />
          <p>{{i.txt}}</p>
        </router-link>
      </div>
    </div>

    <div class='videoBox'>
      <video 
        src="https://artwork.starbucks.com.cn/video/STARBUCKS_20th_eSPORT_PLAYER_70sec_JAN16V1.mp4"
        controls="controls"
      >
        您的手机不支持video标签播放视频
      </video>
    </div>

  </div>
</template>

<script>
  import Head from "../components/Head.vue"
  import Carousel from "../components/Carousel.vue"

  export default {
    data(){
      return{
        url:location.href,
        list:[
          {txt:"浓醇三重黑巧克力蛋糕",name:"/goodsdetail",src:"https://www.starbucks.com.cn/images/products/triple-dark-chocolate-cake.jpg"},
          {txt:"蜂蜜提子司康",name:"/goodsdetail",src:"https://www.starbucks.com.cn/images/products/honey-raisin-scone.jpg"},
          {txt:"法式焦糖酥",name:"/goodsdetail",src:"https://www.starbucks.com.cn/images/products/french-caramel-bread.jpg"},
          {txt:"浓郁重芝士蛋糕",name:"/goodsdetail",src:"https://www.starbucks.com.cn/images/products/new-york-style-creamy-cheesecake.jpg"},
        ]
      }
    },
    components:{
      Head,
      Carousel
    }
  }

</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
#homeBox{
  width: 100%;
  background-color: #f7f7f7;
  overflow-y: scroll;
  margin-bottom: 62px;
  a{
    text-decoration: none;
  }
}
.tip{
      color:#9e6340;
      font-size: .8rem;
      width: 100%;
      line-height: 1.8rem;
      margin: 0 auto;
        span{
        float: left;
        text-align: center;
        // letter-spacing: 2rpx;
      }
  }
  .goodsBox{
    margin: 1% 3%;
    width: 44%;
    display: inline-block;
    img{
      width: 100%;
      height: 100%;
    }
    p{
      line-height: 1.5rem;
      font-size: 1rem;
      display: block;
      text-align: center;
      border-bottom: .08rem dashed #9e745b;
      color:#774c32;
    }
}
.videoBox{
  width: 98%;
  margin: 0 1%;
  margin-top: -20px;
  height: 20rem;
  video{
    width: 100%;
    height: 100%;
  }
}

</style>

