<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="min-h-screen bg-gray-900 p-8 text-gray-200">
    <h1 class="text-3xl font-bold mb-6">{{ msg }}</h1>

    <div class="card bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <button
          type="button"
          @click="count++"
          class="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-medium"
      >
        count is {{ count }}
      </button>
      <p class="mt-4 text-gray-400">
        Edit <code class="bg-gray-700 px-1 rounded">components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p class="mb-2">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-blue-400 hover:underline"
      >create-vue</a
      >, the official Vue + Vite starter
    </p>

    <p class="mb-2">
      Learn more about IDE Support for Vue in the
      <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-blue-400 hover:underline"
      >Vue Docs Scaling up Guide</a
      >.
    </p>

    <p class="text-gray-500 mt-6">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
