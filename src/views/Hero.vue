<script setup>
import HomeView from './HomeView.vue';
import { reactive } from 'vue';

const states = reactive([
    
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

<!-- <template>
    
    <section class=" mt-6 mx-28 flex gap-6 items-cente">
    <h1 class="font-bold text-xl mx-2">
        Top categories of the monts
    </h1>
</section>

<section class=" mt-6 mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
   


        
<section  v-for="state in states" class="w-90 h-48 flex flex-col items-center bg-white border border-gray-400 rounded-sm shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    
    <img class="w-[40%] border-amber-400  h-[100%]" :src="state.img" alt="cccccc">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ state.title }}</h5>
        <h class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{ state.subTitle }}</h>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ state.description }}</p>
        <button type="button" class="text-black font-bold bg-white border-1 border-amber-400 hover:bg-sky-800 hover:text-amber-500 rounded-sm p-1">Buy now</button>

    </div>
</section>
</section>

<section class=" mt-6 mx-28 flex gap-6 items-center justify-between bg-amber-100">
    <h1 class="font-bold mx-2">
        Deal of the day
    </h1>

    <router-link to="/all-product"><a href="#" class="">
        <h1 class="text-xl underline mx-2">
        Vue all
    </h1>
</a></router-link>
</section>

</template> -->
