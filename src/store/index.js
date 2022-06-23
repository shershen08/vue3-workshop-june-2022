import { createStore } from 'vuex'

export default createStore({
    state: {
      products: [],
      selectedProduct: {},
      cart: []
    },
    mutations: {
        setProducs(state, data) {
          state.products = data
        },
        setActiveProduct(state, data) {
          state.selectedProduct = data
        },
    }
})