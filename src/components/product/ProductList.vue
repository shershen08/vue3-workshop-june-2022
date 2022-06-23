<template>
    <h1>my list</h1>
    <ProductListItem v-for="item in itemsList" :product="item" :key="item.id"/>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'

const props = defineProps({
        itemsList: {
            type: Array,
            required: true
        }
})
</script>

<style>

</style>