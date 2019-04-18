

import Vue from "vue"
import VueResource from "vue-resource";
Vue.use(VueResource);  //全局声明 

import ElementUI from "element-ui";
Vue.use(ElementUI)  // 全局声明 

import store from "./vuex/store";

// import { mapState, mapActions } from "vuex";

import router from "./router"
// import Swiper from "./components/swiper.vue"
// Vue.component("app-swiper",Swiper);

router.beforeEach((to,from,next)=>{
    console.log(to)
    // if(to.path=="/app/login" || to.path=="/app/reg" || to.path=="/app" || to.path=="/app/coffeeMenu" || to.path=="/app/breadMenu" || to.path=="/app/goodsInfo"){
    if(to.path!="/app/shoppingCar"){
        next();   
    }else{
        if(!sessionStorage.username || sessionStorage.username==""){
            alert("尚未登录，请先前往登录！")
            next("/app/login");
        }else{
            next();
        }
    }
})


const vm = new Vue({
    store,
    el:"#app",
    router,   // 4 挂载到根实例   // 挂载到根实例  this.$store  
    data:{
        title:"星巴克|用每一杯咖啡传递星巴克独特的咖啡体验"
    }
})