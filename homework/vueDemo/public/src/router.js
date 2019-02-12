import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue"
import Home from "./views/Home.vue";
import Goods from './views/Goods.vue';
import Car from "./views/Car.vue";
import My from "./views/My.vue";
import Goodsdetail from "./views/Goodsdetail";
import Login from './views/Login';
import Search from "./views/Search";


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/app",
      component:Layout,
      name: "app",
      children:[
        {path:"",redirect:{name:'home'}},
        {path:"home",component:Home,name:'home'},
        {path:"goods",component:Goods,name:"goods"},
        {path:"car",component:Car,name:"car"},
        {path:"my",component:My,name:"my"},
        {path:'goodsdetail',component:Goodsdetail,name:'goodsdetail'},
        {path:'login',component:Login,name:'login'},
        {path:'search',component:Search,name:'search'},
        {path:"*",redirect:{name:"home"}},
      ]
    },
    {path:'*',redirect:{name:'home'}},
  ],
  mode:'hash'
});
