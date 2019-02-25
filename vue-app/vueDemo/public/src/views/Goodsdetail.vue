<template>
  <div id='detailBox'>
    <Head title='详情' :show1='true' :show2='true'></Head>
    <div class="infoDiv"  v-if='detail'>
      <div>
          <img :src='imgUrl+detail.preview' alt=""/>
          <h2>{{detail.title}}</h2>
          💰<span >{{detail.price}}</span>
          <p >
              <span class="span">美味</span>
              <span class="span">人气</span>
              <span class="span" >聚会</span>
              <el-input-number size="mini" v-model="num"></el-input-number>
          </p>
          <p>{{detail.body}}</p>
          <router-link :to="{name:'goods'}"><img src="https://www.starbucks.com.cn/assets/images/featured/2018xmas2/food.jpg" alt="" style="width:98%;margin:0 1%"></router-link>
      </div>
    </div>
    <div class='footer'>
      <span style="background-color:#f6f6f6;color:#311e13">
        🛒(0)
      </span>
      <span style="background-color:rgb(134, 83, 53);color:#fff">
        加入购物车
      </span>
    </div>
  </div>
</template>

<script>
  import Head from "../components/Head.vue"
  import {mapState,mapActions,mapGetters} from "vuex";


  export default {
    data(){
      return{
        imgUrl:"https://www.starbucks.com.cn",
        detail:[],
        num:1
      }
    },
    methods:{
      ...mapActions(['getGoodsdetail']),

    },
    mounted(){
      let id = this.$route.query.id;
      this.getGoodsdetail({url:'getGoodsInfo',id,cb:data=>{
        if(data){
         this.detail = data
        }
      }});
    },
    components:{
      Head
    }
  }
</script>
<style lang="scss" scoped>
#detailBox{
  width: 100%;
  overflow: hidden;
  .footer{
    position: fixed;
    bottom: 56px;
    left: 0;
    z-index: 9;
    height: 52px;
    background-color: #fff;
    width: 100%;
    span{
        float: left;
        width: 50%;
        line-height: 50px;
        font-size: 18px;
        text-align: center;
    }
  }
}
.infoDiv{
      background-color: #f7f7f7;
      margin-top: 3.6rem;
      margin-bottom: 108px;
    div{
        img{
            width: 100%;
        }
        h2{
            margin-top: 6px;
            font-size: 30px;
            display: inline-block;
            line-height: 50px;
            width: 84%;
            text-indent: 4%;
            color:#000; 
            letter-spacing: 1px;      
        }
        p{
            display: inline-block;
            margin: 0 3%;
            color:#553522;
            line-height: 27px;
            width: 94%;
        }
        .span{
            display: inline-block;
            border: 1px solid #D5BFA7;
            border-radius: 100px;
            padding: 0 8px;
            color: #D5BFA7;
            margin: 2px 5px;
            font-size: 12px;
            text-align: center;
            color:#553522;
            background-color: #fff;
        }
        .el-input-number{
          margin-left: 15%;
        }
        div{
          img{
            width: 100%;
          }
        }
    }
}
</style>