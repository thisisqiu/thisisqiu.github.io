<template>
    <div class="shoppingCar">
         <h1>购物车</h1>
            <div id="shoppingcar-body">
                <ul class="th">
                 <li style="width:60px">序号</li>
                 <li style="width:60px">选中</li>
                 <li style="width:150px">商品图片</li>
                 <li style="width:200px">商品名称</li>
                 <li style="width:80px">单价</li>
                 <li style="width:120px">商品数量</li>
                 <li style="width:130px">小计</li>
                 <li style="width:60px">操作</li>
                </ul>
                <div id="tbody">
                    <h3 v-if="myGoods.length <= 0">
                        购物车为空?<router-link :to="{name:'coffeeMenu'}" style="color:#0b8a5b">去逛逛</router-link>
                    </h3>
                    <ul class="tr" v-if="myGoods.length > 0" v-for="(item,i) in myGoods" :key=i>
                        <li style="width:60px;color:#025536">{{i + 1}}</li>
                        <li style="width:60px">
                            <el-checkbox v-model="item.check" ></el-checkbox>
                        </li>
                        <li style="width:150px" @click="showInfo(item.goodsid,item.type)"><img :src="imgUrl + item.goodsimg" alt="" style="width:120px;height:120px"></li>
                        <li style="width:200px;cursor:pointer;" @click="showInfo(item.goodsid,item.type)">{{item.goodstitle}}</li>
                        <li style="width:80px" @click="showInfo(item.goodsid,item.type)">{{item.goodsprice}}</li>
                        <li style="width:120px">
                            <el-input-number v-model="item.num" value="item.num" controls-position="right" @change="handleChange(item.num,item.id)" :min="1" :max="99" size="mini"></el-input-number>
                        </li>
                        <li style="width:130px">{{item.goodsprice * item.num}}</li>
                        <li style="width:60px;cursor:pointer;color:#f56c6c;font-weight:600;" @click="del(item.id,i)">删除</li>
                    </ul>
            </div>
            <div id="tbottom">
                <ul >
                    <li style="margin-left:32px;">
                        全选: <el-checkbox v-model="all" v-if="myGoods.length > 0"></el-checkbox>
                    </li>
                    <li style="width: 60px;text-align: right;margin-left:10px">
                        <a @click="delCheck()" style="text-decoration: none;color:red;cursor: pointer">删除</a>
                    </li>
                    <li style="margin-left:170px;width:200px;text-align:left">
                        已选: <span>{{selectednum}}</span>
                    </li>
                    <li style="width:200px;text-align:left">
                        合计: <span>￥{{pricetotal}}</span>
                    </li>
                    <li style="margin-left:50px;cursor: pointer;color:#fff;color:#f7f7f7;font-size:26px;letter-spacing:4px" @click="pay()">结算</li>
                </ul>
            </div>
        </div>
        <router-link :to="{name:'coffeeMenu'}">
            <img class="move1" src="https://www.starbucks.com.cn/assets/images/featured/2018xmas1/kv-8.jpg" alt="" style="height:315px;width:874px;margin-bottom:6px">
        </router-link>
    </div>
</template>
<script>

import { mapState, mapActions } from "vuex";

export default {
    data(){
        return{
            username:"",
            myGoods:[],
            imgUrl:"https://www.starbucks.com.cn",
            delList:[],
            checkList:[],
            newList:[],
            selectednum:0,
        }
    },
    methods:{
        ...mapActions(["getMyCar","delByGoodsid","delByCheck","updateNumById"]),
        showInfo(id,type){
            this.$router.push({path:"/app/goodsInfo",query:{id,type}})
        },
        handleChange(num,id) {
            this.updateNumById({
                url:"/updateNum",
                info:{
                    id,
                    num
                },
                callback:(data)=>{
                    this.open2();
                }
            })
        },
        del(id,i){
            this.delByGoodsid({
                url:"/del",
                info:{
                    id
                },
                callback:(data)=>{
                    this.open1();
                    this.myGoods.splice(i,1)
                }
            })
        },
        delCheck(){
            this.newList = [];
            this.myGoods.forEach((item,i)=>{
                if(item.check){//如果未被选中 false
                    this.delList.push(item.id);
                }else{
                    this.newList.push(item);
                }
            });
            if(this.delList.length > 0){
                // alert(this.delList)
                this.delByCheck({
                    url:"/delCheck",
                    info:{
                        delList:this.delList
                    },
                    callback:(data)=>{
                        this.open1();
                        this.myGoods = this.newList;
                    }
                })
            }
        },
        pay(){
            this.myGoods.forEach((item,i)=>{
                if(item.check){//如果未被选中 false
                    this.delList.push(item.id);
                }else{
                    this.newList.push(item);
                }
            });
            if(this.delList.length > 0){
                // console.log(this.delList)
                this.delByCheck({
                    url:"/delCheck",
                    info:{
                        delList:this.delList
                    },
                    callback:(data)=>{
                        this.open3();
                        this.myGoods = this.newList;
                    }
                })
            }else{
                this.open4();
            }
        },
        open1() {
            this.$message({
            showClose: true,
            message: '删除商品成功！',
            duration:1500
            });
        },
        open2() {
            this.$message({
            showClose: true,
            message: '数量修改成功！',
            type: 'success',
            duration:1000
            });
        },
         open3() {
            this.$message({
            showClose: true,
            message: '结算成功！',
            type: 'success',
            duration:1500
            });
        },
        open4() {
            this.$message({
            showClose: true,
            message: '请选择商品结算！',
            type: 'warning',
            duration:1500           
            });
        },
    },
    mounted(){
        this.username = sessionStorage.username;
        this.getMyCar({
            url:"/getMyCarInfo",
            info:{
                username:this.username,
            },
            callback:(data)=>{
                this.myGoods = data;
            }
        });
    },
    computed:{
        all:{
            get(){
                var flag = true;
                this.myGoods.forEach((item,i)=>{
                    if(!item.check){//如果未被选中 false
                        flag = false;
                    }
                });
                return flag;
            },
            set(val){
                if(this.myGoods.length < 1){
                    return false;
                }
                this.myGoods = this.myGoods.map((item,i)=>{
                    item.check = val;
                    return item;
                });
            },
        },
        pricetotal:{
            get(){
                var count = 0;//初始赋值为0 避免叠加
                this.myGoods.forEach((item)=>{
                    if(item.check){
                        count += item.goodsprice * item.num;
                    }
                })
                return count;
            },
            set(){

            }
        },
    },
    watch:{
        myGoods:{//深度监听myGoods
            handler(newVal){
                this.pricetotal = 0;
                this.selectednum = 0;
                newVal.forEach((item)=>{
                    if(item.check){//页面加载完后 选中状态被改变才会进入
                        this.pricetotal += item.goodsprice * item.num;
                        this.selectednum++;
                    }
                })
            },
            deep:true
        }
    },
}
</script>

<style>
a{
    color:#000;
}
.shoppingCar{
    margin: 0 4px;
}
.shoppingCar h1{
    font-size: 34px;
    line-height: 80px;
    /* margin-bottom: 10px; */
    font-weight: 700;
    text-align: center;
    color:#025536;
}

#shoppingcar-body {
  background-color: #f7f7f7;
}

#shoppingcar-body .th {
  height: 50px;
  background-color: #0b8a5b;
  clear: both;
  border-radius: 5px;
  color:#f7f7f7;
}

#shoppingcar-body .th li {
  float: left;
  line-height: 50px;
  font-size: 16px;
  width: 150px;
  text-align: center;
}

#shoppingcar-body .th li input {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

#shoppingcar-body #tbody {
  width: 100%;
}

#shoppingcar-body #tbody h3 {
  text-align: center;
  font-size: 24px;
  line-height: 80px;
}

#shoppingcar-body #tbody .tr {
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  overflow: hidden;
  border-bottom: .5px solid #31c27c;
}

#shoppingcar-body #tbody .tr li {
  font-size: 16px;
  float: left;
}

#shoppingcar-body #tbody .tr li img {
  margin: 15px auto;
  width: 110px;
  height: 110px;
  cursor: pointer;
}

#shoppingcar-body #tbody .tr li span {
  color:#025536;
}

#shoppingcar-body #tbody .tr li p {
  width: 174.28px;
  color: #dd663b;
  cursor: pointer;
}

#shoppingcar-body #tbottom {
  height: 64px;
  line-height: 64px;
  text-align: center;
  background-color: #0b8a5b;
}

#shoppingcar-body #tbottom ul {
  width: 100%;
}

#shoppingcar-body #tbottom ul li {
  float: left;
  font-size: 20px;
}

#shoppingcar-body #tbottom ul li span {
  display: inline-block;
}

/* .move{
    animation: fadeIn 1s;
} */
</style>


