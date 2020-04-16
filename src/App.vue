<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    Header, Footer
  }
}
</script>  

<style lang="scss">
@import 'assets/style.css';
</style>
