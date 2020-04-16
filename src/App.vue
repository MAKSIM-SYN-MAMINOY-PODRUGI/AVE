<template>
  <div id="app">
    <div :is="layout"></div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import MainHeaderLayout from '@/layouts/MainHeaderLayout'
import EmptyHeaderLayout from '@/layouts/EmptyHeaderLayout'

import Footer from '@/layouts/Footer'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-header-layout'
    }
  },
  components: {
    MainHeaderLayout, EmptyHeaderLayout, Footer
  }
}
</script>  

<style lang="scss">
@import 'assets/style.css';
</style>
