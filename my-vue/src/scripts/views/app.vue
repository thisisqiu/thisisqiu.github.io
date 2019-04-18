<template>
    <div>
        <el-container height="413">
            <el-aside width="378px" backgroundColor="#D3DCE6">
                <div id="menuBox">
                    <app-menu></app-menu>
                </div>
            </el-aside>
            <el-main>
                <router-view></router-view>
                
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Menu from "../components/menu.vue";
import Swiper from "../components/swiper.vue";

export default {
  data() {
    return {
      imgs: [
        require("../../assets/imgs/img1.jpg"),
        require("../../assets/imgs/img2.jpg"),
        require("../../assets/imgs/img3.jpg")
      ]
    };
  },
  components: {
    "app-menu": Menu,
    "app-swiper": Swiper
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  color: #000;
}
html,body {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #fff;
  color: #333;
  text-align: center;
}
.el-main {
  background-color: #f7f7f7;
  color: #333;
  padding: 0;
  overflow: hidden;
  height: 100%;
}
#menuBox{
      position: fixed;
      left:0;
      top:0;
  }
</style>

