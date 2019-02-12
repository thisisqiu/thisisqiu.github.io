import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = 'http://47.93.229.143:3600/wechat/'
export default new Vuex.Store({
  state: {
    loginUser:'',
    loginFlag:false,
    goodsList:[],
    goodsdetail:[],
  },
  getters:{

  },
  mutations: {
    getGoods(state,data){
      state.goodsList = data
    },
    getGoodsdetail(state,data){
      state.goodsdetail = data
    }
  },
  actions: {
    Login({commit},{url,username,userpwd,cb}){

    },
    getGoods({commit},{url,cb}){
      axios.get(url).then(res=>{
        cb();
        commit('getGoods',res.data)
      })
    },
    getGoodsdetail({commit},{url,id,cb}){
      axios.get(url,{params:{id}}).then(res=>{
        // console.log(res.data)
        cb(res.data)
        commit('getGoodsdetail',res.data)
      })
    }
  }
});
