<template>
  <NavBar/>
  <template v-if="!product.id">
  <HomeView/>
  </template>
  <template v-else>
  <ProductView @back="onGoBack"/>
  </template>
  <Footer/>
</template>

<script>
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { defineComponent, computed} from '@vue/runtime-core'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    HomeView,
    NavBar,
    Footer,
    ProductView
  },
  setup(){
    const store = useStore()
    const product = computed(() => store.state.selectedProduct) 

    const onGoBack = () => {
      console.log('onGoBack')
      store.commit('setActiveProduct', {})
    }

    return {
      product,
      onGoBack
    }
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
