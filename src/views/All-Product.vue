<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

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

function goToDetails(index) {
  router.push({ name: 'ProductDetails', params: { index } })
}
</script>

<template>
  <Header />

  <section class="relative mt-14 bg-blue-700 mb-14 text-white lg:py-40 xs:py-16 text-center">
    <div class="absolute inset-0 bg-cover bg-center opacity-70" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYUNonl0NrVWoEtVd9K5DdT39LPQtzgLdXQ&s');"></div>
    <div class="relative text-black justify-center items-center">
      <h1 class="text-5xl font-semibold">Shop</h1>
      <div class="flex justify-center items-center">
        <p class="mt-2 flex text-xl font-semibold">Home
          <svg class="w-8 h-4 mt-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          Shop
        </p>
      </div>
    </div>
  </section>

  <section class="bg-amber-200 flex flex-col md:flex-row items-center justify-between px-4 xs:-mt-16 md:px-28 lg:py-4 xs:py-1">
    <div class="flex gap-4 font-medium mb-2 md:mb-0">
      <p>Filter</p>
      <span>|</span>
      <p>Showing 1-16 of 32 results</p>
    </div>
    <div class="flex gap-4">
      <p class="font-medium">Show</p>
      <div class="bg-white h-10 w-12 flex items-center justify-center">16</div>
      <p class="font-medium">Sort by</p>
      <div class="bg-white h-10 w-20 flex items-center justify-center">Default</div>
    </div>
  </section>

  <section class="mt-16 px-4 lg:-mx-10 md:px-20">
    <h1 class="lg:text-3xl xs:text-lg font-bold">Top Categories Product's</h1>
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
      <div class="p-4 ">
        <h3 class="font-semibold text-lg md:text-xl">{{ state.title }}</h3>
        <p class="text-gray-500 text-sm">{{ state.subTitle }}</p>
        <p class="text-gray-800 font-bold mt-1">Rp: {{ state.prise }}</p>
      </div>
    </div>
  </section>

  

   <section class="lg:mt-24 xs:mt-16 flex flex-wrap justify-center gap-4 px-4">
    <a href="" class="bg-amber-300 h-12 w-12 rounded-lg flex items-center justify-center font-bold">1</a>
    <a href="i-phone" class="bg-amber-100 h-12 w-12 rounded-lg flex items-center justify-center font-bold">2</a>
    <a href="" class="bg-amber-100 h-12 w-12 rounded-lg flex items-center justify-center font-bold">3</a>
    <a href="" class="bg-amber-100 h-12 w-24 rounded-lg flex items-center justify-center font-bold">Next</a>
  </section>

  <section class="bg-amber-100 lg:mt-24 xs:mt-16 lg:py-14 xs:py-6 px-4 flex flex-wrap justify-center lg:gap-20 xs:gap-5 text-center">
    <div>
      <h2 class="text-2xl font-bold">High Quality</h2>
      <p class="mt-2 text-[18px] text-gray-600">Crafted from top materials</p>
    </div>
    <div>
      <h2 class="text-2xl font-bold">Warranty Protection</h2>
      <p class="mt-2 text-[18px] text-gray-600">Over 2 years</p>
    </div>
    <div>
      <h2 class="text-2xl font-bold">Free Shipping</h2>
      <p class="mt-2 text-[18px] text-gray-600">Order over 150 $</p>
    </div>
    <div>
      <h2 class="text-2xl font-bold">24 / 7 Support</h2>
      <p class="mt-2 text-[18px] text-gray-600">Dedicated support</p>
    </div>
  </section>

  <Footer />
</template> 

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(247, 243, 243);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>