<template>
   <div>
      <el-carousel height="413px">
       <el-carousel-item v-for="(img,i) in imgs" :key="i">
          <router-link :to="{name:'coffeeMenu'}"><img :src="img" alt="" height="413px" width="100%"></router-link>
      </el-carousel-item>
    </el-carousel>
    <ul id="show">
        <router-link :to="{name:'breadMenu'}"><li v-for="(img,i) in imgs2" :key="i" ><img :src="img" alt=""></li></router-link>
    </ul>
    
        <div id="con">
            <h2>星享俱乐部</h2>
            <div>使用星巴克App注册成为星享俱乐部新会员可获赠“圣诞特饮邀请券”的活动， 12月17日一经推出，市场反响热烈，吸引了众多顾客的参与。但同时，我们发现出现了大量的非正常访问。为维护活动的公平性，该活动现已提前结束。星巴克始终将顾客体验置于首位，我们会很快推出更多个性化活动，以回馈广大新老会员。</div>
            <router-link :to="{name:'shoppingCar'}">
                <img src="../../assets/imgs/logo2.svg" alt="" class="img">
            </router-link>    
        </div>
    
   </div>
</template>

<script>

  export default {//导出
    data(){
      return{
        imgs:[
          require("../../assets/imgs/lb1.jpg"),
          require("../../assets/imgs/lb2.jpg")
        ],
        imgs2:[
          require("../../assets/imgs/img1.jpg"),
          require("../../assets/imgs/img2.jpg"),
          require("../../assets/imgs/img3.jpg")
        ]
      }
    },
      created(){
      
      
      }
  }
</script>
<style scoped>
    .el-carousel,.el-carousel__container{
      height:413px;
    }
    #show{
        padding-top: 24px;
        padding-left: 24px;
        margin-bottom: 24px;
        height: 166px;
    }
    #show li{
        float: left;
        padding-right: 21px;
    }
    #show li img{
        width: 262px;
        height: 166px;
    }
    #show li :hover{
        opacity: 0.9;
        box-shadow: 1px 1px 9px 1px #bcbcbc;
    }
    #con{
        position: relative;
        background-color: #fff;
        padding: 20px 64px;
    }
    #con h2{
        margin-top: 24px;
        font-weight: 400;
        line-height: 40px;
        font-size: 24px;
    }
    #con div{
        margin-top: 14px;
        width: 400px;
        height: 200px;
        line-height: 24px;
        font-size: 16px;
        color:#707070;
        letter-spacing: 1px;
    }
    .img{
        position: absolute;
        right:70px;
        top:136px;
    }
</style>

