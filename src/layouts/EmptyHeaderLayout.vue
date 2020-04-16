<template>
  <header class="header main">
    <div class="header__topBox">
      <topBar />
    </div>
    <div class="header__mainNavbar">
      <a  href="/" class="header__logo">avenue<span> fashion</span></a>
      <nav class="">
        <navMenu />
      </nav>
    </div>
    <h1 class="header__title">
      <span>a</span><span>V</span><span>E</span>
    </h1>
    <button class="colectionBt">
      shop men’s collection
    </button>
  </header>
</template>

<script>
import navMenu from '@/components/navMenu'
import topBar from '@/components/topBar'

export default {
  components: {
    navMenu, topBar
  }
}
</script>
