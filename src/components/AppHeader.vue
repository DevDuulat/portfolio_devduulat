<script setup>
import { ref } from 'vue';

// Управление состоянием всплывающих подсказок
const activeTooltip = ref(null);

// Показывает подсказку только на больших экранах (чтобы избежать конфликта с мобильным поведением)
const showTooltip = (index) => {
  // Проверяем ширину, чтобы подсказки работали только на десктопе (>= sm)
  if (window.innerWidth >= 640) {
    activeTooltip.value = index;
  }
};

const hideTooltip = () => {
  activeTooltip.value = null;
};

// На мобильных устройствах при клике мы сразу скрываем подсказку, чтобы избежать "залипания"
const handleMobileClick = () => {
  if (window.innerWidth < 640) {
    activeTooltip.value = null;
  }
};
</script>

<template>
  <header class="fixed z-50 p-0 w-full lg:top-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-auto bottom-0 lg:bottom-auto">
    <nav class="bg-[#1c1a19] rounded-2xl p-4 shadow-2xl flex justify-around lg:block">
      <ul class="flex justify-around items-center w-full lg:w-auto lg:space-x-8">

        <li class="tooltip-container" @mouseenter="showTooltip(0)" @mouseleave="hideTooltip()" @click="handleMobileClick">
          <router-link to="/" class="text-white opacity-80 hover:opacity-100 transition duration-150 p-2 block rounded-lg">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1025"><path fill="currentColor" d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0-26-18.5 45t-45.5 19H640V737q0-13-9.5-22.5T608 705H416q-13 0-22.5 9.5T384 737v288H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19q20-20 49-19q29-1 49 19l444 444q19 19 19 46.5t-19.5 47.5z"/></svg>
          </router-link>
          <span class="tooltip-text" :class="{ 'visible-tooltip': activeTooltip === 0 }">Главная</span>
        </li>

        <li class="tooltip-container" @mouseenter="showTooltip(1)" @mouseleave="hideTooltip()" @click="handleMobileClick">
          <router-link to="/projects" class="text-white opacity-80 hover:opacity-100 transition duration-150 p-2 block rounded-lg">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8 3.792l-2.06 2.06A.5.5 0 0 1 5.585 6H1V4.5ZM1 7v4.5A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 4H9.207l-2.56 2.56A1.5 1.5 0 0 1 5.585 7H1Z"/></svg>
          </router-link>
          <span class="tooltip-text" :class="{ 'visible-tooltip': activeTooltip === 1 }">Проекты</span>
        </li>

        <li class="tooltip-container" @mouseenter="showTooltip(2)" @mouseleave="hideTooltip()" @click="handleMobileClick">
          <router-link to="/experience" class="text-white opacity-80 hover:opacity-100 transition duration-150 p-2 block rounded-lg">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/></svg>
          </router-link>
          <span class="tooltip-text" :class="{ 'visible-tooltip': activeTooltip === 2 }">Опыт работы</span>
        </li>

        <li class="tooltip-container" @mouseenter="showTooltip(3)" @mouseleave="hideTooltip()" @click="handleMobileClick">
          <router-link to="/skills" class="text-white opacity-80 hover:opacity-100 transition duration-150 p-2 block rounded-lg">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2l118.9 79.2c8.9 5.9 14.2 15.9 14.2 26.6v49.6l90.8 90.8c33.3-15 73.9-8.9 101.2 18.5l126.1 126.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2L178.8 192h-49.6c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5l35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5c10 3.8 11.8 16.5 4.3 24.1l-56.7 56.7c-3 3-4.7 7.1-4.7 11.3V144c0 8.8 7.2 16 16 16h41.4c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3c6.8 17.7 10.5 37 10.5 57.1c0 43.2-17.2 82.3-45 111.1L450 222c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8V97.1l-.2-5c-.8-12.4-4.4-24.3-10.5-34.9C290.8 22.2 334.8 0 384.1-.1z"/></svg>
          </router-link>
          <span class="tooltip-text" :class="{ 'visible-tooltip': activeTooltip === 3 }">Навыки</span>
        </li>

        <!--        <li class="tooltip-container" @mouseenter="showTooltip(4)" @mouseleave="hideTooltip()" @click="handleMobileClick">-->
        <!--          <router-link to="/blog" class="text-white opacity-80 hover:opacity-100 transition duration-150 p-2 block rounded-lg">-->
        <!--            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffffff" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>-->
        <!--          </router-link>-->
        <!--          <span class="tooltip-text" :class="{ 'visible-tooltip': activeTooltip === 4 }">Блог</span>-->
        <!--        </li>-->
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.tooltip-container {
  position: relative;
  padding: 0 4px;
}
.tooltip-text {
  visibility: hidden;
  background-color: #374151;
  color: #ffffff;
  text-align: center;
  padding: 4px 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 60;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity .3s, visibility .3s;
  font-size: .875rem;
}
.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #374151 transparent transparent transparent;
}
.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.visible-tooltip {
  visibility: visible !important;
  opacity: 1 !important;
}

@media (max-width: 639px) {
  .tooltip-text {
    display: none;
  }
  ul {
    gap: 0;
  }
  nav {
    padding: 1rem 1rem;
  }
}
</style>