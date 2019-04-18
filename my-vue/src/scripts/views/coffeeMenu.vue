<template>
    <div id="coffeeMenu" class="move">
        <div class="content">
            <a class="coffees" v-for="(item,i) in coffeeInfo" :key=i >
                <div @click="showInfo(item.id,item.type)">
                    <img :src="imgUrl + item.preview" alt=""><strong>{{item.title}}</strong>
                </div>
            </a>
        </div>
        <div id="pageBox" class="move">
            <el-pagination
                layout="prev, pager, next"
                :total="23"
                :page-size="8"
                @current-change="handleCurrentChange">
            </el-pagination>
        </div>
        <router-link :to="{name:'breadMenu'}"><img src="https://www.starbucks.com.cn/assets/images/featured/2018xmas1/kv-7.jpg" alt="" style="height:315px;width:906px;margin-left:-22px"></router-link>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex";

    export default {
        data(){
            return {
                imgUrl:"https://www.starbucks.com.cn"
            }
        },
        computed:{
            ...mapState(["coffeeInfo"])
        },
        methods:{
            ...mapActions(["getCoffee"]),
            handleCurrentChange(val) {
                this.getCoffee({
                    url:"/getCoffee",
                    info:val,
                    callback:data=>{
                        if(data){
                            // console.log(data);
                        }
                    }
                })
            },
            showInfo(id,type){
                this.$router.push({path:"/app/goodsInfo",query:{id,type}})
            },
        },
        mounted(){
            this.getCoffee({
                url:"/getCoffee",//访问的接口路由
                info:"1",
                callback:data=>{
                    if(data){
                        // console.log(data);
                    }
                }
            })
        }
    }
</script>

<style scoped>
    a{
        color:#000;
    }
    #coffeeMenu{
        margin-top: 22px;
        margin-left: 26px;
        /* padding-bottom: 94px; */
        height: 100%;
        position: relative;
    }
    #coffeeMenu .content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
    }
    #coffeeMenu .coffees div{
        overflow: hidden;
        padding: 15px 20px;
        text-align: center;
        width: 172px;
        cursor: pointer;
        
    }
    #coffeeMenu .coffees :hover{
        color:#02774c;
    }
    #coffeeMenu .coffees div img{
        width: 172px;
        height: 172px;  
        border-radius: 50%;
        margin-bottom: 8px;
    }
    #coffeeMenu .coffees div :hover{
        animation:pulse 1s;
    }
    #pageBox{
        /* position: absolute; */
        /* right:42px;
        bottom: 32px; */
        text-align:right;
        margin:20px 10px 20px 0;
    }
    .move{
        animation: bounceInDown 1s;
    }
</style>


