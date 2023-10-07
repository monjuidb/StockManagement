<script setup>
import { useRoute } from 'vue-router';
import { reactive, onBeforeMount } from 'vue'

const route = useRoute()
const id = route.params.id
const product = reactive({})

onBeforeMount(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            product.id = data.id
            product.title = data.title
            product.brand = data.brand
            product.price = data.price
            product.stock = data.stock
            product.description=data.description
            product.category = data.category
            product.discountPercentage = data.discountPercentage            
            product.image = data.images[0]
        })
    
})
</script>

<template>

    <!-- component -->
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" :src="product.image" alt="Product Image" />
  <div class="p-4">
    
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Brand:{{product.brand}}</h2>
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Category:{{product.category}}</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{{product.description}}</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{{product.price}}</p>     
      <p class="ml-auto text-base font-medium text-green-500">{{product.discountPercentage}}% off</p>
    </div>
  </div>
</div>

</template>