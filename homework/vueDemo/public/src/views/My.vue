<template>
  <div id='myBox'>
    <Head title='我的' :show1='true' :show2='false'></Head>
    <div class="userBox">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546836637709&di=31f3918250338c707db05a3b05c303dd&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F01%2F13%2F558f86e45531f36c107900043a8a970d.jpg" alt="" onClick={this.goToCake}/>
      <!-- <h2>leson</h2> -->
      <button @click='goLogin'>登录/注册</button>
        <p>
          <span style="border-right:1px solid">优惠券</span><span>余额</span>
        </p>
    </div>
    <div class='orderBox'>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="📦我的订单" name="1" >
          <div>我的订单</div>
        </el-collapse-item>
        <el-collapse-item title="📫地址管理" name="2">
          <div>地址管理</div>
        </el-collapse-item>
        <el-collapse-item title="🎰优惠券" name="3">
          <div>优惠券</div>
        </el-collapse-item>
        <el-collapse-item title="💳余额充值" name="4">
          <div>余额充值</div>
        </el-collapse-item>
        <el-collapse-item title="用户反馈" name="5">
          <div>用户反馈</div>
        </el-collapse-item>
        <el-collapse-item title="用户协议" name="6">
          <div>用户协议</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <el-button type="danger" plain>注销</el-button>
  </div>
</template>

<script>
  import Head from "../components/Head.vue"

  export default {
    components:{
      Head
    },
    data(){
      return {
        activeNames: ['7']
      }
    },
    methods: {
      goLogin(){
        this.$router.push({path:"login"});
      }
    }
  }
</script>
<style lang="scss" scoped>
#myBox{
  width: 100%;
  margin-bottom: 56px;
}
.userBox{
    width: 100%;
    height: 16rem;
    position: relative;
    margin-top: 3.6rem;
    overflow: hidden;
    img{
        width: 100%;
    }
    button{
        position: absolute;
        left:30%;
        top:30%;
        width:40%;
        display: block;
        outline: 0 none;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        font-size: 1.5rem;
        height: 4.1rem;
        line-height: 4.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: rgb(250, 250, 250);
        background-color: rgb(141, 118, 101);
        border: 1PX solid #ddd;
        border-radius: 5px;
    }
    h2{
        position: absolute;
        top:36%;
        font-size: 3rem;
        left:20%;
        width:60%;
        text-align: center;
        color:rgb(43, 36, 31);
    }
    p{
        position: absolute;
        top:58%;
        left:27%;
        width:46%;
        line-height: 2rem;
        display: block;
        padding: .5rem 0;
        background-color: #fff;
        border: 0.5px solid #ddd;
        border-radius: .2rem;
        span{
            width: 49%;
            text-align: center;
            display: inline-block;
            font-size: 1.2rem;
            color:rgb(70, 59, 51);
            
        }
    }
}  
.orderBox{
  width: 100%;
  overflow: hidden;
  padding:0 1rem;
}  
</style>