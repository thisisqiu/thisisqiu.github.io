<template>
    <div id='headBox'>
        <v-toolbar dark color="#7d5440">

            <span v-show='show1' class='span1' @click="goback">
                <v-btn icon>
                <v-icon>arrow_back</v-icon>
                </v-btn>
            </span>
            
            <v-spacer></v-spacer>

            <v-toolbar-title class="title">{{title}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <span v-show='show2' class='span2'>
                <v-btn icon>
                <v-icon>search</v-icon>
                </v-btn>
            </span>

        </v-toolbar>
    </div>
</template>
<script>
export default {
  props: {
    title: String,
    show1: {
      type: Boolean,
      default: false
    },
    show2: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
#headBox {
  background-color: #7d5440;
  width: 100%;
  height: 3.6rem;
  overflow: hidden;
  text-align: center;
  position: fixed;
  z-index: 99;
  top:0;
  left:0;
}
.title{
    position: absolute;
    width: 4.6rem;
    text-align: center;
    left:0;
    right:0;
    margin: 0 auto;
    top:30%;
    line-height: 3.6rem;
    font-size: 1.6rem;
}
</style>


