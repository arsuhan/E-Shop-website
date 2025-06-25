<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import products from './products.vue';
// import HomeView from './HomeView.vue';
import { reactive } from 'vue';

const states = reactive([
  {
    title: 'Dining',
    img: '/images/hh.jpg',
  },
  {
    title: 'Living',
    img: '/images/bed-2.jpg',
  },
  {
    title: 'BadRoom',
    img: '/images/image.png',
  }
  
]);

</script>

<template>

  
    <Header />
    <section class="relative w-full lg:h-screen sm:h-[400px] xs:h-[280px] bg-cover bg-center flex items-center justify-end" style="background-image: url('/images/vvv.jpeg');">
      <!-- <section class="relative w-full lg:h-screen sm:h-[400px] xs:h-[280px] bg-cover bg-center flex items-center justify-end" style="background-image: url('/images/bedd-1.jpg');"> -->

        <section target="_blank" class="block sm:hidden">
          <h1 class="font-bold text-2xl mx-14 text-yellow-300">Wellcome to our products</h1>
        </section>

    <div target="_blank" class="hidden sm:block bg-amber-100 p-10 mt-14  rounded-lg max-w-md mr-20 shadow-lg">
      <p class="text-sm font-medium text-gray-700 uppercase mb-2">New Arrival</p>
      <h2 class="text-3xl font-bold text-yellow-800 mb-3">
        Discover Our<br />
        <span class="text-yellow-700">New Collection</span>
      </h2>
      <p class="text-gray-700 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <button class="bg-yellow-700 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-800 transition-all">
        BUY NOW
      </button>
    </div>
  </section>

<section class="items-center justify-center lg:mt-16 xs:mt-8 flex">
    <h1 class="font-bold lg:text-3xl xs:text-2xl">
        Browse the Range     
    </h1>
</section>
<p class="items-center flex justify-center text-sm lg:text-[20px] xs:text-[16px] text-gray-400 mt-2 xs:mx-3">Lorem ipsum dolor sit amit, consectetur adipiscing elit.</p>
<section>

</section>
<!-- <section class="mt-12 px-4 sm:px-8 lg:px-30 -gap-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center justify-center
 mx-30 gap-8 lg:-gap-1">
  <div 
    v-for="state in states" 
    :key="state.title" 
    class="w-full h-[380px] lg:w-[250px] lg:h-[380px] sm:w-[230px] sm:h-[330px] mx-auto mb-4">
    
    <img 
      :src="state.img" 
      alt=""
      class="w-full h-full object-cover rounded-sm" />
      
    <div class="p-4 text-xl text-center font-bold">
      <h1>{{ state.title }}</h1>
    </div>
  </div>
</section> -->
<section class="lg:mt-12 xs:mt-3 mx-4 sm:mx-8 lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center">
  <div 
    v-for="state in states" 
    :key="state.title" 
    class="w-full h-[380px] lg:w-[300px] lg:h-[380px] xs:h-[150px] mt-12 sm:w-[220px] sm:h-[300px] mx-auto mb-4">
    
    <img 
      :src="state.img" 
      alt=""
      class="w-full h-full object-cover rounded-sm " />
      
    <div class="p-4 text-xl text-center font-bold xs:-mt-2 lg:mt-0">
      <h1>{{ state.title }}</h1>
    </div>
  </div>
</section>

<!-- <section  class=" mt-12 mx-30 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:-gap-1 items-center justify-center flex ">
  
<div v-for="state in states" class=" lg:w-[300px] lg:h-[380px] xs:w-[80px] xs:h-[80px]">
    <img class=" lg:w-full rounded-sm lg:h-full" :src="state.img" alt="" />
    <div class="p-4 text-xl items-center justify-center flex font-bold">
        <h1>{{ state.title }}</h1>
    </div>
</div>

</section> -->
<products />

    <!-- <section class=" mt-8 mx-28 flex gap-6 items-center justify-between py-1 bg-amber-100">
    <h1 class="font-bold mx-2">
        Deal of the day
    </h1>

    <router-link to="/All-Product"><a href="#" class="">
        <h1 class="text-xl underline mx-2">
        Vue all
    </h1>
</a></router-link>

</section> -->

  <div class="mt-16">
    
<Footer />
  </div>
</template>

