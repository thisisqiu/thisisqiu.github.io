<template>
  <div id='goodsBox'>
    <Head title='商品' :show1='true' :show2='true'></Head>
    <div>
      <a class="cake" v-for="(item,i) in goodsList" :key=i >
          <div @click="showInfo(item.id,item.type)">
              <img :src="imgUrl + item.preview" alt=""><strong>{{item.title}}</strong>
          </div>
      </a>

    </div>

  </div>
</template>

<script>
  import Head from "../components/Head.vue"
  import {mapState,mapActions,mapGetters} from "vuex";

  export default {
    components:{
      Head
    },
    data(){
        return {
            imgUrl:"https://www.starbucks.com.cn"
        }
    },
    methods:{
      ...mapActions(['getGoods']),
      open() {
        this.$message({
          showClose: true,
          message: '加载数据成功！',
          type: 'success',
          duration:1000
          });
        }
    },
    mounted(){
      this.getGoods({url:'getGood',cb:()=>{
        this.open();
      }})
    },
    computed:{
      ...mapState(['goodsList'])
    }


  }

</script>
<style lang="scss" scoped>
#goodsBox{
  width: 100%;
}
.cake{
    width: 98%;
    margin: 0 1%;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
    }
}
</style>