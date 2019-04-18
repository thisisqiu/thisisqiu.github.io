<template>
  <div style="position:relative" id="nav">
    <div id="head">
      <a id="logo" width=36 >
      <router-link :to="{path:'/app'}"><img :src="imgs[0]" alt="" height=36 width=36></router-link>
      </a>
      <p class="menu">
           <router-link :to="{path:'/app'}">
            <span>星巴克🎄</span>
          </router-link> 
          <router-link :to="{name:'shoppingCar'}" >
            <span>购物车</span>
          </router-link>
          <a href="javascript:void(0)">
            <el-dropdown style="margin-left:-42px">
              <span class="el-dropdown-link" >
                菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link :to="{name:'coffeeMenu'}"><el-dropdown-item>饮品☕</el-dropdown-item></router-link>
                <router-link :to="{name:'breadMenu'}"><el-dropdown-item >美食🎂</el-dropdown-item></router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
      </p>
      <router-link id="nav-menu" :to="{name:'search'}"><img :src="imgs[1]" alt="" height=24 width=24 ></router-link>
    </div>
    <div id="menu-body">
      <div id="loginBox">
        <h2 id="loginH2">心情惬意，来杯咖啡吧🌟</h2>
        <p class="login" v-if='!username'>
            <router-link :to="{name:'login'}">登录</router-link>
            <router-link :to="{name:'reg'}">注册</router-link>
        </p>
        <p v-if="username" class="user">
          <span>欢迎你！</span><span style="color:#054d31">{{username}}</span>
         <el-button type="danger" size="small" @click="exit()">注销</el-button>
        </p>
      </div>
    </div>  
      <!-- <h2>登录或创建一个新帐户 🌟</h2> -->
      <!-- <h2>今天的心情是茶🍵还是咖啡☕呢?</h2> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
  
  export default {
    data() {
      return {
        imgs:[
          require("../../assets/imgs/logo.svg"),
          require("../../assets/imgs/search.svg")
        ],
        username:"",
      };
    },
    methods:{
      ...mapActions(["getUser"]),
      exit(){
        sessionStorage.username = "";
        this.username = sessionStorage.username;
        // this.getUser({info:"0"});
        this.$router.push("/app");
      }
    },
    mounted(){
      this.username = sessionStorage.username;
      // sessionStorage.username = user;
    },
     computed:{
        ...mapState(["user"])
    },
  }
</script>

<style scoped>
  a{
    display: inline
  }
  #nav{
    padding:24px 0 0 24px;
  }
  #head{
    position: relative;
    height: 48px;
    width: 90%;
  }
  #head .menu{
    display:inline-block;
    position: absolute;
    left:42px;
    top:2px;
    height: 48px;
    width: 300px;
  }
  #nav-menu{
      position: absolute;
      left: 304px;
      top: 7px;
  }
  #head span{
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 5px 12px 5px;
    color:#2c2825;
    float: left;
  }
  #menu-body{
      padding-right:28px;
  }
  #loginH2{
      margin: 170px 42px 34px 12px; 
      font-weight: bold;
      font-size: 26px;
  }
  #menu-body #loginBox .login a{
      font-size: 16px;
      line-height: 36px;
      padding:0 18px;
      color:#02a963;
      display: inline-block;
      border: 1px solid #02a963;
      border-radius: 6px;
      margin-right:30px;
  }

  #menu-body #loginBox .user span{
    font-size: 22px;
    line-height: 34px;
  }
  #loginBox :hover {
    color:#006440;
  }
</style>

