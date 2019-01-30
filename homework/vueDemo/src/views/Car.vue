<template>
  <div id='carBox'>
    <Head title='购物车' :show1='true' :show2='true'></Head>
    car-car
  </div>
</template>

<script>
  import Head from "../components/Head.vue"

  export default {
    components:{
      Head
    }
  }
</script>
<style lang="scss" scoped>
#carBox{
  width: 100%;
}
</style>