<template>
  <NavBar/>
  <HomeView/>
  <Footer/>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
// import ProductView from '@/views/ProductView.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  components: {
    HomeView,
    NavBar,
    Footer
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
