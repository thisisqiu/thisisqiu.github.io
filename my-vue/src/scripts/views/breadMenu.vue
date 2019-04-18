<template>
    <div id="breadMenu" class="move">
        <div class="content">
            <a class="breads" v-for="(item,i) in breadInfo" :key=i >
                <div @click="showInfo(item.id,item.type)">
                <img :src="imgUrl + item.preview" alt=""><strong>{{item.title}}</strong></div>
            </a>
        </div>
        <router-link :to="{name:'coffeeMenu'}"><img src="https://www.starbucks.com.cn/assets/images/featured/2018xmas1/kv-7.jpg" alt="" style="height:315px;width:906px;margin-left:-22px"></router-link>
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
            ...mapState(["breadInfo"])
        },
        methods:{
            ...mapActions(["getBread"]),
            showInfo(id,type){
                this.$router.push({path:"/app/goodsInfo",query:{id}})
            },
        },
        mounted(){
            this.getBread({
                url:"/getBread",
                callback:data=>{
                    if(data){
                        console.log(data);
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
    #breadMenu{
        margin-top: 38px;
        margin-left: 24px;
        /* padding-bottom:18px; */
        height: 100%;
        position: relative;
    }
    #breadMenu .content{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        padding-bottom:10px;
    }
    #breadMenu .breads div{
        overflow: hidden;
        padding: 20px 20px;
        text-align: center;
        width: 172px;
        cursor: pointer;
        
    }
    #breadMenu .breads :hover{
        color:#02774c;

    }

    #breadMenu .breads div img{
        width: 172px;
        height: 172px;  
        border-radius: 50%;
        margin-bottom: 8px;
    }
    #breadMenu .breads div :hover{
        animation:pulse 1s;
    }
    #pageBox{
        position: absolute;
        right:42px;
        bottom: 32px;
    }
    .move{
        animation: bounceInUp  1s;
    }
</style>


