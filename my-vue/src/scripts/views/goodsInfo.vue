<template>
    <div class="goodsInfo">
        <span class="backSpan" @click="back">↩</span>
        <div v-if="goodsInfo" class="goodsDiv move">
            <!-- <img :src="imgUrl + goodsInfo.preview" alt="" class="move"> -->

            <div class="magnify">
                <div class="preview-box" @mousemove="move($event)"  @mouseout="out" ref="previewBox">
                <img width="100%" :src="imgUrl + goodsInfo.preview" alt="">
                <div class="hover-box" ref="hoverBox"></div>
                </div>
                <div class="zoom-box" v-show="zoomVisiable" ref="zoomBox">
                <img :src="imgUrl + goodsInfo.preview" alt="" ref="bigImg">
                </div>
            </div>

            <div class="info">
                <h1>{{goodsInfo.title}}</h1>
                <span>价格: ￥{{goodsInfo.price}}</span>
                <p>{{goodsInfo.body}}</p>
                <el-button type="success" round style="margin-left:210px" @click="addCar(goodsInfo.id,goodsInfo.title,goodsInfo.preview,goodsInfo.price,goodsInfo.type,1)">加入购物车</el-button>
            </div>
        </div>
        <router-link :to="{name:'coffeeMenu'}"><img class="move1" src="https://www.starbucks.com.cn/assets/images/featured/2018xmas2/food.jpg" alt="" style="height:315px;width:906px"></router-link>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

function offset(el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return {
    left: left,
    top: top
  }
}

export default {
    name: 'magnify',
    props: {
        previewImg: {
        type: String,
        default: ''
        },
        zoomImg: {
        type: String,
        default: ''
        }
    },

    data(){
        return{
            imgUrl:"https://www.starbucks.com.cn",
            goodsInfo:"",

            zoomVisiable: false,
            hoverVisiable: false
        }
    },
    methods:{
        ...mapActions(["getGoodsInfo","addMyCar"]),//acitons方法名
        addCar(goodsid,goodstitle,goodsimg,goodsprice,type,num){
            if(sessionStorage.username){
               this.addMyCar({
                   url:"/addMyShoppingCar",//接口路由
                   info:{
                        username: sessionStorage.username,
                        goodsid,
                        goodstitle,
                        goodsimg,
                        goodsprice,
                        type,
                        num
                    },
                    callback:(data)=>{
                        this.open();
                    }
               })
            }else{
                   this.$confirm('您尚未登录,是否前往登录?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({name:'login'})
                    }).catch(() => {
                    
                    }); 
            }
        },
        open() {
            this.$message({
                showClose: true,
                message: '加入购物车成功！',
                type: 'success',
                duration:1000
            });
        },
        back(){
            this.$router.back();
        },

    out() {
      this.zoomVisiable = false;
    },
    move(ev) {
      this.init();
      // 鼠标距离屏幕距离
      let moveX = ev.clientX;
      let moveY = ev.clientY;
      // 大盒子距离顶部的距离
      let offsetLeft = offset(this.oPreviewBox).left;

      let offsetTop = offset(this.oPreviewBox).top;
      let left = moveX - offsetLeft - this.houverWidth / 2;
      let top
      if(this.scroll > 0) {
        top = moveY - offsetTop + this.scroll - this.houverHeight / 2;
      }else {
        top = moveY - offsetTop - this.houverHeight / 2;
      }
      let maxWidth = this.pWidth - this.houverWidth;
      let maxHeight = this.pWidth - this.houverHeight;
      left = left < 0 ? 0 : left > maxWidth ? maxWidth : left;
      top = top < 0 ? 0 : top > maxHeight ? maxHeight : top;
      let percentX = left / (maxWidth);
      let percentY = top / (maxHeight);
      this.oHoverBox.style.left = left + 'px';
      this.oHoverBox.style.top = top  + 'px';
      this.oBigImg.style.left = percentX * (this.bWidth - this.imgWidth) + 'px';
      this.oBigImg.style.top = percentY * (this.bHeight - this.imgHeight) + 'px';
      this.$emit('move', ev);
      this.zoomVisiable = true;
    },
    init() {
      this.oHoverBox = this.$refs.hoverBox;
      this.oPreviewBox = this.$refs.previewBox;
      this.oBigImg = this.$refs.bigImg;
      this.imgBox = this.$refs.zoomBox;
      this.houverWidth = this.oHoverBox.offsetWidth;
      this.houverHeight = this.oHoverBox.offsetHeight;
      this.pWidth = this.oPreviewBox.offsetWidth;
      this.pHeight = this.oPreviewBox.offsetHeight;
      this.imgWidth = this.oBigImg.offsetWidth;
      this.imgHeight = this.oBigImg.offsetHeight;
      this.bWidth = this.imgBox.offsetWidth;
      this.bHeight = this.imgBox.offsetHeight;
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
    }


    },
    mounted(){
        var id = this.$route.query.id;
        var type = this.$route.query.type;
        // console.log(this.$route);
        this.getGoodsInfo({
            url:"/getGoodsInfo",//接口拼接的url
            info:{id,type},
            callback:data=>{
                if(data){
                    this.goodsInfo = data;
                    // console.log(this.goodsInfo);
                }
            }
        })
    }
}


</script>
<style lang="scss">
    .goodsInfo{
        width: 100%;
        position:relative;
    }
    .backSpan{
        position:absolute;
        right:100px;
        top:24px;
        font-size:24px;
        cursor:pointer;
        width:33px;
        height:33px;
        z-index:8;
        color:#0b8a5b;
        background:#f1f1f1;
        line-height:33px;
        border-radius:50%;
        text-align:center;
    }
    .goodsDiv{
        padding: 80px 74px;
        width: 90%;
        position: relative;
    }
    .goodsDiv img{
        height: 300px;
        width: 300px;
    }
    .info{
        width: 360px;
        height: 200px;
        position: absolute;
        left:440px;
        top:120px;
    }
    .info h1{
        font-size: 28px;
        font-weight: 700;
        line-height: 54px;
    }
    .info p{
        line-height: 28px;
        letter-spacing: 1px;
        margin-bottom: 14px;
        margin-top: 10px;
    }
    .info span{
        font-size: 18px;
    }
    .move{
        animation: bounceInLeft 1s;
    }
    .move1{
        animation: bounceInRight 1s;
    }
    .info :hover{
        color:#0b8a5b;
    }

    .magnify {
    position: relative;
    .preview-box {
      width: 300px;
      height: 300px;
    //   border: 1px solid #dededd;
      position: relative;
      &:hover .hover-box{
        display: block;
      }
      .hover-box {
        position: absolute;
        display: none;
        left: 0;
        top: 0;
        width: 150px;
        height: 150px;
        // border: 1px solid #545454;
        background: url('https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png') repeat 0 0;
        // background-color:rgba(255,222,255,.2)
        cursor: move;
        user-select: none;
      }
    }
    .zoom-box {
      width: 300px;
      height: 300px;
      overflow: hidden;
      position: absolute;
      left: 300px;
      top: 0;
      img {
        width:600px;
        height:600px;
        position: absolute;
        top: 0;
        left: 0;
        z-index:9;
      }
    }
  }
</style>
