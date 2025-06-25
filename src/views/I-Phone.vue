<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { reactive } from 'vue';

const states = reactive([
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/jj.png',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '7080',
    img: '/images/bed-2.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '3550',
    img: '/images/bed-3.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '10800',
    img: '/images/a.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '10500',
    img: '/images/b.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '20400',
    img: '/images/c.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/d.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '9800',
    img: '/images/e.jpg',
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
    prise: '2050',
    img: '/images/gg.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/ii.jpg',
  },
  {
    title: 'This is supa',
    subTitle: 'Home meet',
    prise: '50300',
    img: '/images/hh.jpg',
  },
]);
</script>

<template>
    <Header />
    <div class="bg-white text-gray-800">
  
      <!-- Hero Section -->
      <section class="flex flex-col mt-20 md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        <div class="md:w-1/2 text-center -mt-10 md:text-left space-y-6">
          <h2 class="text-4xl font-bold text-black">Discover Premium steel furniture Accessories</h2>
          <p class="text-gray-600">Protect your device and elevate your style with our exclusive collection.</p>
          <a href="#" class="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">Shop Now</a>
        </div>
        <div class=" mt-8 md:mt-0">
          <img src="../views/vvv.jpeg.jpeg" alt="iPhone" class="w-full h-80 rounded-xl shadow-lg" />
        </div>
      </section>
  
      <!-- Featured Products -->
      <section class=" bg-gray-100">
           <h3 class="text-2xl font-semibold mb-8 text-center">Featured Accessories</h3>


  <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xs:gap-3 px-4 md:px-10">
    <div
      v-for="(state, index) in states"
      :key="index"
      class="bg-white shadow-md overflow-hidden border group transition transform hover:scale-105"
    >
      <!-- Image -->
      <div class="relative">
        <img :src="state.img" alt="Product Image"
          class="w-full h-48 xs:h-24 md:h-44 lg:h-52 object-cover" />

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-3 transition-opacity duration-300">
          <button class="bg-white text-yellow-700 font-semibold px-4 py-2 rounded hover:bg-slate-100">Buy Now</button>
          <div class="hidden sm:flex space-x-4 text-white text-sm">
            <span class="flex items-center space-x-1"><i class="ri-share-line"></i><span>Share</span></span>
            <span class="flex items-center space-x-1"><i class="ri-exchange-line"></i><span>Compare</span></span>
            <span class="flex items-center space-x-1"><i class="ri-heart-line"></i><span>Like</span></span>
          </div>
        </div>
      </div>

      <!-- Info -->
      <div class="lg:p-4 xs:p-2">
        <h3 class="font-semibold text-lg md:text-xl">{{ state.title }}</h3>
        <p class="text-gray-500 text-sm">{{ state.subTitle }}</p>
        <p class="text-gray-800 font-bold mt-1">Rp: {{ state.prise }}</p>
    </div>
</div>
</div>
<Footer />
</section>
      
</div>
  </template>