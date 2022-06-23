<template>
     <section class="text-center mb-4">
          <template v-if="productsList.isLoading">
            loading...
          </template>
        <div class="row wow fadeIn">
          <ProductList :itemsList="productsList.data"/>
        </div>

      </section>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'
import { onMounted, reactive } from 'vue'
import {loadProducts} from '@/services/catalog'
export default {
  components: {
    ProductList
  },
  setup(){
    const productsList = reactive({
      data: [],
      isLoading: false
    })

    onMounted(() => {
      productsList.isLoading = true
        
        loadProducts()
                .then(json=> {
                  productsList.data = json
                  productsList.isLoading = false
                })
    })

    return {
      productsList
    }
  }
}
</script>

<style>

</style>