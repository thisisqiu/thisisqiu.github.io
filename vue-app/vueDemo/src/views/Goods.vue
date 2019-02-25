<template>
  <div id='goodsBox'>
    <Head title='商品' :show1='true' :show2='true'></Head>
    <div>

      <!-- <v-tabs
        slot="extension"
        v-model="currentItem"
        color="transparent"
        fixed-tabs
        slider-color="yellow"
      >
        <v-tab
          v-for="item in list"
          :href="'#tab-' + item"
          :key="item"
        >
          {{ item }}
        </v-tab>

      </v-tabs>

    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="item in list"
        :value="'tab-' + item"
        :key="item"
      >
        <v-card flat>
          <v-card-text>
            <h2>{{ item }}</h2>
            {{ text }}
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->



      <a class="cake" v-for="(item,i) in goodsList" :key=i >
          <div @click="showInfo(item.id)">
              <img :src="imgUrl + item.preview" alt="">
              <p>
                <strong>{{item.title}}</strong><span>💰{{item.price}}</span>
              </p>
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
            imgUrl:"https://www.starbucks.com.cn",
            list:['慕斯','奶油'],
            active: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            currentItem: 'tab-Web',
        }   
    },
    methods:{
      ...mapActions(['getGoods']),
      showInfo(id){
          this.$router.push({path:"goodsdetail",query:{id}})
      },
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
  margin-top: 3.6rem;
  margin-bottom: 56px;
  background-color: #f7f7f7;
}
.cake{
    width: 94%;
    margin: 3% 0;
    height: 2rem;
    img{
      width: 100%;
      // margin: 3% 0;
      height: 100%;
    }
    p{
      display: flex;
      justify-content: space-between;  
      margin-bottom: .9rem;
      strong,span{
        line-height: 1.7rem;
        font-size: 1.5rem;
        margin: 0 3%;
      }
    }
}
</style>