<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container-custom px-6">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-gray-100 shadow-lg">
        
        <div class="relative group h-[400px] overflow-hidden" data-aos="fade-right">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               :style="{ backgroundImage: `url(${base}images/dining.jpg)` }"></div> 
          </div>

        <div class="relative group h-[400px] overflow-hidden" data-aos="fade-left">
           <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
               :style="{ backgroundImage: `url(${base}images/sauna.jpg)` }"></div> 
           </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// BASE URL ADDED HERE
const base = import.meta.env.BASE_URL

const services = [
  { name: '24/7 Рецепция', icon: 'concierge', delay: 0 },
  // ...
]
</script>