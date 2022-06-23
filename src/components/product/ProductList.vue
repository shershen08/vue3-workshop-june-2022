<template>
    <h1>my list</h1>
    <ProductListItem @click="selectProduct(item)" v-for="item in itemsList" :product="item" :key="item.id"/>
</template>

<script setup>
import { useStore } from 'vuex'
import ProductListItem from './ProductListItem.vue'

const store = useStore()

const props = defineProps({
        itemsList: {
            type: Array,
            required: true
        }
})

const selectProduct = (product) => {
    store.commit('setActiveProduct', product)
}
</script>

<style>

</style>