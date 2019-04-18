

// 0.  模块化编程 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 1. 定义路由组件 
import App from "./views/app.vue";
import Login from "./views/login.vue";
import Reg from "./views/reg.vue";
import coffeeIndex from "./components/swiper.vue";
import search from "./views/search.vue";
import shoppingCar from "./views/shoppingCar.vue";
import coffeeMenu from "./views/coffeeMenu.vue";
import breadMenu from "./views/breadMenu.vue";
import goodsInfo from "./views/goodsInfo.vue";

// 2. 配置 routes
const routes = [
    {
        path:"/app",
        name:'app',
        component:App,
        children:[
            {
                path:"/",
                name:"index",
                component:coffeeIndex
            },
            {
                path:"login",
                name:"login",
                component:Login
            },
            {
                path:"reg",
                name:"reg",
                component:Reg
            },
            {
                path:"search",
                name:"search",
                component:search
            },
            {
                path:"shoppingCar",
                name:"shoppingCar",
                component:shoppingCar
            },
            {
                path:"coffeeMenu",
                name:"coffeeMenu",
                component:coffeeMenu,
            },
            {
                path:"breadMenu",
                name:"breadMenu",
                component:breadMenu,
            },
            {
                path:"goodsInfo",
                name:"goodsInfo",
                component:goodsInfo
            },
            {
                path:'*',
                redirect:{name:"index"}
            }
        ]
    },
    {
        path:"*",
        redirect:{name:"index"}
    }
]


// 3. 创建路由
const router = new VueRouter({
    routes,
    mode:"hash"
})


// 暴露
export default router;
