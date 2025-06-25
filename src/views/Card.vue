<!-- <script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = ref([])

onMounted(() => {
  cart.value = JSON.parse(localStorage.getItem('cart')) || []
})

watch(cart, (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart))
}, { deep: true })

function increase(index) {
  if (cart.value[index].quantity < 100) {
    cart.value[index].quantity++
  }
}

function decrease(index) {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--
  }
}

function removeItem(index) {
  cart.value.splice(index, 1)
}

function orderNow() {
  localStorage.removeItem('cart')
  cart.value = []
  alert('Order placed successfully!')
  router.push('/dashboard')
}
</script>

<template>
  <div v-if="cart.length > 0" class="p-6 space-y-6">
    <div v-for="(item, index) in cart" :key="item.id" class="flex items-center justify-between border p-4 rounded">
      <img :src="item.img" class="w-32 h-24 object-cover rounded" />
      <div class="text-right">
        <h2 class="font-bold">{{ item.title }}</h2>
        <p>Quantity: 100</p>
        <p class="font-semibold">Tk {{ item.price }}</p>
        <div class="flex items-center gap-2 justify-end mt-2">
          <button @click="decrease(index)" class="border px-2">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increase(index)" class="border px-2">+</button>
          <button @click="removeItem(index)" class="bg-red-600 text-white px-3 py-1 rounded">🗑️</button>
        </div>
      </div>
    </div>
    <button @click="orderNow" class="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">Order</button>
  </div>

  <div v-else class="text-center mt-20 text-gray-600 text-xl">
    Cart is empty.
  </div>
</template> -->
