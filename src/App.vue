<script setup>
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div class="font-montserrat">
  <AppHeader />

  <div class="content-wrapper">

    <div class="flex flex-col sm:flex-row mt-16 sm:mt-24 items-start">

      <main class="flex-1 p-4 sm:p-8 order-1">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <aside class="w-full sm:w-[400px] p-4 sm:p-8 flex-shrink-0 order-2 sm:sticky sm:top-12 mb-26 sm:mb-0">
        <div class="w-full bg-white rounded-[2rem] shadow-2xl p-6 relative overflow-hidden">

          <div class="absolute -top-12 -left-12 w-48 h-48 border-2 border-dashed border-orange-500 rounded-full opacity-50 transform rotate-12"></div>
          <div class="absolute -bottom-24 -right-12 w-48 h-48 border-2 border-dashed border-orange-500 rounded-full opacity-50 transform -rotate-45"></div>

          <div class="relative z-10 text-center">
            <div class="w-full h-auto p-2 bg-orange-600 rounded-2xl mb-6">
              <img src="/ava.jpg" onerror="this.onerror=null; this.src='https://placehold.co/300x400/ea580c/ffffff?text=Placeholder'" alt="Duulat-profile" class="w-full h-full object-cover rounded-xl" />
            </div>
            <h2 class="text-3xl font-bold text-black mb-3 leading-none">Дуулат Ишен Уулу</h2>
            <p class="text-lg text-gray-700 mb-8 px-2">Фулл-стек разработчик, создающий современные и эффективные цифровые решения для бизнеса и пользователей.</p>

            <div class="grid grid-cols-3 gap-3">

              <a href="https://wa.me/996705745413" target="_blank" class="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition duration-200 flex flex-col items-center justify-center text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 432 432"><path fill="#ffffff" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62zM214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25zm97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17z"/></svg>
                <span class="mt-1 leading-none">WhatsApp</span>
              </a>

              <a href="https://t.me/dulabro" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl transition duration-200 flex flex-col items-center justify-center text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#ffffff" d="M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10Zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258Z"/></svg>
                <span class="mt-1 leading-none">Telegram</span>
              </a>

              <a href="https://www.linkedin.com/in/duulat-ishenuulu-463311290/" target="_blank" class="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-xl transition duration-200 flex flex-col items-center justify-center text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1025 1024"><path fill="#ffffff" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5zm-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V352zm640 160q0-80-56-136t-136-56q-44 0-96.5 14t-95.5 39v-21q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V576q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V512z"/></svg>
                <span class="mt-1 leading-none">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

    </div>
  </div>
  </div>
</template>

<style scoped>
</style>