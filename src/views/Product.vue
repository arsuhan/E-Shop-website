<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { reactive } from 'vue';
const states = reactive([
    {
        title: 'This is supa',
        description: 'its a good quality use in bangla.',
        img: '../views/images/qqq.png',
        subTitle: 'Home meet',
    },

    {
        title: 'This is a bed',
        description: 'its a good quality use in bangla.',
        img: '../views/images/images.jpeg',
        subTitle: 'Home meet 222222222222',
    },

    {
        title: 'This is supa',
        description: 'its a good quality use in bangla.',
        img: '../views/images/sss.jpeg',
        subTitle: 'Home meet',
    },

    {
        title: 'This is a bed',
        description: 'its a good quality use in bangla.',
        img: '../views/images/images.jpeg',
        subTitle: 'Home meet',
    },
    {
        title: 'This is supa',
        description: 'its a good quality use in bangla.',
        img: '../views/images/sss.jpeg',
        subTitle: 'Home meet',
    },

    {
        title: 'This is a bed',
        description: 'its a good quality use in bangla.',
        img: '../views/images/images.jpeg',
        subTitle: 'Home meet',
    },
    {
        title: 'This is a bed',
        description: 'its a good quality use in bangla.',
        img: '../views/images/images.jpeg',
        subTitle: 'Home meet',
    },
    {
        title: 'This is supa',
        description: 'its a good quality use in bangla.',
        img: '../views/images/sss.jpeg',
        subTitle: 'Home meet',
    },

    {
        title: 'This is a bed',
        description: 'its a good quality use in bangla.',
        img: '../views/images/images.jpeg',
        subTitle: 'Home meet',
    }

]);
</script>

<template>
       <Header />
   
     <!-- hed? -->
    <section class="relative mt-24 bg-amber-100 h-[300px] w-full mb-14 text-white py-20">
        <!-- <div class="absolute inset-0 bg-cover bg-center opacity-70" style="background-image: url('https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg'); width: 100%; height: 100%;"></div> -->
        <div class="relative ">
          <h1 class=" text-4xl mx-20 p-4 font-bold mt-4 text-amber-900 tems-center justify-center flex">Welcome to we are all product's</h1>
          <p class="text-2xl mx-25 font-bold text-amber-900 tems-center justify-center flex">Selected Products</p>

        </div>
    </section>
        <section class=" -mt-4 mx-28 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        
        <section  v-for="state in states" class="w-90 h-48 flex flex-col items-center bg-white border border-gray-400 rounded-sm shadow-sm md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            
            <img class="w-[40%] border-amber-400  h-[100%]" :src="state.img" alt="qqqq">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ state.title }}</h5>
                <h class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{ state.subTitle }}</h>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ state.description }}</p>
                <button type="button" class="text-white bg-gray-700 hover:bg-sky-950 rounded-sm border p-1 red-500">Buy now</button>
        
            </div>
        </section>
        
        
        
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