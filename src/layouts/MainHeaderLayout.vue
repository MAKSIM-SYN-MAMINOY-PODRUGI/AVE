<template>
  <header class="header">
		<div class="header__topBox">
			<topBar />
		</div>
		<div class="header__navBox">
			<div class="header__navbar">
				<a  href="/" class="header__logo">avenue<span> fashion</span></a>
				<nav class="right">
					<navMenu />
				</nav>
			</div>
		</div>
		<h2 class="header__pageName">the <span>brand</span></h2>
		<p class="header__pageSlogan">company slogan goes here</p>
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
