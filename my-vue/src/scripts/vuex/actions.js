const baseUrl = "http://47.93.229.143:3300/vue";
import axios from "axios";

export default {
    getUser({commit},{info}){
        commit("setUser",info);
    },
    regs({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    login({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    getCoffee({commit},{url,info,callback}){
        axios.get(baseUrl + url,{params:{limit:info}}).then(res=>{
            callback(res.data);
            commit("coffeeInfo",res.data);//匹配mutations里的方法coffeeInfo,传过去的数据
        })
    },
    getBread({commit},{url,callback}){
        axios.get(baseUrl + url).then(res=>{
            callback(res.data);
            commit("breadInfo",res.data);
        })
    },
    getGoodsInfo({commit},{url,info,callback}){
        axios.get(baseUrl + url,{params:{...info}}).then(res=>{
            callback(res.data);
        })
    },
    addMyCar({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    getMyCar({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    delByGoodsid({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    delByCheck({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    updateNumById({commit},{url,info,callback}){
        axios.post(baseUrl + url,info).then(res=>{
            callback(res.data);
        })
    },
    search({commit},{url,info,callback}){
        console.log(info)
        axios.post(baseUrl + url,info).then(res=>{
           commit("setSearchInfo",res.data); 
           callback(res.data);
        })
    }
}