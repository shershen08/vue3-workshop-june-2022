import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { loadProducts } from '@/services/catalog'

export const useProducts = (doImmediateDataloading = false) => {
    const store = useStore()
    const products = computed(() => store.state.products) // products = ref([])

    onMounted(() => {
        //A
        if(doImmediateDataloading) {
            loadProducts()
                .then(({data}) => {
                    store.commit('setProducs', data)
                })
        }
    })

    //B
    const loadData = () => {
        loadProducts()
        .then(({data}) => {
            store.commit('setProducs', data)
        })
    }

    return {
        products,
        loadData
    }
}