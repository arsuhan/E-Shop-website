<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()


const states = reactive([
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
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/hh.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/f.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/hh.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/d.jpg',
  }
]);

function goToDetails(index) {
  router.push({ name: 'ProductDetails', params: { index } })
}
</script>

<template>
  <section class="text-center py-16">
    <h1 class="text-3xl md:text-4xl font-bold">Our Products</h1>
  </section>

  <section class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xs:gap-3 px-4 md:px-10 mt-10">
    <div
      v-for="(state, index) in states"
      :key="index"
      class="bg-white shadow-md overflow-hidden group transition transform hover:scale-105"
    >
      <div class="relative h-52 xs:h-24 md:h-44 lg:h-52">
        <img :src="state.img" alt="Product Image" class="w-full h-full object-cover">

        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-3 transition-opacity duration-300">
          <button @click="goToDetails(index)" class="bg-white text-yellow-700 font-semibold px-4 py-2 rounded">Buy Now</button>

          <div class="hidden sm:flex space-x-4 text-white text-sm">
            <span class="flex items-center space-x-1"><i class="ri-share-line"></i><span>Share</span></span>
            <span class="flex items-center space-x-1"><i class="ri-exchange-line"></i><span>Compare</span></span>
            <span class="flex items-center space-x-1"><i class="ri-heart-line"></i><span>Like</span></span>
          </div>
        </div>
      </div>
      <div class="lg:p-4 xs:p-2 ">
        <h3 class="font-semibold text-lg md:text-xl">{{ state.title }}</h3>
        <p class="text-gray-500 text-sm">{{ state.subTitle }}</p>
        <p class="text-gray-800 font-bold mt-1">Rp: {{ state.prise }}</p>
      </div>
    </div>
  </section>

  <!-- <section class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 md:px-10">
    <div 
      v-for="(state, index) in states" 
      :key="index" 
      class="bg-white shadow-md overflow-hidden border lg:h-[320px] group transition transform hover:scale-105 md:h-[300px]"
    >
        <div class="relative h-52 sm:h-60 md:h-44 lg:h-52">
          <img :src="state.img" alt="Product Image" class="w-full lg:h-full object-cover">
        
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-3 transition-opacity duration-300">
          <button class="bg-white text-yellow-700 font-semibold px-4 py-2 rounded">Buy Now</button>
          <div class="flex space-x-4 text-white text-sm">
            <span class="flex items-center space-x-1"><i class="ri-share-line"></i> <span>Share</span></span>
            <span class="flex items-center space-x-1"><i class="ri-exchange-line"></i> <span>Compare</span></span>
            <span class="flex items-center space-x-1"><i class="ri-heart-line"></i> <span>Like</span></span>
          </div>
        </div>
      </div>


      <div class="p-4 mt-2">
        <h3 class="font-semibold text-lg md:text-xl">{{ state.title }}</h3>
        <p class="text-gray-500 text-sm">{{ state.subTitle }}</p>
        <p class="text-gray-800 font-bold mt-1">Rp: {{ state.prise }}</p>
      </div>
    </div>
  </section> -->

  <!-- Show More Button -->
  <section class="flex justify-center mt-10">
    <router-link to="/all-product">
      <button class="text-black bg-white border-2 border-orange-400 hover:bg-orange-200 font-bold px-10 py-3 text-lg">
        Show More
      </button>
    </router-link>
  </section>
</template>