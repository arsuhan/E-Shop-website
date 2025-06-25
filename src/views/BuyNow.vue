<template>
    <div class="container mx-auto p-6">
      <div v-if="product" class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img :src="product.img" alt="Product Image" class="w-full h-auto object-cover rounded-lg" />
        </div>
        <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h2 class="text-3xl font-bold">{{ product.title }}</h2>
          <p class="text-gray-600 mt-2">{{ product.subTitle }}</p>
          <p class="text-gray-800 font-bold mt-4">Rp: {{ product.prise }}</p>
          <button class="mt-6 px-6 py-2 bg-yellow-600 text-white rounded-full">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const product = ref(null);
  const route = useRoute();
  
  onMounted(() => {
    const productId = route.params.id;
  
    // Example product data; replace with actual data fetching logic
    const products = [
      {
        id: '1',
        title: 'Silicone Case',
        subTitle: 'Smooth and stylish protection for your iPhone.',
        prise: '399',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT203?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1692998186804',
      },
      {
        id: '2',
        title: 'MagSafe Charger',
        subTitle: 'Fast wireless charging with ease and convenience.',
        prise: '999',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT2H3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1692998296174',
      },
      // Add more products here
    ];
  
    product.value = products.find((product) => product.id === productId);
  });
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>