import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = 'http://47.93.229.143:3600/wechat/'
export default new Vuex.Store({
  state: {
    goodsList:[]
  },
  getters:{

  },
  mutations: {
    getGoods(state,data){
      state.goodsList = data
    }
  },
  actions: {
    getGoods({commit},{url,cb}){
      axios.get(url).then(res=>{
        cb();
        commit('getGoods',res.data)
      })
    }
  }
});
