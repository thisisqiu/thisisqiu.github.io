<template>
  <div id='app'>

    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
