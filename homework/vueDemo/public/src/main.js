import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'


// 启动的主入口文件 
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
