<template>
  <div id='myBox'>
    <Head title='我的' :show1='true' :show2='false'></Head>
    my-my
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
#myBox{
  width: 100%;
}
</style>