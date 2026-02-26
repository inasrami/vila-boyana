<script setup>
import imgDining from '../assets/dining.jpg'
import imgSauna from '../assets/sauna.jpg'

const services = [
  { name: '24/7 Рецепция', icon: 'concierge', delay: 0 },
  { name: 'Паркинг', icon: 'local_parking', delay: 100 },
  { name: 'Високоскоростен Wi-Fi', icon: 'wifi', delay: 200 },
  { name: 'Рум Сървис', icon: 'room_service', delay: 300 },
]
</script>

<template>
  <div class="relative group h-[400px] overflow-hidden" data-aos="fade-right">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
           :style="{ backgroundImage: `url(${imgDining})` }"></div> 
      </div>

  <div class="relative group h-[400px] overflow-hidden" data-aos="fade-left">
       <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
           :style="{ backgroundImage: `url(${imgSauna})` }"></div> 
      </div>
</template>