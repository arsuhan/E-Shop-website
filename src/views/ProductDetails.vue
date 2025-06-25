<!-- <script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const index = computed(() => Number(route.params.index))

const products = [
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '3550',
    img: '/images/iii.png',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '10800',
    img: '/images/d.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '20400',
    img: '/images/mm.png',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/pp.png',
  },
  // অন্যান্য ডেটা ...
]

const product = computed(() => products[index.value])
</script>

<template>
  <Header />
  <router-link to="">
  <div class="mt-16 py-8 lg:mx-12 xs:mx-5 lg:p-12 md:p-">
    <button class="border-2 py-2.5 p-4 hover:bg-gray-100">Continue Shofing</button>
  </div>
  </router-link>

 <div class="py-4 -mt-6">
  <div
    v-if="product"
    class="max-w-6xl mx-6 md:mx-6 lg:mx-auto bg-white shadow p-4 rounded flex flex-col md:flex-row items-center justify-between md:gap-60 xs:gap-6"
  >
    <!-- Image Section 
    <div class="w-full md:w-1/2 -mx-4">
      <img
        :src="index.img"
        alt="product image"
        class="w-full h-44 object-contain rounded md:mx-6 lg:mx-0"
      />
    </div>

    <!-- Text Section 
    <div class="lg:w-full md:w-1/2 flex flex-col items-start md:items-end text-right lg:mx-4">
      <h1 class="text-xl font-bold">{{ product.title }}</h1>
      <p class="text-gray-500 mt-1">Quantity : 10</p>
      <p class="text-lg font-semibold mt-1">Tk {{ product.prise }}</p>

      <!-- Quantity Control -
      <div class="flex items-center gap-2 mt-4">
        <button class="border px-2 py-1">-</button>
        <span>1</span>
        <button class="border px-2 py-1">+</button>
        <button class="bg-red-600 text-white px-3 py-1 rounded">🗑️</button>
      </div>
    </div>
  </div>
  <!-- Product not found 
  <div v-else class="text-center text-red-500 font-semibold mt-10">
    Product not found.
  </div>
  <div class="items-center justify-between text-right">
   <button class="bg-gray-600 text-white rounded px-4 p-1.5 font-serif text-xl md:mx-6 xs:mx-5 lg:mx-24 mt-14 hover:bg-gray-500">Order</button>
  </div>
  <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-12" />
  
 </div>

 <Footer/>

</template>


 -->

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const router = useRouter() // ✅ router instance

const index = computed(() => Number(route.params.index))

const products = [
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '3550',
    img: '/images/iii.png',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '10800',
    img: '/images/d.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '20400',
    img: '/images/mm.png',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/pp.png',
  },
  
]

const product = computed(() => products[index.value])
const quantity = ref(1)
const maxStock = 100

function increase() {
  if (quantity.value < maxStock) {
    quantity.value++
  }
}

function decrease() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function goToDashboard() {
  router.push('/dashboard') // ✅ Go to dashboard route
}
</script>

<template>
  <Header />
  
  <!-- Continue Shopping -->
  <router-link to="">
    <div class="mt-16 py-8 lg:mx-12 xs:mx-5 lg:p-12">
      <button class="border-2 py-2.5 p-4 hover:bg-gray-100">Continue Shopping</button>
    </div>
  </router-link>

  <!-- Product Display -->
  <div class="py-4 -mt-6">
    <div
      v-if="product"
      class="max-w-6xl mx-6 md:mx-6 lg:mx-auto bg-white shadow p-4 rounded flex flex-col md:flex-row items-center justify-between md:gap-60 xs:gap-6"
    >
      <!-- Image Section -->
      <div class="w-full md:w-1/2 -mx-4">
        <img
          :src="product.img"
          alt="product image"
          class="w-full h-44 object-contain rounded md:mx-6 lg:mx-0"
        />
      </div>

      <!-- Text Section -->
      <div class="lg:w-full md:w-1/2 flex flex-col items-start md:items-end text-right lg:mx-4">
        <h1 class="text-xl font-bold">{{ product.title }}</h1>
        <p class="text-gray-500 mt-1">Quantity : {{ maxStock }}</p>
        <p class="text-lg font-semibold mt-1">Tk {{ product.prise }}</p>

        <!-- Quantity Control -->
        <div class="flex items-center gap-2 mt-4">
          <button @click="decrease" class="border px-2 py-1">-</button>
          <span>{{ quantity }}</span>
          <button @click="increase" class="border px-2 py-1">+</button>
          <button class="bg-red-600 text-white px-3 py-1 rounded">🗑️</button>
        </div>
      </div>
    </div>

    <!-- Product not found -->
    <div v-else class="text-center text-red-500 font-semibold mt-10">
      Product not found.
    </div>

    <!-- Order Button -->
    <div class="items-center justify-between text-right">
      <button
        @click="goToDashboard"
        class="bg-gray-600 text-white rounded px-4 p-1.5 font-serif text-xl md:mx-6 xs:mx-5 lg:mx-24 mt-14 hover:bg-gray-500"
      >
        Order
      </button>
    </div>

    <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-12" />
  </div>

  <Footer />
</template>







