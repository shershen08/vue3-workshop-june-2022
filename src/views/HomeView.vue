<template>
     <section class="text-center mb-4">
          
          <button @click="loadDataCallback">loadData</button>
          <template v-if="productsList.isLoading">
            loading...
          </template>

        <div class="row wow fadeIn">
          <ProductList :itemsList="productsList"/>
        </div>

      </section>
</template>

<script>
import ProductList from '@/components/product/ProductList.vue'
import {useProducts} from '@/hooks/products'

export default {
  components: {
    ProductList
  },
  setup(){

    const {products, loadData} = useProducts(true)
    
    //other use case
    //const {products} = useProducts(true)

    const loadDataCallback = () => {
      loadData()
    }

    return {
      productsList: products,
      loadDataCallback
    }
  }
}
</script>

<style>

</style>