<template>
    <div class="searchBox">
        <div class="searchDiv move" >
            <input type="text" v-model="key" placeholder="搜索菜单">
            <img :src="imgs[0]" alt="" @click="changeSearch">
            <p>大家都在搜</p>
            <span @click="coffee">咖啡</span>
        </div>
        <div class="searchCon move">
            <a class="goods" v-for="(item,i) in searchInfo" :key=i >
                <div @click="showInfo(item.id,item.type)">
                    <img :src="imgUrl + item.preview" alt=""><strong>{{item.title}}</strong>
                </div>
            </a>
        </div>
        <router-link :to="{name:'coffeeMenu'}" ><img class="move1" src="https://www.starbucks.com.cn/assets/images/featured/2018xmas1/kv-7.jpg" alt="" style="height:315px;width:906px;margin-left:-120px;margin-top:60px"></router-link>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";


export default {
    data(){
        return{
            imgUrl:"https://www.starbucks.com.cn",
            imgs:[
                require("../../assets/imgs/search.svg")
            ],
            key:""
        }
    },
    computed:{
        ...mapState(["searchInfo"])
    },
    methods:{
        ...mapActions(["search"]),
        showInfo(id,type){
            this.$router.push({path:"/app/goodsInfo",query:{id,type}})
        },
        changeSearch(){
            if(this.key){
                this.search({
                    url:"/searchByKey",
                    info:{
                        key:this.key
                    },
                    callback:(data)=>{
                        console.log(data)
                    }
                })
            }
        },
        coffee(){
            this.search({
                url:"/searchByKey",
                info:{
                    key:"咖啡"
                },
                callback:(data)=>{
                    console.log(data)
                }
            })
        }
    }
}
</script>
<style>
    .searchBox{
        padding: 100px 120px 0;
    }
    .searchDiv{
        position: relative;
        width: 480px;
        /* text-align: center; */
        margin: 0 auto;
    }
    .searchDiv input{
        background: none;
        border: 0;
        border-bottom: 1px solid #02a963;
        -ms-border-bottom: 1px solid #edebe9;
        border-radius: 0;
        box-sizing: border-box;
        display: block;
        outline:none;
        width:100%;
        line-height: 32px;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .searchDiv img{
        position: absolute;
        right:-2px;
        top:4px;
        cursor: pointer;
    }
    .searchDiv p{
        font-size: 14px;
        display: inline-block;
        color:#fff;
        background-color: #03a569;
        line-height: 28px;
        height: 28px;
        padding: 0 8px;
    }
    .searchDiv span{
        display: inline-block;
        width: 60px;
        line-height: 28px;
        color:#006440;
        text-align: center;
        font-size: 14px;
        margin-bottom: 50px;
        cursor: pointer;
    }
    .searchCon{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        padding: 40px 0;
    }
    .searchCon div{
        overflow: hidden;
        padding: 15px 15px;
        text-align: center;
        width: 130px;
        cursor: pointer;
        font-size: 14px;
    }
    .searchCon .goods :hover{
        color:#02774c;
        animation:pulse 1s;
    }
    .searchCon div img{
        width: 120px;
        height: 120px;  
        border-radius: 50%;
        margin-bottom: 8px;
    }
    .move{
        animation: fadeInDown 1s;
    }
    .move1{
        animation: fadeIn 1s;
    }
</style>
